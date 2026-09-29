import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="empty-state empty-state-large">
      <div className="empty-icon" aria-hidden="true">
        404
      </div>
      <h2>Page not found</h2>
      <p>The page you requested does not exist.</p>
      <Link className="primary-button" to="/products">
        Back to Products
      </Link>
    </section>
  );
}

export default NotFoundPage;
