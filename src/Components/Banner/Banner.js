import "./banner.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Banner() { 
  const [currentPage, setCurrentPage] = useState("home");
  const location = useLocation();

  useEffect(() => { //Au changement d'une page
    if (location.pathname === "/") {
      setCurrentPage("home");
    } else if (location.pathname === "/about") {
      setCurrentPage("about");
    }
  }, [location.pathname]);

  let bannerContainer = "";
  if (currentPage === "about") {
    bannerContainer = "about-page-container";
  } else if (currentPage === "home") {
    bannerContainer = "home-page-container";
  }

  return (
    <div className="banner-all-container">
      <div className={bannerContainer}>
         <img className="banner-img" src={'/images/banner-background-' + currentPage + '.webp'} alt="" />
      </div>
      {currentPage === "home" && (<h2 className="banner-title">Chez vous, partout et ailleurs</h2>)}
    </div>
  );
}
