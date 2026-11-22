import { useState } from "react";
import CollegeCard from "../components/CollegeCard";

let CollegeListingPage = ({ colleges, wishlist, onToggleWishlist }) => {
  let params = new URLSearchParams(window.location.search);
  let [search, setSearch] = useState(params.get("q") || "");
  let [city, setCity] = useState("");
  let [course, setCourse] = useState(params.get("course") || "");
  let [sortBy, setSortBy] = useState("recommended");
  let [showCount, setShowCount] = useState(6);

  let cities = [];
  let courses = [];

  colleges.forEach((college) => {
    if (!cities.includes(college.city)) {
      cities.push(college.city);
    }
    college.courses.forEach((name) => {
      if (!courses.includes(name)) {
        courses.push(name);
      }
    });
  });

  let results = colleges.filter((college) => {
    let words = search.toLowerCase();
    let matchesSearch = college.name.toLowerCase().includes(words)
      || college.city.toLowerCase().includes(words)
      || college.area.toLowerCase().includes(words)
      || college.courses.join(" ").toLowerCase().includes(words);
    let matchesCity = city === "" || college.city === city;
    let matchesCourse = course === "" || college.courses.includes(course);
    return matchesSearch && matchesCity && matchesCourse;
  });

  if (sortBy === "name") {
    results.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "rating") {
    results.sort((a, b) => b.rating - a.rating);
  }

  let resetFilters = () => {
    setSearch("");
    setCity("");
    setCourse("");
    setSortBy("recommended");
    setShowCount(6);
    window.history.replaceState({}, "", "/colleges");
  };

  return (
    <main className="page-shell">
      <section className="listing-intro">
        <span className="eyebrow">YOUR SHORTLIST STARTS HERE</span>
        <h1>Explore colleges<span className="heading-period">.</span></h1>
        <p>Find a place to learn that feels like a good fit for you.</p>
        <div className="listing-stats"><span>{colleges.length} colleges</span><i /> <span>{cities.length} cities</span><i /> <span>{courses.length} study areas</span></div>
      </section>
      <section className="listing-content">
        <div className="filters-panel">
          <div className="filter-search">
            <label htmlFor="college-search">Search colleges</label>
            <div className="input-with-icon">
              <span>⌕</span>
              <input id="college-search" value={search} onChange={(event) => { setSearch(event.target.value); setShowCount(6); }} placeholder="College name, Pune area, or course" />
            </div>
          </div>
          <div className="filter-controls">
            <div className="filter-field">
              <label htmlFor="city-filter">City</label>
              <select id="city-filter" value={city} onChange={(event) => { setCity(event.target.value); setShowCount(6); }}>
                <option value="">All cities</option>
                {cities.map((name) => <option key={name}>{name}</option>)}
              </select>
            </div>
            <div className="filter-field">
              <label htmlFor="course-filter">Course or category</label>
              <select id="course-filter" value={course} onChange={(event) => { setCourse(event.target.value); setShowCount(6); }}>
                <option value="">All courses</option>
                {courses.map((name) => <option key={name}>{name}</option>)}
              </select>
            </div>
            <div className="filter-field">
              <label htmlFor="sort-filter">Sort by</label>
              <select id="sort-filter" value={sortBy} onChange={(event) => { setSortBy(event.target.value); setShowCount(6); }}>
                <option value="recommended">Recommended</option>
                <option value="name">Name: A to Z</option>
                <option value="rating">Highest rating</option>
              </select>
            </div>
            <button type="button" className="reset-button" onClick={resetFilters}>Reset filters ↺</button>
          </div>
        </div>

        <div className="results-heading">
          <div><h2>{results.length} colleges to explore</h2><p>Take your time. The right fit is out there.</p></div>
          <span className="results-count">SHOWING {Math.min(showCount, results.length)} OF {results.length}</span>
        </div>

        {results.length > 0 ? (
          <>
            <div className="college-grid listing-grid">
              {results.slice(0, showCount).map((college) => (
                <CollegeCard
                  key={college.id}
                  college={college}
                  isSaved={wishlist.includes(college.id)}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>
            {showCount < results.length && (
              <div className="load-more-wrap">
                <button className="button button-outline" onClick={() => setShowCount(showCount + 6)}>Load more colleges ↓</button>
              </div>
            )}
          </>
        ) : (
          <div className="empty-state">
            <span className="empty-illustration">⌕</span>
            <h2>No colleges found.</h2>
            <p>Try a different search or clear a filter to see more options.</p>
            <button className="button button-primary" onClick={resetFilters}>Clear all filters</button>
          </div>
        )}
        <p className="data-disclaimer">Ratings and fee ranges are sample data. Please confirm details with each college.</p>
      </section>
    </main>
  );
};

export default CollegeListingPage;
