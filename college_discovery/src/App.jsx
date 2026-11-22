import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CollegeListingPage from "./pages/CollegeListingPage";
import CollegeDetailsPage from "./pages/CollegeDetailsPage";
import WishlistPage from "./pages/WishlistPage";
import { getColleges } from "./services/collegeService";

let App = () => {
  let [colleges, setColleges] = useState([]);
  let [wishlist, setWishlist] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState("");

  let pagePath = window.location.pathname;
  let currentPage = "home";
  let collegeSlug = "";

  if (pagePath === "/colleges") {
    currentPage = "colleges";
  } else if (pagePath === "/wishlist") {
    currentPage = "wishlist";
  } else if (pagePath.indexOf("/colleges/") === 0) {
    currentPage = "details";
    collegeSlug = pagePath.replace("/colleges/", "");
  } else if (pagePath !== "/") {
    currentPage = "not-found";
  }

  useEffect(() => {
    getColleges()
      .then((data) => {
        setColleges(data);
        setLoading(false);
      })
      .catch((loadError) => {
        console.error("Could not load colleges:", loadError);
        setError("Colleges could not be loaded. Please refresh the page.");
        setLoading(false);
      });

    try {
      let savedColleges = JSON.parse(localStorage.getItem("collegeWishlist") || "[]");
      if (Array.isArray(savedColleges)) {
        setWishlist(savedColleges);
      }
    } catch (storageError) {
      console.error("Could not read the wishlist:", storageError);
      setError("Your saved wishlist could not be read from this browser.");
    }
  }, []);

  useEffect(() => {
    let college = colleges.find((item) => item.slug === collegeSlug);
    let description = "Discover colleges, compare courses, and plan your next step with Campus Compass.";

    if (college) {
      document.title = college.name + " | Campus Compass";
      description = "Explore courses, sample fees, and details for " + college.name + ".";
    } else if (currentPage === "colleges") {
      document.title = "Explore Colleges | Campus Compass";
      description = "Search and compare colleges by location, course, and sample rating.";
    } else if (currentPage === "wishlist") {
      document.title = "Wishlist | Campus Compass";
    } else {
      document.title = "Find a College | Campus Compass";
    }

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute("content", description);
    }
  }, [colleges, collegeSlug, currentPage]);

  let toggleWishlist = (collegeId) => {
    let newWishlist = wishlist.includes(collegeId)
      ? wishlist.filter((id) => id !== collegeId)
      : [...wishlist, collegeId];

    try {
      localStorage.setItem("collegeWishlist", JSON.stringify(newWishlist));
      setWishlist(newWishlist);
    } catch (storageError) {
      console.error("Could not save the wishlist:", storageError);
      setError("Your wishlist could not be saved in this browser.");
    }
  };

  let content;

  if (loading) {
    content = <main className="loading-state">Loading colleges...</main>;
  } else if (error && colleges.length === 0) {
    content = <main className="notice notice-error">{error}</main>;
  } else if (currentPage === "home") {
    content = <HomePage colleges={colleges} wishlist={wishlist} onToggleWishlist={toggleWishlist} />;
  } else if (currentPage === "colleges") {
    content = <CollegeListingPage colleges={colleges} wishlist={wishlist} onToggleWishlist={toggleWishlist} />;
  } else if (currentPage === "details") {
    let selectedCollege = colleges.find((item) => item.slug === collegeSlug);
    content = <CollegeDetailsPage college={selectedCollege} wishlist={wishlist} onToggleWishlist={toggleWishlist} />;
  } else if (currentPage === "wishlist") {
    content = <WishlistPage colleges={colleges} wishlist={wishlist} onToggleWishlist={toggleWishlist} />;
  } else {
    content = (
      <main className="empty-state">
        <h1>Page not found.</h1>
        <p>Go back to the homepage or explore colleges.</p>
        <a className="button button-primary" href="/">Go to homepage</a>
      </main>
    );
  }

  return (
    <>
      <Header savedCount={wishlist.length} />
      {error && colleges.length > 0 && <p className="storage-message">{error}</p>}
      {content}
      <Footer />
    </>
  );
};

export default App;