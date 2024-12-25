import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import config from "../config";
import logo from "../assets/logo.jpg";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="site-name">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
          <h2 className="title">{config.siteName}</h2>
        </div>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <a href="#home">Acasa</a>
            </li>
            <li>
              <a href="#about">Despre</a>
            </li>
            <li>
              <a href="#menu">Meniu</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <button className="book-table-button">Cosul tau</button>
        <ul className="admin-link">
          {location.pathname === "/login" ? (
            <li>
              <Link to="/atelier">Home</Link>
            </li>
          ) : (
            !isAuthenticated && (
              <li>
                <Link to="/login">Admin</Link>
              </li>
            )
          )}
          {isAuthenticated && location.pathname !== "/login" && (
            <li>
              <Link to={location.pathname === "/admin" ? "/atelier" : "/admin"}>
                {location.pathname === "/admin" ? "Home" : "Admin"}
              </Link>
            </li>
          )}
        </ul>
        <button className="burger-menu" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="overlay-close" onClick={toggleMenu}>
              <span className="overlay-close-btn">X</span>
            </button>
            <ul className="overlay-list">
              <li>
                <a href="#home" onClick={toggleMenu}>
                  Acasa
                </a>
              </li>
              <li>
                <a href="#about" onClick={toggleMenu}>
                  Despre
                </a>
              </li>
              <li>
                <a href="#menu" onClick={toggleMenu}>
                  Meniu
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
              {location.pathname === "/login" ? (
                <li>
                  <Link to="/atelier" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
              ) : (
                !isAuthenticated && (
                  <li>
                    <Link to="/login" onClick={toggleMenu}>
                      Admin
                    </Link>
                  </li>
                )
              )}
              {isAuthenticated && location.pathname !== "/login" && (
                <li>
                  <Link
                    to={location.pathname === "/admin" ? "/atelier" : "/admin"}
                    onClick={toggleMenu}
                  >
                    {location.pathname === "/admin" ? "Home" : "Admin"}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};
