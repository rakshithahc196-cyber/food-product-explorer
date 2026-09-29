import { useMemo, useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import EmptyState from '../components/EmptyState';
import ErrorState from '../components/ErrorState';
import LoadingState from '../components/LoadingState';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import SortSelect, { type SortOption } from '../components/SortSelect';
import { useProducts } from '../hooks/useProducts';
import type { Product } from '../types/product';

const allowedProductCategories = new Set(['groceries', 'food']);

function ProductsPage() {
  const { products, loading, error, refetch } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState<SortOption>('default');

  const groceryProducts = useMemo(
    () =>
      products.filter((product) => {
        const normalizedCategory = product.category.toLowerCase();
        return allowedProductCategories.has(normalizedCategory);
      }),
    [products],
  );

  const categories = useMemo(
    () =>
      Array.from(new Set(groceryProducts.map((product) => product.category))).sort((left, right) =>
        left.localeCompare(right),
      ),
    [groceryProducts],
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered: Product[] = groceryProducts.filter((product) => {
      const matchesSearch =
        normalizedQuery.length === 0 || product.title.toLowerCase().includes(normalizedQuery);
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    switch (sortOption) {
      case 'price-asc':
        return [...filtered].sort((left, right) => left.price - right.price);
      case 'price-desc':
        return [...filtered].sort((left, right) => right.price - left.price);
      case 'rating-desc':
        return [...filtered].sort((left, right) => right.rating - left.rating);
      case 'name-asc':
        return [...filtered].sort((left, right) => left.title.localeCompare(right.title));
      default:
        return filtered;
    }
  }, [groceryProducts, searchQuery, selectedCategory, sortOption]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortOption('default');
  };

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState message={error} onRetry={() => void refetch()} />;
  }

  return (
    <section className="products-page">
      <div className="page-topbar">
        <div>
          <p className="eyebrow">Fresh picks</p>
          <h1>Explore Food &amp; Groceries</h1>
        </div>
        <span className="result-count">{filteredProducts.length} items</span>
      </div>

      <p className="page-subtitle">
        Daily essentials, pantry staples, and fresh groceries delivered for home living.
      </p>

      <div className="toolbar">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <CategoryFilter
          value={selectedCategory}
          categories={categories}
          onChange={(category) => setSelectedCategory(category)}
        />
        <SortSelect value={sortOption} onChange={setSortOption} />
      </div>

      {searchQuery || selectedCategory !== 'all' ? (
        <div className="toolbar-actions">
          <button type="button" className="secondary-button" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      ) : null}

      {filteredProducts.length === 0 ? (
        <EmptyState onClearFilters={searchQuery || selectedCategory !== 'all' ? clearFilters : undefined} />
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductsPage;
