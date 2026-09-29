interface EmptyStateProps {
  onClearFilters?: () => void;
}

function EmptyState({ onClearFilters }: EmptyStateProps) {
  return (
    <section className="empty-state">
      <div className="empty-icon" aria-hidden="true">
        ✦
      </div>
      <h2>No products found.</h2>
      <p>Try changing your search or filters.</p>
      {onClearFilters ? (
        <button type="button" className="secondary-button" onClick={onClearFilters}>
          Clear Filters
        </button>
      ) : null}
    </section>
  );
}

export default EmptyState;
