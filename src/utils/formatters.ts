const priceFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
});

export function formatPrice(value: number): string {
  return priceFormatter.format(value);
}

export function formatCategory(value: string): string {
  return value
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');
}

export function formatRating(value: number): string {
  return value.toFixed(1);
}

export function calculateDiscountedPrice(price: number, discountPercentage: number): number {
  return Number((price * (1 - discountPercentage / 100)).toFixed(2));
}

export interface StockState {
  label: string;
  className: string;
}

export function getStockInfo(stock: number): StockState {
  if (stock === 0) {
    return { label: 'Out of stock', className: 'stock-out' };
  }

  if (stock < 10) {
    return { label: `Low stock (${stock} left)`, className: 'stock-low' };
  }

  return { label: `In stock (${stock})`, className: 'stock-in' };
}
