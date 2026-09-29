function LoadingState() {
  return (
    <div className="loading-area" aria-live="polite" aria-busy="true">
      <div className="section-heading loading-heading">
        <p className="eyebrow">Loading</p>
        <h2>Loading products...</h2>
      </div>

      <div className="product-grid">
        {Array.from({ length: 6 }, (_, index) => (
          <div className="product-card skeleton-card" key={index} aria-hidden="true">
            <div className="skeleton-image" />
            <div className="card-body">
              <div className="skeleton-line short" />
              <div className="skeleton-line medium" />
              <div className="skeleton-line small" />
              <div className="skeleton-button" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingState;
