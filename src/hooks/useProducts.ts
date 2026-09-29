import { useCallback, useEffect, useState } from 'react';
import { ApiError, getProducts } from '../services/productService';
import type { Product } from '../types/product';

interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async (signal?: AbortSignal) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProducts(signal);
      if (!signal?.aborted) {
        setProducts(data);
      }
    } catch (fetchError) {
      if (signal?.aborted) {
        return;
      }

      if (fetchError instanceof ApiError) {
        setError('Unable to load products.');
        return;
      }

      setError('Unable to load products.');
    } finally {
      if (!signal?.aborted) {
        setLoading(false);
      }
    }
  }, []);

  const refetch = useCallback(async () => {
    const controller = new AbortController();
    await loadProducts(controller.signal);
  }, [loadProducts]);

  useEffect(() => {
    const controller = new AbortController();
    void loadProducts(controller.signal);

    return () => {
      controller.abort();
    };
  }, [loadProducts]);

  return {
    products,
    loading,
    error,
    refetch,
  };
}
