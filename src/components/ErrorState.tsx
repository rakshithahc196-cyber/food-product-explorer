interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <section className="empty-state">
      <div className="empty-icon" aria-hidden="true">
        !
      </div>
      <h2>{message}</h2>
      <button type="button" className="primary-button" onClick={onRetry}>
        Retry
      </button>
    </section>
  );
}

export default ErrorState;
