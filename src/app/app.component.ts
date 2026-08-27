import { Component } from '@angular/core';
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

  constructor() {
    this.loadClickedGiveaways();
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
      ? this.regions
          .slice(1)
          .map((region) => region.name)
          .filter((region) => this.giveaways[region])
      : [this.selectedRegion];
  }

  get productOptions(): string[] {
    return [
      ...new Set(
        Object.values(this.giveaways)
          .flatMap((storeGiveaways) => storeGiveaways)
          .flatMap((storeGiveaway) => storeGiveaway.items.map((item) => item.name)),
      ),
    ].sort((a, b) => a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' }));
  }

  get visibleGiveawayCount(): number {
    return this.visibleRegions
      .flatMap((region) => this.giveaways[region] ?? [])
      .reduce((total, giveaway) => total + this.filteredItems(giveaway).length, 0);
  }

  get selectedGiveaways(): SelectedGiveaway[] {
    return this.visibleRegions.flatMap((region) =>
      (this.giveaways[region] ?? []).flatMap((giveaway) =>
        this.filteredItems(giveaway).map((item) => ({ region, store: giveaway.store, item })),
      ),
    );
  }

  selectRegion(region: string, productFilter?: HTMLDetailsElement): void {
    this.selectedRegion = region;
    this.clearSelectedProducts();
    if (productFilter) {
      productFilter.open = false;
    }
  }

  toggleProduct(product: string, checked: boolean): void {
    const products = new Set(this.selectedProducts);
    if (checked) {
      products.add(product);
    } else {
      products.delete(product);
    }
    this.selectedProducts = products;
  }

  clearSelectedProducts(): void {
    this.selectedProducts = new Set<string>();
  }

  clearClickedGiveaways(): void {
    localStorage.removeItem(this.clickedStorageKey);
    this.clickedGiveaways = new Set<string>();
  }

  filteredItems(giveaway: {
    items: { name: string; url: string }[];
  }): { name: string; url: string }[] {
    return this.selectedProducts.size === 0
      ? giveaway.items
      : giveaway.items.filter((item) => this.selectedProducts.has(item.name));
  }

  hasVisibleGiveaways(region: string): boolean {
    const stores = this.giveaways[region] ?? [];
    if (this.selectedProducts.size === 0) {
      return stores.length > 0;
    }
    return stores.some((giveaway) => this.filteredItems(giveaway).length > 0);
  }

  isGiveawayClicked(url: string): boolean {
    return this.clickedGiveaways.has(url);
  }

  markGiveawayClicked(url: string): void {
    this.clickedGiveaways.add(url);
    localStorage.setItem(this.clickedStorageKey, JSON.stringify([...this.clickedGiveaways]));
  }

  private loadClickedGiveaways(): void {
    const savedGiveaways = localStorage.getItem(this.clickedStorageKey);

    if (!savedGiveaways) {
      return;
    }

    try {
      const urls: unknown = JSON.parse(savedGiveaways);
      if (Array.isArray(urls)) {
        this.clickedGiveaways = new Set(
          urls.filter((url): url is string => typeof url === 'string'),
        );
      }
    } catch {
      localStorage.removeItem(this.clickedStorageKey);
    }
  }
}
