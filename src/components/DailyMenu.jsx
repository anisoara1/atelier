import React from "react";
import "./DailyMenu.css";

const DailyMenu = ({ image, title, description, price }) => (
  <div className="daily-menu-card">
    <img src={image} alt={title} className="menu-image" />
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="menu-footer">
      <button className="order-button">Comandă acum</button>
      <p className="price">{price}</p>
    </div>
  </div>
);

export default DailyMenu;
