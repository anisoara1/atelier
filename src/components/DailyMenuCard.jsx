import React from "react";
import "./DailyMenuCard.css";

const DailyMenuCard = ({ image, title, description, price }) => (
  <div className="daily-menu-container">
    <div className="daily-menu-card">
      <img src={image} alt={title} className="daily-menu-image" />
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
