const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatPrice(value: number): string {
  return priceFormatter.format(value);
}

// "smart-phones" -> "Smart Phones"
export function formatCategory(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function formatRating(value: number): string {
  return value.toFixed(1);
}

export function getDiscountedPrice(
  price: number,
  discountPercentage: number
): number {
  return price * (1 - discountPercentage / 100);
}

export interface StockInfo {
  label: string;
  className: string;
}

export function getStockInfo(stock: number): StockInfo {
  if (stock === 0) {
    return {
      label: "Out of stock",
      className: "stock-out",
    };
  }

  if (stock < 10) {
    return {
      label: `Low stock (${stock} left)`,
      className: "stock-low",
    };
  }

  return {
    label: `In stock (${stock})`,
    className: "stock-in",
  };
}