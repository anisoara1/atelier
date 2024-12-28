import React, { useState } from "react";
import config from "../config";
import "./Menu.css";
import dishImage from "../assets/menuDish.png";

const allMenuItems = [
  {
    name: "Gogoși cu ciocolată",
    description: "cu ciocolată.Delicioase gogoși umplute cu ciocolată.",
    price: "10 lei",
    image: "path/to/chocolate-donut.jpg",
  },
  {
    name: "Gogoși cu gem",
    description: "Gogoși pufoase cu gem de fructe.",
    price: "8 lei",
    image: "path/to/jam-donut.jpg",
  },
  {
    name: "Gogoși simple",
    description: "Gogoși clasice, perfecte pentru orice ocazie.",
    price: "6 lei",
    image: "path/to/plain-donut.jpg",
  },

  {
    name: "Gogoși cu ciocolată",
    description:
      "Delicioase gogoși umplute cu ciocolată.Delicioase gogoși umplute .",
    price: "10 lei",
    image: "path/to/chocolate-donut.jpg",
  },
  {
    name: "Gogoși cu gem",
    description: "Gogoși pufoase cu gem de fructe.",
    price: "8 lei",
    image: "path/to/jam-donut.jpg",
  },
  {
    name: "Gogoși simple",
    description: "Gogoși clasice, perfecte pentru orice ocazie.",
    price: "6 lei",
    image: "path/to/plain-donut.jpg",
  },
  {
    name: "Gogoși cu ciocolată",
    description: "Delicioase gogoși umplute cu ciocolată.Delicioase ciocolată.",
    price: "10 lei",
    image: "path/to/chocolate-donut.jpg",
  },
  {
    name: "Gogoși cu gem",
    description: "Gogoși pufoase cu gem de fructe.",
    price: "8 lei",
    image: "path/to/jam-donut.jpg",
  },
  {
    name: "Gogoși simple",
    description: "Gogoși clasice, perfecte pentru orice ocazie.",
    price: "6 lei",
    image: "path/to/plain-donut.jpg",
  },

  {
    name: "Gogoși cu ciocolată",
    description: "Delicioase gogoși umplute cu ciocolată.Delicioase ciocolată.",
    price: "10 lei",
    image: "path/to/chocolate-donut.jpg",
  },
  {
    name: "Gogoși cu gem",
    description: "Gogoși pufoase cu gem de fructe.",
    price: "8 lei",
    image: "path/to/jam-donut.jpg",
  },
  {
    name: "Gogoși simple",
    description: "Gogoși clasice, perfecte pentru orice ocazie.",
    price: "6 lei",
    image: "path/to/plain-donut.jpg",
  },
  {
    name: "Gogoși cu ciocolată",
    description:
      "Delicioase gogoși umplute cu ciocolată.Delicioase cu ciocolată.",
    price: "10 lei",
    image: "path/to/chocolate-donut.jpg",
  },
  {
    name: "Gogoși cu gem",
    description: "Gogoși pufoase cu gem de fructe.",
    price: "8 lei",
    image: "path/to/jam-donut.jpg",
  },
  {
    name: "Gogoși simple",
    description: "Gogoși clasice, perfecte pentru orice ocazie.",
    price: "6 lei",
    image: "path/to/plain-donut.jpg",
  },

  {
    name: "Gogoși cu ciocolată",
    description:
      "Delicioase gogoși umplute cu ciocolată.Delicioase gogoși ciocolată.",
    price: "10 lei",
    image: "path/to/chocolate-donut.jpg",
  },
  {
    name: "Gogoși cu gem",
    description: "Gogoși pufoase cu gem de fructe.",
    price: "8 lei",
    image: "path/to/jam-donut.jpg",
  },
  {
    name: "Gogoși simple",
    description: "Gogoși clasice, perfecte pentru orice ocazie.",
    price: "6 lei",
    image: "path/to/plain-donut.jpg",
  },
  {
    name: "Gogoși cu ciocolată",
    description:
      "Delicioase gogoși umplute cu ciocolată.Delicioase gogoși cu ciocolată.",
    price: "10 lei",
    image: "path/to/chocolate-donut.jpg",
  },
  {
    name: "Gogoși cu gem",
    description: "Gogoși pufoase cu gem de fructe.",
    price: "8 lei",
    image: "path/to/jam-donut.jpg",
  },
  {
    name: "Gogoși simple",
    description: "Gogoși clasice, perfecte pentru orice ocazie.",
    price: "6 lei",
    image: "path/to/plain-donut.jpg",
  },

  {
    name: "Gogoși cu ciocolată",
    description:
      "Delicioase gogoși umplute cu ciocolată.Delicioase gogoși cu ciocolată.",
    price: "10 lei",
    image: "path/to/chocolate-donut.jpg",
  },
  {
    name: "Gogoși cu gem",
    description: "Gogoși pufoase cu gem de fructe.",
    price: "8 lei",
    image: "path/to/jam-donut.jpg",
  },
  {
    name: "Gogoși simple",
    description: "Gogoși clasice, perfecte pentru orice ocazie.",
    price: "6 lei",
    image: "path/to/plain-donut.jpg",
  },
];
const LARGE_SCREEN_INITIAL_ITEMS = 6; // Număr de carduri inițial pentru ecrane mari
const LARGE_SCREEN_LOAD_ITEMS = 4; // Număr de carduri încărcate pe ecrane mari
const SMALL_SCREEN_INITIAL_ITEMS = 3; // Număr de carduri inițial pentru ecrane mici
const SMALL_SCREEN_LOAD_ITEMS = 3; // Număr de carduri încărcate pe ecrane mici

const Menu = () => {
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
    <section className="menu">
      <h1>{config.menuTitle}</h1>
      <div className="menu-container">
        {allMenuItems.slice(0, visibleItems).map((item, index) => (
          <div key={index} className="menu-item">
            <div className="image-card">
              <img src={dishImage} alt={item.name} className="menu-image" />
            </div>
            <div className="text-container">
              <h3>{item.name}</h3>
              <h5>{item.description}</h5>
              <hr className="orange-line" />
              <div className="price-container">
                <button className="menu-button">Adaugă</button>
                <h4 className="price">{item.price}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleItems < allMenuItems.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Vezi meniuri
        </button>
      )}
    </section>
  );
};

export default Menu;
