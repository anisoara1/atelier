import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import "./DailyList.css";
import menuImg from "../assets/menuDish.png";

const dailyData = [
  {
    title: "Menu 1",
    description: "A delicious menu with fresh ingredients.",
    price: "25 lei",
    image: "path/to/menu1.jpg",
  },
  {
    title: "Menu 2",
    description: "A tasty and hearty menu for any time of the day.",
    price: "30 lei",
    image: "path/to/menu2.jpg",
  },
  {
    title: "Menu 3",
    description: "A light menu perfect for a quick meal.",
    price: "20 lei",
    image: "path/to/menu3.jpg",
  },
];

const DailyMenuList = () => {
  const navigate = useNavigate(); // Create a navigate function using useNavigate

  const handleBack = () => {
    navigate("/atelier"); // Navigate to the homepage route ("/atelier")
  };

  return (
    <div className="daily-menu-list">
      {/* Back Arrow */}
      <button className="back-arrow" onClick={handleBack}>
        &larr;
      </button>

      <h1>Meniul zilei </h1>
      <div className="menu-list">
        {dailyData.map((menu, index) => (
          <div key={index} className="daily-menu-card">
            <div className="daily-img-card">
              <img
                src={menuImg}
                alt={menu.title}
                className="daily-menu-image"
              />
            </div>
            <div className="daily-text-container">
              <h3>{menu.title}</h3>
              <h5>{menu.description}</h5>
              <hr className="daily-orange-line" />
              <div className="menu-footer">
                <button className="daily-order-button">Adaugă</button>
                <p className="daily-price">{menu.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyMenuList;
