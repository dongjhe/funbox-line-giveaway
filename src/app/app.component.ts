import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GIVEAWAYS, REGIONS, GiveawayItem } from './giveaway-data';

interface SelectedGiveaway {
  region: string;
  store: string;
  item: GiveawayItem;
}

interface ContinuousDrawSession {
  sequenceUrls: string[];
  pendingUrl: string | null;
  selectedRegions: string[];
  selectedProductOrder: string[];
  selectedStartTime: string | null;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  private readonly clickedStorageKey = 'funbox-line-giveaway-clicked';
  private readonly continuousSessionStorageKey = 'funbox-line-giveaway-continuous-session';
  private readonly continuousDelayMs = 1000;
  private continuousNextTimer: number | null = null;
  private continuousCountdownTimer: number | null = null;
  readonly regions = REGIONS;
  readonly giveaways = GIVEAWAYS;
  clickedGiveaways = new Set<string>();
  selectedRegions = new Set<string>();
  selectedProducts = new Set<string>();
  selectedProductOrder: string[] = [];
  selectedStartTime: string | null = null;
  continuousMode = false;
  continuousIndex = 0;
  continuousCountdown = 0;
  continuousStatus = '按「開始自動連抽」後，返回本頁會在 1 秒後自動找下一個沒灰底的項目。';

  constructor() {
    this.loadClickedGiveaways();
  }

  ngOnInit(): void {
    this.resumeContinuousDraw();
  }

  ngOnDestroy(): void {
    this.clearContinuousTimers();
  }

  @HostListener('window:pageshow')
  handlePageShow(): void {
    this.resumeContinuousDraw();
  }

  @HostListener('window:focus')
  handleWindowFocus(): void {
    this.resumeContinuousDraw();
  }

  @HostListener('document:visibilitychange')
  handleVisibilityChange(): void {
    if (!document.hidden) this.resumeContinuousDraw();
  }

