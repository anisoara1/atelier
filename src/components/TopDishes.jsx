// src/components/TopDishes.js
import React from "react";
import config from "../config";
import "./TopDishes.css";

const dishes = [
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
];

const TopDishes = () => (
  <section className="top-dishes">
    <h2>{config.topDishesTitle}</h2>
    <div className="dishes-container">
      {dishes.map((dish, index) => (
        <div key={index} className="dish-card">
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
          <p className="price">{dish.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TopDishes;
