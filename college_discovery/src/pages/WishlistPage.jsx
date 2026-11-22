import CollegeCard from "../components/CollegeCard";

let WishlistPage = ({ colleges, wishlist, onToggleWishlist }) => {
  let savedColleges = colleges.filter((college) => wishlist.includes(college.id));

  return (
    <main className="page-shell">
      <section className="listing-intro wishlist-intro">
        <span className="eyebrow">YOUR LITTLE COLLECTION</span>
        <h1>Saved for later<span className="heading-period">.</span></h1>
        <p>Keep the colleges that caught your eye all in one place.</p>
        <div className="listing-stats"><span>{savedColleges.length} saved colleges</span></div>
      </section>
      {savedColleges.length > 0 ? (
        <section className="listing-content">
          <div className="college-grid listing-grid">
            {savedColleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
                isSaved={true}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        </section>
      ) : (
        <section className="empty-state wishlist-empty">
          <span className="empty-illustration heart-illustration">♡</span>
          <span className="eyebrow">A FRESH PAGE</span>
          <h2>Your wishlist is waiting for its first college.</h2>
          <p>Tap the heart on any college to save it here for later.</p>
          <a className="button button-primary" href="/colleges">Find colleges →</a>
        </section>
      )}
    </main>
  );
};

export default WishlistPage;
