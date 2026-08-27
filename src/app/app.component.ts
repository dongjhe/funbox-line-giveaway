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

  selectedRegion = '全部';
  selectedProducts = new Set<string>();
  selectedProductOrder: string[] = [];

  constructor() {
    this.loadClickedGiveaways();
  }

  @HostListener('document:click', ['$event'])
  closeProductFilterOnOutsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (!target?.closest('.product-filter')) {
      const productFilter = document.querySelector('.product-filter') as HTMLDetailsElement | null;
      if (productFilter) productFilter.open = false;
    }
  }

  get totalGiveawayCount(): number {
    return Object.values(this.giveaways)
      .flatMap((storeGiveaways) => storeGiveaways)
      .reduce((total, storeGiveaway) => total + storeGiveaway.items.length, 0);
  }

  regionStoreCount(region: string): number {
    if (region === '全部') {
      return Object.values(this.giveaways).reduce((total, stores) => total + stores.length, 0);
    }
    return this.giveaways[region]?.length ?? 0;
  }

  get visibleRegions(): string[] {
    return this.selectedRegion === '全部'
      ? this.regions.slice(1).map((region) => region.name).filter((region) => this.giveaways[region])
      : [this.selectedRegion];
  }

  get productOptions(): string[] {
    const products = new Map<string, string>();
    Object.values(this.giveaways)
      .flatMap((storeGiveaways) => storeGiveaways)
      .flatMap((storeGiveaway) => storeGiveaway.items)
      .forEach((item) => {
        const code = this.productCode(item.name);
        if (!products.has(code)) products.set(code, item.name);
      });

    return [...products.entries()]
      .sort(([codeA], [codeB]) => codeA.localeCompare(codeB, 'en', { numeric: true, sensitivity: 'base' }))
      .map(([code, name]) => {
        const normalizedName = name.trim();
        return normalizedName.toUpperCase().startsWith(code.toUpperCase()) ? normalizedName : `${code} ${normalizedName}`;
      });
  }

  get orderedProductOptions(): string[] {
    const order = new Map(this.selectedProductOrder.map((code, index) => [code, index]));
    return [...this.productOptions].sort((a, b) => {
      const codeA = this.productCode(a);
      const codeB = this.productCode(b);
      const indexA = order.get(codeA);
      const indexB = order.get(codeB);
      if (indexA !== undefined && indexB !== undefined) return indexA - indexB;
      if (indexA !== undefined) return -1;
      if (indexB !== undefined) return 1;
      return 0;
    });
  }

  get visibleGiveawayCount(): number {
    return this.visibleRegions
      .flatMap((region) => this.giveaways[region] ?? [])
      .reduce((total, giveaway) => total + this.filteredItems(giveaway).length, 0);
  }

  get selectedGiveaways(): SelectedGiveaway[] {
    const results = this.visibleRegions.flatMap((region) =>
      (this.giveaways[region] ?? []).flatMap((giveaway) =>
        this.filteredItems(giveaway).map((item) => ({ region, store: giveaway.store, item })),
      ),
    );
    const order = new Map(this.selectedProductOrder.map((code, index) => [code, index]));
    return results.sort((a, b) => (order.get(this.productCode(a.item.name)) ?? 9999) - (order.get(this.productCode(b.item.name)) ?? 9999));
  }

  selectRegion(region: string, productFilter?: HTMLDetailsElement): void {
    this.selectedRegion = region;
    this.clearSelectedProducts();
    if (productFilter) productFilter.open = false;
  }

  toggleProduct(product: string, checked: boolean): void {
    const code = this.productCode(product);
    const products = new Set(this.selectedProducts);
    if (checked) {
      products.add(code);
      if (!this.selectedProductOrder.includes(code)) this.selectedProductOrder = [...this.selectedProductOrder, code];
    } else {
      products.delete(code);
      this.selectedProductOrder = this.selectedProductOrder.filter((selectedCode) => selectedCode !== code);
    }
    this.selectedProducts = products;
  }

  productSelectionNumber(product: string): number | null {
    const index = this.selectedProductOrder.indexOf(this.productCode(product));
    return index >= 0 ? index + 1 : null;
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

  filteredItems(giveaway: { items: { name: string; url: string }[] }): { name: string; url: string }[] {
    if (this.selectedProducts.size === 0) return giveaway.items;
    const order = new Map(this.selectedProductOrder.map((code, index) => [code, index]));
    return giveaway.items
      .filter((item) => this.selectedProducts.has(this.productCode(item.name)))
      .sort((a, b) => (order.get(this.productCode(a.name)) ?? 9999) - (order.get(this.productCode(b.name)) ?? 9999));
  }

  hasVisibleGiveaways(region: string): boolean {
    const stores = this.giveaways[region] ?? [];
    if (this.selectedProducts.size === 0) return stores.length > 0;
    return stores.some((giveaway) => this.filteredItems(giveaway).length > 0);
  }

  isGiveawayClicked(url: string): boolean { return this.clickedGiveaways.has(url); }

  markGiveawayClicked(url: string): void {
    this.clickedGiveaways.add(url);
    localStorage.setItem(this.clickedStorageKey, JSON.stringify([...this.clickedGiveaways]));
  }

  private productCode(name: string): string {
    const match = name.toUpperCase().match(/\b(?:BXG|BX|CX|UX)-?\d+\b/);
    return match ? match[0].replace(/^(BXG|BX|CX|UX)(\d)/, '$1-$2') : name.trim();
  }

  private loadClickedGiveaways(): void {
    const savedGiveaways = localStorage.getItem(this.clickedStorageKey);
    if (!savedGiveaways) return;
    try {
      const urls: unknown = JSON.parse(savedGiveaways);
      if (Array.isArray(urls)) this.clickedGiveaways = new Set(urls.filter((url): url is string => typeof url === 'string'));
    } catch {
      localStorage.removeItem(this.clickedStorageKey);
    }
  }
}
