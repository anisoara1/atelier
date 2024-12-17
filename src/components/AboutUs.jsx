// src/components/AboutUs.js
import React from "react";
import config from "../config";
import "./AboutUs.module.css";

const AboutUs = () => (
  <section className="about-us">
    <div className="container">
      <h2>{config.aboutUsTitle}</h2>
      <p>
        La {config.siteName}, ne mândrim cu oferirea celor mai delicioase gogoși
        din oraș. Folosim doar ingrediente de cea mai bună calitate și rețete
        tradiționale pentru a aduce un zâmbet pe fața fiecărui client.
      </p>
      <p>
        Echipa noastră dedicată lucrează din greu pentru a asigura că fiecare
        gogoșă este perfectă, iar serviciul nostru este de neegalat. Vino să ne
        vizitezi și să te bucuri de o experiență culinară de neuitat!
      </p>
    </div>
  </section>
);

export default AboutUs;
