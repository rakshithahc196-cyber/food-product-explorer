import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiError, getProductById } from '../services/productService';
import type { Product } from '../types/product';
import {
  calculateDiscountedPrice,
  formatCategory,
  formatPrice,
  formatRating,
  getStockInfo,
} from '../utils/formatters';
import { parseProductId } from '../utils/parseProductId';

function ProductDetailsPage() {
  const { id } = useParams();
  const productId = parseProductId(id);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (productId === null) {
      setProduct(null);
      setLoading(false);
      setError('Product not found');
      return;
    }

    const controller = new AbortController();

    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getProductById(productId, controller.signal);
        if (!controller.signal.aborted) {
          setProduct(response);
        }
      } catch (fetchError) {
        if (controller.signal.aborted) {
          return;
        }

        if (fetchError instanceof ApiError && fetchError.status === 404) {
          setError('Product not found');
          setProduct(null);
          return;
        }

        setError('Unable to load product.');
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void loadProduct();

    return () => {
      controller.abort();
    };
  }, [productId]);

  if (loading) {
    return (
      <section className="details-shell">
        <div className="detail-skeleton" aria-live="polite" aria-busy="true" />
      </section>
    );
  }

  if (error === 'Product not found' || productId === null || !product) {
    return (
      <section className="empty-state empty-state-large">
        <div className="empty-icon" aria-hidden="true">
          !
        </div>
        <h2>Product not found</h2>
        <Link className="primary-button" to="/products">
          Back to Products
        </Link>
      </section>
    );
  }

  const stockInfo = getStockInfo(product.stock);
  const salePrice = calculateDiscountedPrice(product.price, product.discountPercentage);

  return (
    <section className="details-shell">
      <div className="detail-actions">
        <Link className="secondary-button" to="/products">
          ← Back to Products
        </Link>
      </div>

      <article className="product-detail-card">
        <div className="detail-image-wrap">
          <img src={product.images[0] ?? product.thumbnail} alt={product.title} className="detail-image" />
        </div>

        <div className="detail-body">
          <div className="detail-badges">
            <span className="chip chip-category">{formatCategory(product.category)}</span>
            <span className="chip chip-rating">{formatRating(product.rating)} ★</span>
            <span className="chip chip-discount">-{product.discountPercentage.toFixed(0)}% off</span>
            <span className={`stock-pill ${stockInfo.className}`}>{stockInfo.label}</span>
          </div>

          <h1>{product.title}</h1>
          <p className="detail-description">{product.description}</p>

          <div className="detail-price-group">
            <span className="product-price">{formatPrice(product.price)}</span>
            <span className="discounted-price">{formatPrice(salePrice)}</span>
          </div>

          <div className="detail-meta-grid">
            <div>
              <span className="meta-label">Brand</span>
              <strong>{product.brand ?? 'Unbranded'}</strong>
            </div>
            <div>
              <span className="meta-label">Stock</span>
              <strong>{product.stock}</strong>
            </div>
            <div>
              <span className="meta-label">Category</span>
              <strong>{formatCategory(product.category)}</strong>
            </div>
            <div>
              <span className="meta-label">Discount</span>
              <strong>{product.discountPercentage.toFixed(0)}%</strong>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ProductDetailsPage;
