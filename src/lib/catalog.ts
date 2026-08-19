import config from "../site.config";
import type { Category, Product } from "../types";

export function money(value: number, currency: string = config.settings.currency): string {
  return currency + " " + value.toFixed(2).replace(".", ",");
}

export function getCategory(id: string): Category {
  return config.categories.find((c) => c.id === id) ?? config.categories[0];
}

export function fillStyle(cat?: Category): { background: string } {
  const c = cat ?? config.categories[0];
  return {
    background:
      `radial-gradient(120% 90% at 25% 15%, ${c.c1}, transparent 60%),` +
      `linear-gradient(150deg, ${c.c1}, ${c.c2})`
  };
}

export function productCategory(product: Product): Category {
  return getCategory(product.cats[0]);
}

export function findProduct(ref: string): Product | undefined {
  return config.products.find((p) => p.ref === ref);
}
