import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GIVEAWAYS, REGIONS, GiveawayItem } from './giveaway-data';

interface SelectedGiveaway {
  region: string;
  store: string;
  item: GiveawayItem;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly clickedStorageKey = 'funbox-line-giveaway-clicked';
  readonly regions = REGIONS;
  readonly giveaways = GIVEAWAYS;
  clickedGiveaways = new Set<string>();
  selectedRegions = new Set<string>();
  selectedProducts = new Set<string>();
  selectedProductOrder: string[] = [];
  continuousMode = false;
  continuousIndex = 0;

  constructor() {
    this.loadClickedGiveaways();
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
    if (region === '全部') {
      return Object.values(this.giveaways)
        .flat()
        .filter((g) => g.items.length > 0).length;
    }
    return (this.giveaways[region] ?? []).filter((g) => g.items.length > 0).length;
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
  resetAllFilters(productFilter?: HTMLDetailsElement, regionFilter?: HTMLDetailsElement): void {
    this.clearSelectedRegions();
    this.clearSelectedProducts();
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
      (this.giveaways[region] ?? []).flatMap((g) =>
        this.filteredItems(g).map((item) => ({ region, store: g.store, item })),
      ),
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
    localStorage.removeItem(this.clickedStorageKey);
    this.clickedGiveaways = new Set<string>();
  }
  get currentContinuousGiveaway(): SelectedGiveaway | null {
    return this.selectedGiveaways[this.continuousIndex] ?? null;
  }
  get continuousCountText(): string {
    const total = this.selectedGiveaways.length;
    return total ? `第 ${this.continuousIndex + 1} / ${total} 個` : '第 0 / 0 個';
  }
  triggerContinuousDraw(): void {
    const current = this.currentContinuousGiveaway;
    if (!current) return;
    this.markGiveawayClicked(current.item.url);
    const popup = window.open(current.item.url, '_blank', 'noopener,noreferrer');
    if (popup) popup.opener = null;
    if (!this.continuousMode) {
      this.continuousMode = true;
      if (this.selectedGiveaways.length > 1) this.continuousIndex = 1;
      return;
    }
    if (this.continuousIndex < this.selectedGiveaways.length - 1) {
      this.continuousIndex += 1;
      return;
    }
    this.resetContinuousDraw();
  }
  resetContinuousDraw(): void {
    this.continuousMode = false;
    this.continuousIndex = 0;
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
  private productCode(name: string): string {
    const match = name.toUpperCase().match(/\b(?:BXG|BX|CX|UX)-?\d+\b/);
    return match ? match[0].replace(/^(BXG|BX|CX|UX)(\d)/, '$1-$2') : name.trim();
  }
  private productIdentity(name: string): string {
    const text = name.replace(/🎉/g, '').replace(/(?:BXG|BX|CX|UX)-?\d+/gi, '');
    const aliases = [
      '蒼龍神劍', '倉龍神劍', '暴風天馬', '爆擊天馬', '極限衝擊戰鬥盤', '發射器', '專業收納包',
      '獨角刺心', '皓戰猛虎', '鳳凰閃焰', '榮耀武神', '榮耀戰神', '惡魔幽冥改造組',
      '惡魔冥界改造組', '龍王閃擊', '烈焰飛鳳', '銀牙烈虎', '武士魂斬', '惡魔戰錘',
      '惡魔戰鎚', '天堂日輪', '子彈獅鷲', '旋風發射器', '雙重極限衝擊戰鬥盤',
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
    return chinese || text.replace(/\$\s*[\d,]+(?:\.\d+)?/g, '').trim().toUpperCase();
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
