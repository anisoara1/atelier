import React, { useEffect, useState } from "react";
import "./NavBar.css";
import config from "../config";
import logo from "../assets/logo.jpg"; // Import image
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [authState, setAuthState] = useState(isAuthenticated);

  useEffect(() => {
    setAuthState(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <header className="header">
      <div className="container">
        <div className="site-name">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <h2>{config.siteName}</h2> {/* Display the site name */}
        </div>
        <nav>
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
        <ul>
          {!authState && (
            <li>
              <Link to="/login">Admin</Link>
            </li>
          )}
          {authState && (
            <li>
              <Link to="/home">Home</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};
