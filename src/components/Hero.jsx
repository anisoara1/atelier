import React from "react";
import config from "../config";
import "./Hero.css";
import backgroundImage from "../assets/fresh-baked-donuts.jpg";
import burger from "../assets/burger.jpg";
import vector from "../assets/Vector 1.png";

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>{config.heroText}</h1>
      <p>Descopera si comanda mancarea noastra delicioasa!</p>
      <div className="buttons">
        <button className="menu-button">Meniu</button>
        <button className="order-button">Comanda</button>
      </div>
    </div>
    <div className="image-container">
      <img src={vector} alt="vector" className="vector" />
      <div className="first-image">
        <img src={backgroundImage} alt="Fresh baked donuts" />
      </div>
      <div className="second-image">
        <img src={burger} alt="Burger" />
      </div>
    </div>
  </section>
);

export default Hero;
