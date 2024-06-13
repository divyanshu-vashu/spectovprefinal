import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import "../Styles/custom_navbar.css";

const CustomNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          <span>SpectoV</span>
        </Link>
        <ul className="nav-links">
          {navLinks.map((nav) => (
            <li key={nav.id} className="nav-item">
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="menu-toggle">
          <img src={scrolled ? close : menu} alt="menu" />
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
