let CollegeCard = ({ college, isSaved, onToggleWishlist }) => {
  return (
    <article className="college-card">
      <div className={"college-art college-art-" + college.color}>
        <span className="college-monogram">{college.initials}</span>
        <span className="art-orbit art-orbit-one" />
        <span className="art-orbit art-orbit-two" />
        <button
          className={isSaved ? "save-button is-saved" : "save-button"}
          type="button"
          onClick={() => onToggleWishlist(college.id)}
          aria-label={isSaved ? "Remove from wishlist" : "Save to wishlist"}
          aria-pressed={isSaved}
        >
          {isSaved ? "♥" : "♡"}
        </button>
        <span className="art-location">{college.area}, {college.city}</span>
      </div>
      <div className="college-card-content">
        <div className="college-card-heading">
          <div>
            <p className="card-kicker">{college.courses[0]} · {college.courses.length} study areas</p>
            <h3><a href={"/colleges/" + college.slug}>{college.name}</a></h3>
          </div>
          <span className="rating"><span>★</span> {college.rating}</span>
        </div>
        <p className="college-summary">{college.description}</p>
        <div className="college-card-bottom">
          <span className="fee-hint">From {college.fees.split("–")[0]}</span>
          <a className="text-link" href={"/colleges/" + college.slug}>View college <span>→</span></a>
        </div>
      </div>
    </article>
  );
};

export default CollegeCard;
