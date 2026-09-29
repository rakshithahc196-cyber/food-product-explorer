import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <div className="brand-wrap">
        <Link className="brand" to="/products" aria-label="Food Product Explorer home">
          <span className="brand-mark" aria-hidden="true">
            🍽️
          </span>
          <span>Food Product Explorer</span>
        </Link>
      </div>

      <nav className="main-nav" aria-label="Main navigation">
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Products
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
