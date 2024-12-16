// src/components/Menu.js
import React from "react";
import config from "../config";
import "./Menu.css";

const menuItems = [
  {
    name: "Gogoși cu ciocolată",
    description: "Delicioase gogoși umplute cu ciocolată.",
    price: "10 lei",
  },
  {
    name: "Gogoși cu gem",
    description: "Gogoși pufoase cu gem de fructe.",
    price: "8 lei",
  },
  {
    name: "Gogoși simple",
    description: "Gogoși clasice, perfecte pentru orice ocazie.",
    price: "6 lei",
  },
  // Adaugă mai multe elemente de meniu după cum este necesar
];

const Menu = () => (
  <section className="menu">
    <h2>{config.menuTitle}</h2>
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p className="price">{item.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Menu;
