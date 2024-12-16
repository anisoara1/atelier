import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-logo">
      <img src="logo.png" alt="Logo" />
    </div>
    <div className="footer-about">
      <p>Delivering culinary excellence since 1998</p>
    </div>
    <div className="footer-contact">
      <p>Contact us: contact@example.com</p>
    </div>
    <div className="footer-social">
      <a href="#facebook">
        <i className="fab fa-facebook-f">Facebook</i>
      </a>
      <a href="#twitter">
        <i className="fab fa-twitter">Twitter</i>
      </a>
      <a href="#instagram">
        <i className="fab fa-instagram">Instagram</i>
      </a>
    </div>
    <div className="footer-newsletter">
      <form>
        <input type="email" placeholder="Subscribe to our newsletter" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </footer>
);

export default Footer;
