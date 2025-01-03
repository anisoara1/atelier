import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Menu.css";

const Menu = () => {
  // Obține produsele din Redux
  const { products } = useSelector((state) => state.products);

  // Filtrarea produselor pentru categoria "menus"
  const menuItems = products.filter((product) => product.category === "menus");

  // Configurare inițială pentru afișarea articolelor
  const LARGE_SCREEN_INITIAL_ITEMS = 6;
  const LARGE_SCREEN_LOAD_ITEMS = 4;
  const SMALL_SCREEN_INITIAL_ITEMS = 3;
  const SMALL_SCREEN_LOAD_ITEMS = 3;
  const isSmallScreen = window.innerWidth < 1024;

  const [visibleItems, setVisibleItems] = useState(
    isSmallScreen ? SMALL_SCREEN_INITIAL_ITEMS : LARGE_SCREEN_INITIAL_ITEMS
  );

  const handleLoadMore = () => {
    const additionalItems = isSmallScreen
      ? SMALL_SCREEN_LOAD_ITEMS
      : LARGE_SCREEN_LOAD_ITEMS;
    setVisibleItems((prev) => prev + additionalItems);
  };

  return (
    <section className="menu" id="menu">
      <h1>Meniuri</h1>
      <div className="menu-container">
        <span className="vertical-border"> </span>
        {menuItems.slice(0, visibleItems).map((item) => (
          <div key={item._id} className="menu-item">
            <div className="image-card">
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.name}
                className="menu-image"
              />
            </div>
            <div className="text-container">
              <h3>{item.name}</h3>
              <h5>{item.description}</h5>
              <hr className="orange-line" />
              <div className="price-container">
                <button className="menu-button">Adaugă</button>
                <h4 className="price">{item.price} lei</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < menuItems.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Vezi mai multe
        </button>
      )}
    </section>
  );
};

export default Menu;
