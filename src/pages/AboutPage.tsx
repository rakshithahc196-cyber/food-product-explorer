import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <section className="content-panel">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h1>Fresh picks, smarter shopping</h1>
      </div>

      <div className="about-grid">
        <div>
          <p>
            Food Product Explorer helps shoppers discover everyday essentials,
            pantry favorites, wellness picks, and standout products in one clean,
            easy-to-browse marketplace experience.
          </p>
        </div>
        <div>
          <ul className="feature-list">
            <li>Responsive product browsing</li>
            <li>Fast client-side search and filtering</li>
            <li>Product detail views with pricing insights</li>
          </ul>
        </div>
      </div>

      <Link className="primary-button" to="/products">
        Browse products
      </Link>
    </section>
  );
}

export default AboutPage;
