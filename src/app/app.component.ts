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
    return region === '全部'
      ? Object.values(this.giveaways).reduce((t, s) => t + s.length, 0)
      : (this.giveaways[region]?.length ?? 0);
  }

  get regionOptions(): string[] {
    return this.regions.map((r) => r.name).filter((r) => r !== '全部' && !!this.giveaways[r]);
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
  }
  clearSelectedRegions(): void {
    this.selectedRegions = new Set<string>();
  }
  resetAllFilters(productFilter?: HTMLDetailsElement, regionFilter?: HTMLDetailsElement): void {
    this.clearSelectedRegions();
    this.clearSelectedProducts();
    if (productFilter) productFilter.open = false;
    if (regionFilter) regionFilter.open = false;
  }

  get productOptions(): string[] {
    const products = new Map<string, string>();
    Object.values(this.giveaways)
      .flat()
      .flatMap((g) => g.items)
      .forEach((item) => {
        const code = this.productCode(item.name);
        if (!products.has(code)) products.set(code, item.name);
      });
    return [...products.entries()]
      .sort(([a], [b]) => a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' }))
      .map(([code, name]) =>
        name.trim().toUpperCase().startsWith(code.toUpperCase())
          ? name.trim()
          : `${code} ${name.trim()}`,
      );
  }
  get orderedProductOptions(): string[] {
    const order = new Map(this.selectedProductOrder.map((c, i) => [c, i]));
    return [...this.productOptions].sort((a, b) => {
      const ia = order.get(this.productCode(a)),
        ib = order.get(this.productCode(b));
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
        (order.get(this.productCode(a.item.name)) ?? 9999) -
        (order.get(this.productCode(b.item.name)) ?? 9999),
    );
  }
  toggleProduct(product: string, checked: boolean): void {
    const code = this.productCode(product),
      next = new Set(this.selectedProducts);
    if (checked) {
      next.add(code);
      if (!this.selectedProductOrder.includes(code))
        this.selectedProductOrder = [...this.selectedProductOrder, code];
    } else {
      next.delete(code);
      this.selectedProductOrder = this.selectedProductOrder.filter((c) => c !== code);
    }
    this.selectedProducts = next;
  }
  productSelectionNumber(product: string): number | null {
    const i = this.selectedProductOrder.indexOf(this.productCode(product));
    return i >= 0 ? i + 1 : null;
  }
  isProductSelected(product: string): boolean {
    return this.selectedProducts.has(this.productCode(product));
  }
  clearSelectedProducts(): void {
    this.selectedProducts = new Set<string>();
    this.selectedProductOrder = [];
  }
  clearClickedGiveaways(): void {
    localStorage.removeItem(this.clickedStorageKey);
    this.clickedGiveaways = new Set<string>();
  }
  filteredItems(giveaway: { items: GiveawayItem[] }): GiveawayItem[] {
    if (!this.selectedProducts.size) return giveaway.items;
    const order = new Map(this.selectedProductOrder.map((c, i) => [c, i]));
    return giveaway.items
      .filter((item) => this.selectedProducts.has(this.productCode(item.name)))
      .sort(
        (a, b) =>
          (order.get(this.productCode(a.name)) ?? 9999) -
          (order.get(this.productCode(b.name)) ?? 9999),
      );
  }
  hasVisibleGiveaways(region: string): boolean {
    const stores = this.giveaways[region] ?? [];
    return !this.selectedProducts.size
      ? stores.length > 0
      : stores.some((g) => this.filteredItems(g).length > 0);
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
