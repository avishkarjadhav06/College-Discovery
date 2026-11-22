import { useState } from "react";
import CollegeCard from "../components/CollegeCard";

let HomePage = ({ colleges, wishlist, onToggleWishlist }) => {
  let [search, setSearch] = useState("");
  let featuredColleges = colleges.slice(0, 3);
  let courses = ["Computer Science", "Business", "Design", "Psychology", "Economics", "Media"];

  let searchColleges = (event) => {
    event.preventDefault();
    window.location.href = "/colleges?q=" + encodeURIComponent(search);
  };

  return (
    <main>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</span>
            <h1>Find a college<br />that feels <em>right.</em></h1>
            <p className="hero-description">
              Explore courses, compare colleges, and make your next step a little less overwhelming.
            </p>
            <form className="hero-search" onSubmit={searchColleges}>
              <span className="search-icon">⌕</span>
              <label className="visually-hidden" htmlFor="homepage-search">Search colleges</label>
              <input
                id="homepage-search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="College name, city, or course..."
              />
              <button className="button button-primary" type="submit">Explore <span>→</span></button>
            </form>
            <div className="hero-trust"><span>Start with curiosity. Find your way.</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-sun" />
            <div className="visual-note note-top"><span className="note-icon note-icon-green">✳</span><span><b>Explore freely</b><small>Your path, your pace</small></span></div>
            <div className="visual-campus">
              <div className="campus-sky">
                <span className="cloud cloud-one" />
                <span className="cloud cloud-two" />
                <span className="campus-window window-one" />
                <span className="campus-window window-two" />
                <span className="campus-window window-three" />
                <span className="campus-window window-four" />
                <span className="campus-door" />
              </div>
              <div className="campus-ground" />
            </div>
            <div className="visual-note note-bottom"><span className="note-icon note-icon-peach">♥</span><span><b>Save your favorites</b><small>Come back anytime</small></span></div>
            <span className="visual-sparkle sparkle-one">✳</span>
            <span className="visual-sparkle sparkle-two">✦</span>
          </div>
        </div>
        <div className="hero-bottom-line"><span>MADE FOR WHAT COMES NEXT</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="section section-featured">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A GOOD PLACE TO BEGIN</span>
            <h2>Colleges worth a closer look<span className="heading-period">.</span></h2>
            <p>Thoughtful places to learn, grow, and figure out what's next.</p>
          </div>
          <a className="text-link text-link-large" href="/colleges">Explore all colleges <span>↗</span></a>
        </div>
        <div className="college-grid">
          {featuredColleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
              isSaved={wishlist.includes(college.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      </section>

      <section className="course-section" id="courses">
        <div className="section course-section-inner">
          <div className="section-heading">
            <div>
              <span className="eyebrow">FOLLOW YOUR CURIOSITY</span>
              <h2>What would you love to study?</h2>
              <p>Start with a subject. Your options are wider than you think.</p>
            </div>
            <a className="text-link text-link-large" href="/colleges">See every course <span>↗</span></a>
          </div>
          <div className="course-grid">
            {courses.map((course) => (
              <a className="course-tile" href={"/colleges?course=" + encodeURIComponent(course)} key={course}>
                <span className="course-icon course-icon-sage">✳</span>
                <span>{course}</span>
                <span className="course-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="sample-note">College fees and ratings are sample data for this project demo.</div>
    </main>
  );
};

export default HomePage;
