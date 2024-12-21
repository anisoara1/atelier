import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import config from "../config";
import logo from "../assets/logo.jpg";

export const NavBar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="site-name">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
          <h2>{config.siteName}</h2>
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
      </div>
    </header>
  );
};
