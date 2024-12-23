import React from "react";
import "./DailyMenuCard.css";
import desktopImage from "../assets/top-dishes-img.jpg";
import tabletImage from "../assets/dish-img-tablet.png";
import mobileImage from "../assets/dish-img-mobile.png";

const DailyMenuCard = ({ image, title, description, price }) => (
  <div className="daily-menu-container">
    <div className="daily-menu-card">
      <picture>
        {/* Imagine pentru desktop */}
        <source srcSet={desktopImage} media="(min-width: 1025px)" />
        {/* Imagine pentru tabletă */}
        <source
          srcSet={tabletImage}
          media="(min-width: 768px) and (max-width: 1024px)"
        />
        {/* Imagine pentru mobil */}
        <source srcSet={mobileImage} media="(max-width: 767px)" />
        {/* Imagine implicită */}
        <img src={desktopImage} alt={title} className="daily-menu-image" />
      </picture>
      <div className="text-container">
        <h3>{title}</h3>
        <h5>{description}</h5>
        <hr className="daily-orange-line" />
        <div className="menu-footer">
          <button className="daily-order-button">Adauga</button>
          <p className="daily-price">{price}</p>
        </div>
      </div>
    </div>
  </div>
);

export default DailyMenuCard;
