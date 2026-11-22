let CollegeDetailsPage = ({ college, wishlist, onToggleWishlist }) => {
  if (!college) {
    return (
      <main className="page-shell empty-state">
        <h1>College not found.</h1>
        <p>Explore the college list to find another option.</p>
        <a className="button button-primary" href="/colleges">Browse colleges</a>
      </main>
    );
  }

  let isSaved = wishlist.includes(college.id);

  return (
    <main className="page-shell detail-shell">
      <a className="back-link" href="/colleges">← Back to colleges</a>
      <section className="detail-hero">
        <div className={"detail-art college-art-" + college.color}>
          <span className="detail-monogram">{college.initials}</span>
          <span className="art-orbit art-orbit-one" />
          <span className="art-orbit art-orbit-two" />
          <span className="detail-art-caption">A place to grow into what's next</span>
        </div>
        <div className="detail-intro">
          <span className="eyebrow">{college.area.toUpperCase()}, {college.city.toUpperCase()}</span>
          <h1>{college.name}<span className="heading-period">.</span></h1>
          <p className="detail-description">{college.description}</p>
          <div className="detail-rating">
            <span className="rating-large">★ {college.rating}</span>
            <span>{college.reviewCount} reviews <small>(sample data)</small></span>
          </div>
          <button
            className={isSaved ? "button button-saved" : "button button-primary"}
            onClick={() => onToggleWishlist(college.id)}
            type="button"
          >
            {isSaved ? "♥ Saved to wishlist" : "♡ Save to wishlist"}
          </button>
        </div>
      </section>

      <div className="detail-columns">
        <div className="detail-main">
          <section className="detail-section">
            <span className="eyebrow">ABOUT THE CAMPUS</span>
            <h2>A place to learn your way.</h2>
            <p>{college.description} Students can explore interests, build practical skills, and connect with others.</p>
          </section>
          <section className="detail-section">
            <span className="eyebrow">FIND YOUR SUBJECT</span>
            <h2>Courses & programs</h2>
            <div className="detail-course-list">
              {college.courses.map((name) => <span className="detail-course-chip" key={name}>{name}</span>)}
            </div>
          </section>
          <section className="detail-section">
            <span className="eyebrow">SAMPLE REVIEW</span>
            <h2>A note from the community</h2>
            <div className="sample-review">
              <div className="review-stars">★★★★★</div>
              <p>“A welcoming place to explore new ideas, meet people, and find your own direction.”</p>
              <span>Sample student review · Demonstration content</span>
            </div>
          </section>
        </div>
        <aside className="detail-sidebar">
          <div className="fact-card">
            <span className="eyebrow">QUICK FACTS</span>
            <div className="fact-row"><span>Location</span><b>{college.area}, {college.city}, {college.state}</b></div>
            <div className="fact-row"><span>Courses</span><b>{college.courses.length} study areas</b></div>
            <div className="fact-row"><span>Estimated fees</span><b>{college.fees}</b></div>
            <p className="fact-note">Sample fee range. Please confirm current fees with the college.</p>
          </div>
          <div className="highlights-card">
            <span className="eyebrow">GOOD TO KNOW</span>
            <p>✓ Hands-on learning</p>
            <p>✓ Supportive campus community</p>
            <p>✓ Multiple study areas</p>
          </div>
        </aside>
      </div>
      <div className="detail-bottom-cta">
        <div><span className="eyebrow">KEEP EXPLORING</span><h2>Still finding your fit?</h2></div>
        <a className="button button-outline" href="/colleges">See all colleges →</a>
      </div>
      <p className="data-disclaimer">Ratings, review counts, fees, and review text are sample content for this project demo.</p>
    </main>
  );
};

export default CollegeDetailsPage;
