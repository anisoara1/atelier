import React from "react";
import config from "../config";
import "./Hero.css";
import backgroundImage from "../assets/fresh-baked-donuts.jpg";
import burger from "../assets/burger.jpg";

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>{config.heroText}</h1>
      <p>Descopera si comanda mancarea noastra delicioasa!</p>
      <div className="buttons">
        <button className="menu-button">Meniu</button>
        <button className="order-button">Comanda acum</button>
      </div>
    </div>
    <div className="image-container">
      <div className="first-image">
        <img src={backgroundImage} alt="Fresh baked donuts" />
      </div>
      <div className="second-image">
        <img src={burger} alt="Fresh baked donuts" />
      </div>
    </div>
  </section>
);

export default Hero;