  @HostListener('document:click', ['$event'])
  closeFiltersOnOutsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target?.closest('.product-filter')) {
      const filter = document.querySelector('.product-filter') as HTMLDetailsElement | null;
      if (filter) filter.open = false;
    }
    if (!target?.closest('.region-select-filter')) {
      const filter = document.querySelector('.region-select-filter') as HTMLDetailsElement | null;
      if (filter) filter.open = false;
    }
  }

  get totalGiveawayCount(): number {
    return Object.values(this.giveaways)
      .flat()
      .reduce((t, g) => t + g.items.length, 0);
  }

  regionStoreCount(region: string): number {
    const stores =
      region === '全部' ? Object.values(this.giveaways).flat() : (this.giveaways[region] ?? []);
    return stores.filter((g) => g.items.length > 0 && this.matchesSelectedStartTime(g)).length;
  }

  get regionOptions(): string[] {
    return this.regions
      .map((r) => r.name)
      .filter((r) => r !== '全部' && this.regionStoreCount(r) > 0);
  }

  get visibleRegions(): string[] {
    return this.selectedRegions.size
      ? this.regionOptions.filter((r) => this.selectedRegions.has(r))
      : this.regionOptions;
  }

  isRegionSelected(region: string): boolean {
    return this.selectedRegions.has(region);
  }
  toggleRegion(region: string, checked: boolean): void {
    const next = new Set(this.selectedRegions);
    checked ? next.add(region) : next.delete(region);
    this.selectedRegions = next;
    this.resetContinuousDraw();
  }
  clearSelectedRegions(): void {
    this.selectedRegions = new Set<string>();
  }
  get timeOptions(): string[] {
    const times = new Set<string>();
    Object.values(this.giveaways)
      .flat()
      .filter((giveaway) => giveaway.items.length > 0)
      .forEach((giveaway) => {
        const time = this.startTimeKey(giveaway.startTime);
        if (time) times.add(time);
      });
    return [...times].sort((a, b) => this.timeToMinutes(a) - this.timeToMinutes(b));
  }
  isStartTimeSelected(time: string | null): boolean {
    return this.selectedStartTime === time;
  }
  selectStartTime(time: string | null): void {
    this.selectedStartTime = time;
    this.resetContinuousDraw();
  }
  resetAllFilters(productFilter?: HTMLDetailsElement, regionFilter?: HTMLDetailsElement): void {
    this.clearSelectedRegions();
    this.clearSelectedProducts();
    this.selectedStartTime = null;
    this.resetContinuousDraw();
    if (productFilter) productFilter.open = false;
    if (regionFilter) regionFilter.open = false;
  }

  get productOptions(): string[] {
    const products = new Map<string, string>();
    Object.values(this.giveaways)
      .flat()
      .flatMap((g) => g.items)
      .forEach((item) => {
        const key = this.productKey(item.name);
        if (!products.has(key)) products.set(key, this.productLabel(item.name));
      });
    return [...products.entries()]
      .sort(([a], [b]) => a.localeCompare(b, 'zh-Hant', { numeric: true, sensitivity: 'base' }))
      .map(([, name]) => name);
  }
  get orderedProductOptions(): string[] {
    const order = new Map(this.selectedProductOrder.map((c, i) => [c, i]));
    return [...this.productOptions].sort((a, b) => {
      const ia = order.get(this.productKey(a)),
        ib = order.get(this.productKey(b));
      if (ia !== undefined && ib !== undefined) return ia - ib;
      if (ia !== undefined) return -1;
      if (ib !== undefined) return 1;
      return 0;
    });
  }
  get selectedGiveaways(): SelectedGiveaway[] {
    const results = this.visibleRegions.flatMap((region) =>
      (this.giveaways[region] ?? [])
        .filter((g) => this.matchesSelectedStartTime(g))
        .flatMap((g) => this.filteredItems(g).map((item) => ({ region, store: g.store, item }))),
    );
    const order = new Map(this.selectedProductOrder.map((c, i) => [c, i]));
    return results.sort(
      (a, b) =>
        (order.get(this.productKey(a.item.name)) ?? 9999) -
        (order.get(this.productKey(b.item.name)) ?? 9999),
    );
  }
  toggleProduct(product: string, checked: boolean): void {
    const key = this.productKey(product),
      next = new Set(this.selectedProducts);
    if (checked) {
      next.add(key);
      if (!this.selectedProductOrder.includes(key))
        this.selectedProductOrder = [...this.selectedProductOrder, key];
    } else {
      next.delete(key);
      this.selectedProductOrder = this.selectedProductOrder.filter((c) => c !== key);
    }
    this.selectedProducts = next;
    this.resetContinuousDraw();
  }
  productSelectionNumber(product: string): number | null {
    const i = this.selectedProductOrder.indexOf(this.productKey(product));
    return i >= 0 ? i + 1 : null;
  }
  isProductSelected(product: string): boolean {
    return this.selectedProducts.has(this.productKey(product));
  }
  clearSelectedProducts(): void {
    this.selectedProducts = new Set<string>();
    this.selectedProductOrder = [];
    this.resetContinuousDraw();
  }
  clearClickedGiveaways(): void {
    this.resetContinuousDraw();
    localStorage.removeItem(this.clickedStorageKey);
    this.clickedGiveaways = new Set<string>();
  }
  get currentContinuousGiveaway(): SelectedGiveaway | null {
    const index = this.findNextUnclickedIndex(this.continuousIndex);
    return index >= 0 ? this.selectedGiveaways[index] : null;
  }
  get continuousCountText(): string {
    const total = this.selectedGiveaways.length;
    const currentIndex = this.findNextUnclickedIndex(this.continuousIndex);
    if (!total) return '第 0 / 0 個';
    return currentIndex >= 0
      ? `第 ${currentIndex + 1} / ${total} 個`
      : `已完成 ${total} / ${total} 個`;
  }
  triggerContinuousDraw(): void {
    if (this.continuousMode) return;

    const currentIndex = this.findNextUnclickedIndex(this.continuousIndex);
    const current = currentIndex >= 0 ? this.selectedGiveaways[currentIndex] : null;
    if (!current) {
      this.continuousStatus = '目前沒有尚未抽選的項目。';
      return;
    }

    this.continuousIndex = currentIndex;
    const session: ContinuousDrawSession = {
      sequenceUrls: this.selectedGiveaways.map(({ item }) => item.url),
      pendingUrl: current.item.url,
      selectedRegions: [...this.selectedRegions],
      selectedProductOrder: [...this.selectedProductOrder],
      selectedStartTime: this.selectedStartTime,
    };

    this.continuousMode = true;
    this.continuousStatus = '已開啟抽選，返回本頁後會自動繼續。';
    this.writeContinuousSession(session);
    window.location.assign(current.item.url);
  }
  resetContinuousDraw(): void {
    this.clearContinuousTimers();
    this.clearContinuousSession();
    this.continuousMode = false;
    this.continuousIndex = 0;
    this.continuousCountdown = 0;
    this.continuousStatus = '按「開始自動連抽」後，返回本頁會在 1 秒後自動找下一個沒灰底的項目。';
  }
  stopContinuousDraw(): void {
    if (!this.continuousMode) {
      this.resetContinuousDraw();
      return;
    }
    this.clearContinuousTimers();
    this.clearContinuousSession();
    this.continuousMode = false;
    this.continuousCountdown = 0;
    this.continuousStatus = '已停止自動連抽；灰底紀錄與目前進度已保留。';
  }
  filteredItems(giveaway: { items: GiveawayItem[] }): GiveawayItem[] {
    if (!this.selectedProducts.size) return giveaway.items;
    const order = new Map(this.selectedProductOrder.map((c, i) => [c, i]));
    return giveaway.items
      .filter((item) => this.selectedProducts.has(this.productKey(item.name)))
      .sort(
        (a, b) =>
          (order.get(this.productKey(a.name)) ?? 9999) -
          (order.get(this.productKey(b.name)) ?? 9999),
      );
  }
  hasVisibleGiveaways(region: string): boolean {
    const stores = this.giveaways[region] ?? [];
    return stores.some(
      (g) =>
        g.items.length > 0 && (!this.selectedProducts.size || this.filteredItems(g).length > 0),
    );
  }
  isGiveawayClicked(url: string): boolean {
    return this.clickedGiveaways.has(url);
  }
  markGiveawayClicked(url: string): void {
    this.clickedGiveaways.add(url);
    localStorage.setItem(this.clickedStorageKey, JSON.stringify([...this.clickedGiveaways]));
  }
  private findNextUnclickedIndex(startIndex: number, sequence = this.selectedGiveaways): number {
    for (let index = Math.max(0, startIndex); index < sequence.length; index += 1) {
      if (!this.isGiveawayClicked(sequence[index].item.url)) return index;
    }
    return -1;
  }
  private restoreContinuousFilters(session: ContinuousDrawSession): void {
    this.selectedRegions = new Set(session.selectedRegions);
    this.selectedProductOrder = [...session.selectedProductOrder];
    this.selectedProducts = new Set(session.selectedProductOrder);
    this.selectedStartTime = session.selectedStartTime;
  }
  private resumeContinuousDraw(): void {
    if (document.hidden || this.continuousNextTimer !== null) return;

    const session = this.readContinuousSession();
    if (!session?.pendingUrl) return;

    this.restoreContinuousFilters(session);
    const completedIndex = session.sequenceUrls.indexOf(session.pendingUrl);
    if (completedIndex < 0) {
      this.finishContinuousDraw('找不到上一筆抽選資料，已停止自動連抽。');
      return;
    }

    this.markGiveawayClicked(session.pendingUrl);
    session.pendingUrl = null;
    this.writeContinuousSession(session);

    const nextUrl = session.sequenceUrls
      .slice(completedIndex + 1)
      .find((url) => !this.isGiveawayClicked(url) && this.findGiveawayByUrl(url));

    if (!nextUrl) {
      this.finishContinuousDraw('已到目前清單最後一筆，自動連抽完成。');
      return;
    }

    const nextIndex = this.selectedGiveaways.findIndex(({ item }) => item.url === nextUrl);
    if (nextIndex < 0) {
      this.finishContinuousDraw('下一筆已不在目前清單中，已停止自動連抽。');
      return;
    }

    this.continuousIndex = nextIndex;
    this.continuousMode = true;
    this.scheduleNextContinuousDraw(nextUrl, session);
  }
  private scheduleNextContinuousDraw(url: string, session: ContinuousDrawSession): void {
    this.clearContinuousTimers();
    this.continuousCountdown = Math.ceil(this.continuousDelayMs / 1000);
    this.continuousStatus = `上一筆已完成；${this.continuousCountdown} 秒後開啟下一個（可按停止）。`;

    this.continuousCountdownTimer = window.setInterval(() => {
      this.continuousCountdown -= 1;
      if (this.continuousCountdown > 0) {
        this.continuousStatus = `上一筆已完成；${this.continuousCountdown} 秒後開啟下一個（可按停止）。`;
      }
    }, 1000);

    this.continuousNextTimer = window.setTimeout(() => {
      this.clearContinuousTimers();
      const latestSession = this.readContinuousSession();
      if (
        !latestSession ||
        latestSession.sequenceUrls.join('|') !== session.sequenceUrls.join('|')
      ) {
        this.continuousMode = false;
        return;
      }

      const next = this.findGiveawayByUrl(url);
      if (!next || this.isGiveawayClicked(url)) {
        this.resumeFromNextAvailable(url, latestSession);
        return;
      }

      latestSession.pendingUrl = url;
      this.writeContinuousSession(latestSession);
      this.continuousStatus = '正在開啟下一個抽選…';
      window.location.assign(url);
    }, this.continuousDelayMs);
  }
  private resumeFromNextAvailable(skippedUrl: string, session: ContinuousDrawSession): void {
    const skippedIndex = session.sequenceUrls.indexOf(skippedUrl);
    const nextUrl = session.sequenceUrls
      .slice(skippedIndex + 1)
      .find((url) => !this.isGiveawayClicked(url) && this.findGiveawayByUrl(url));

    if (!nextUrl) {
      this.finishContinuousDraw('已到目前清單最後一筆，自動連抽完成。');
      return;
    }

    const nextIndex = this.selectedGiveaways.findIndex(({ item }) => item.url === nextUrl);
    if (nextIndex >= 0) this.continuousIndex = nextIndex;
    this.scheduleNextContinuousDraw(nextUrl, session);
  }
  private finishContinuousDraw(status: string): void {
    this.clearContinuousTimers();
    this.clearContinuousSession();
    this.continuousMode = false;
    this.continuousCountdown = 0;
    this.continuousIndex = this.selectedGiveaways.length;
    this.continuousStatus = status;
  }
  private findGiveawayByUrl(url: string): SelectedGiveaway | null {
    for (const region of this.regions.map(({ name }) => name).filter((name) => name !== '全部')) {
      for (const giveaway of this.giveaways[region] ?? []) {
        const item = giveaway.items.find((candidate) => candidate.url === url);
        if (item) return { region, store: giveaway.store, item };
      }
    }
    return null;
  }
  private clearContinuousTimers(): void {
    if (this.continuousNextTimer !== null) {
      window.clearTimeout(this.continuousNextTimer);
      this.continuousNextTimer = null;
    }
    if (this.continuousCountdownTimer !== null) {
      window.clearInterval(this.continuousCountdownTimer);
      this.continuousCountdownTimer = null;
    }
  }
  private readContinuousSession(): ContinuousDrawSession | null {
    const saved = sessionStorage.getItem(this.continuousSessionStorageKey);
    if (!saved) return null;
    try {
      const session: unknown = JSON.parse(saved);
      if (
        typeof session === 'object' &&
        session !== null &&
        Array.isArray((session as ContinuousDrawSession).sequenceUrls) &&
        ((session as ContinuousDrawSession).pendingUrl === null ||
          typeof (session as ContinuousDrawSession).pendingUrl === 'string') &&
        Array.isArray((session as ContinuousDrawSession).selectedRegions) &&
        Array.isArray((session as ContinuousDrawSession).selectedProductOrder) &&
        ((session as ContinuousDrawSession).selectedStartTime === null ||
          typeof (session as ContinuousDrawSession).selectedStartTime === 'string')
      ) {
        return session as ContinuousDrawSession;
      }
    } catch {
      // Invalid or stale session data is discarded below.
    }
    this.clearContinuousSession();
    return null;
  }
  private writeContinuousSession(session: ContinuousDrawSession): void {
    sessionStorage.setItem(this.continuousSessionStorageKey, JSON.stringify(session));
  }
  private clearContinuousSession(): void {
    sessionStorage.removeItem(this.continuousSessionStorageKey);
  }
  matchesSelectedStartTime(giveaway: { startTime?: string }): boolean {
    return (
      !this.selectedStartTime || this.startTimeKey(giveaway.startTime) === this.selectedStartTime
    );
  }
  private startTimeKey(startTime?: string): string {
    const match = startTime?.match(/\d{4}[/-]\d{1,2}[/-]\d{1,2}\s+(\d{1,2}):(\d{2})(?!\d)/);
    return match ? `${match[1].padStart(2, '0')}:${match[2]}` : '';
  }
  private timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
  private productCode(name: string): string {
    const match = name.toUpperCase().match(/\b(?:BXG|BX|CX|UX)-?\d+\b/);
    return match ? match[0].replace(/^(BXG|BX|CX|UX)(\d)/, '$1-$2') : name.trim();
  }
  private productIdentity(name: string): string {
    const text = name.replace(/🎉/g, '').replace(/(?:BXG|BX|CX|UX)-?\d+/gi, '');
    const aliases = [
      '蒼龍神劍',
      '倉龍神劍',
      '暴風天馬',
      '爆擊天馬',
      '極限衝擊戰鬥盤',
      '發射器',
      '專業收納包',
      '獨角刺心',
      '皓戰猛虎',
      '鳳凰閃焰',
      '榮耀武神',
      '榮耀戰神',
      '惡魔幽冥改造組',
      '惡魔冥界改造組',
      '龍王閃擊',
      '烈焰飛鳳',
      '銀牙烈虎',
      '武士魂斬',
      '惡魔戰錘',
      '惡魔戰鎚',
      '天堂日輪',
      '子彈獅鷲',
      '旋風發射器',
      '雙重極限衝擊戰鬥盤',
    ];
    const found = aliases.find((alias) => text.includes(alias));
    if (found) {
      if (found === '倉龍神劍') return '蒼龍神劍';
      if (found === '惡魔冥界改造組') return '惡魔幽冥改造組';
      if (found === '榮耀戰神') return '榮耀武神';
      if (found === '惡魔戰鎚') return '惡魔戰錘';
      return found;
    }
    const chinese = text.match(/[\u3400-\u9fff]+/g)?.join('') ?? '';
    return (
      chinese ||
      text
        .replace(/\$\s*[\d,]+(?:\.\d+)?/g, '')
        .trim()
        .toUpperCase()
    );
  }
  private productKey(name: string): string {
    const code = this.productCode(name).toUpperCase();
    return code === 'BX-00' ? `${code}|${this.productIdentity(name)}` : code;
  }
  private productLabel(name: string): string {
    const code = this.productCode(name).toUpperCase();
    const identity = this.productIdentity(name);
    return identity ? `${code} ${identity}` : code;
  }
  private loadClickedGiveaways(): void {
    const saved = localStorage.getItem(this.clickedStorageKey);
    if (!saved) return;
    try {
      const urls: unknown = JSON.parse(saved);
      if (Array.isArray(urls))
        this.clickedGiveaways = new Set(urls.filter((u): u is string => typeof u === 'string'));
    } catch {
      localStorage.removeItem(this.clickedStorageKey);
    }
  }
}
