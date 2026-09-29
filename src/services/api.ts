import type { Product, ProductsResponse } from "../types/product";

const BASE_URL = "https://dummyjson.com";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function request<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${BASE_URL}${path}`, { signal });

  if (!response.ok) {
    throw new ApiError(`Request failed with status ${response.status}`, response.status);
  }

  const data: T = await response.json();
  return data;
}

export async function getProducts(signal?: AbortSignal): Promise<Product[]> {
  const data = await request<ProductsResponse>("/products?limit=0", signal);
  return data.products;
}

export function getProductById(id: number, signal?: AbortSignal): Promise<Product> {
  return request<Product>(`/products/${id}`, signal);
}