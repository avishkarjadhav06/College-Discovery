let Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="brand brand-footer" href="/">
            <span className="brand-mark"><span /></span>
            <span>campus<span className="brand-light">compass</span></span>
          </a>
          <p>A little more clarity for your next big step.</p>
        </div>
        <div className="footer-links">
          <div>
            <h2>Discover</h2>
            <a href="/colleges">All colleges</a>
            <a href="/#courses">Study areas</a>
          </div>
          <div>
            <h2>Your journey</h2>
            <a href="/wishlist">Your wishlist</a>
            <a href="/">About Campus Compass</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Campus Compass</span>
        <span>Made for curious minds.</span>
      </div>
    </footer>
  );
};

export default Footer;
