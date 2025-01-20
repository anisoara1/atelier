import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./DailyList.css";

const DailyMenuList = () => {
  const baseURL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://atelier-server.onrender.com";
  const navigate = useNavigate();

  // Obține produsele din Redux
  const { products } = useSelector((state) => state.products);

  // Filtrarea produselor pentru categoria "dailyMenu"
  const dailyMenus = products.filter(
    (product) => product.category === "dailyMenu"
  );

  const handleBack = () => {
    navigate("/atelier"); // Navighează înapoi la ruta "/atelier"
  };

  return (
    <div className="daily-menu-list">
      <button className="back-arrow" onClick={handleBack}>
        &larr;
      </button>

      <h1>Meniul zilei</h1>
      <div className="menu-list">
        {dailyMenus.map((menu) => (
          <div key={menu._id} className="daily-menu-card">
            <div className="daily-img-card">
              <img
                src={`${baseURL}${menu.image}`}
                alt={menu.title}
                className="daily-menu-image"
              />
            </div>
            <div className="daily-text-container">
              <h3>{menu.name}</h3>
              <h5>{menu.description}</h5>
              <hr className="daily-orange-line" />
              <div className="menu-footer">
                <button className="daily-order-button">Adaugă</button>
                <p className="daily-price">{menu.price} lei</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyMenuList;
