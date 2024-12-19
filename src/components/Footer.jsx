import React from "react";
import "./Footer.css";
import logo from "../assets/logo.jpg";

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="footer-contact">
      <p>Address: 123 Food Street, Culinary City, FL 12345</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: mimi@gmail.com</p>
      <p>
        <a
          href="https://maps.google.com/?q=123+Food+Street,+Culinary+City,+FL+12345"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find us on Google Maps
        </a>
      </p>
    </div>
    <div className="footer-social">
      <a
        href="https://www.facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-facebook-f"></i> Facebook
      </a>
      <a
        href="https://www.instagram.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i> Instagram
      </a>
    </div>
  </footer>
);

export default Footer;
