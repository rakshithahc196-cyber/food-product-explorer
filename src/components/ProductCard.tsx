import { Link } from 'react-router-dom';
import type { Product } from '../types/product';
import {
  calculateDiscountedPrice,
  formatCategory,
  formatPrice,
  formatRating,
  getStockInfo,
} from '../utils/formatters';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercentage);
  const stockInfo = getStockInfo(product.stock);

  return (
    <article className="product-card">
      <div className="card-image-wrap">
        <img src={product.thumbnail} alt={product.title} className="card-image" />
      </div>

      <div className="card-body">
        <div className="badge-row">
          <span className="chip chip-category">{formatCategory(product.category)}</span>
          <span className="chip chip-rating">{formatRating(product.rating)} ★</span>
        </div>

        <h3>{product.title}</h3>

        <div className="price-row">
          <span className="price">{formatPrice(product.price)}</span>
          {product.discountPercentage > 0 ? (
            <span className="chip chip-discount">-{product.discountPercentage.toFixed(0)}%</span>
          ) : null}
        </div>

        <p className="price-meta">From {formatPrice(discountedPrice)}</p>

        <div className="meta-row">
          <span className={`stock-pill ${stockInfo.className}`}>{stockInfo.label}</span>
          {product.brand ? <span className="brand-pill">{product.brand}</span> : null}
        </div>

        <Link className="primary-button card-button" to={`/products/${product.id}`}>
          View Details
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
