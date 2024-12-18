import React from "react";
import config from "../config";
import "./Menu.css";

const menuItems = [
  {
    name: "Gogoși cu ciocolată",
    description:
      "Delicioase gogoși umplute cu ciocolată.Delicioase gogoși umplute cu ciocolată.Delicioase gogoși umplute cu ciocolată.",
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
      "Delicioase gogoși umplute cu ciocolată.Delicioase gogoși umplute cu ciocolată.",
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
    description:
      "Gogoși clasice, perfecte pentru orice ocazie.Delicioase gogoși umplute cu ciocolată.Delicioase gogoși umplute cu ciocolată.",
    price: "6 lei",
    image: "path/to/plain-donut.jpg",
  },
];

const Menu = () => (
  <section className="menu">
    <h2>{config.menuTitle}</h2>
    <div className="menu-container">
      <div className="vertical-border"></div>
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <div className="image-card">
            <img src={item.image} alt={item.name} className="menu-image" />
          </div>
          <div className="text-container">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <hr className="orange-line" />
            <div className="price-container">
              <button className="order-btn">Comandă acum</button>
              <h4 className="price">{item.price}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Menu;
