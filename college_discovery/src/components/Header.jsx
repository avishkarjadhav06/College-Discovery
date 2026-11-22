import { useState } from "react";

let Header = ({ savedCount }) => {
  let [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/">
          <span className="brand-mark"><span /></span>
          <span>campus<span className="brand-light">compass</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="/colleges" onClick={() => setMenuOpen(false)}>Explore colleges</a>
          <a href="/#courses" onClick={() => setMenuOpen(false)}>Courses</a>
          <a href="/wishlist" onClick={() => setMenuOpen(false)}>
            Wishlist <span className="wishlist-count">{savedCount}</span>
          </a>
          <a className="button button-small button-dark nav-cta" href="/colleges" onClick={() => setMenuOpen(false)}>
            Find your college <span>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
