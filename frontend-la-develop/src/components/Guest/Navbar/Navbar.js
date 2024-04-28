import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  // Mobile Version
  const [openCloseNav, setOpenCloseNav] = useState(false);
  const handleNavigation = () => {
    setOpenCloseNav(!openCloseNav);
  };
  return (
    <div
      className={`nav-container container-xxl ${openCloseNav ? "active" : ""}`}
    >
      <nav>
        <ul className="mobile-nav ps-0">
          <li>
            <Link to="/#" className="link-logo"></Link>
          </li>
          <li>
            <div
              className="menu-icon-container"
              onClick={(e) => handleNavigation()}
            >
              <div className="menu-icon">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </div>
            </div>
          </li>
        </ul>

        <ul className="desktop-nav ps-0">
          <li>
            <Link to="/#" className="link-logo"></Link>
          </li>
              <li>
                <Link to="/#home">Home</Link>
              </li>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#why-us">Why Us</Link>
              </li>
              <li>
                <Link to="/#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/#campaign">Campaign</Link>
              </li>
              <li>
                <Link to="/#contact" className="nav-link me-0">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/login" id="get_started">
                  Get Started
                </Link>
              </li>
        </ul>
      </nav>
    </div>
  );
};
