import Hero from "../../components/Hero";
import TopDishes from "../../components/TopDishes";
import AboutUs from "../../components/AboutUs";
import Menu from "../../components/Menu";
import TestimonialsList from "../../components/TestimonialsList";
import Footer from "../../components/Footer";
import React from "react";
import css from "../HomePage/HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={css.home}>
      <Hero />
      <TopDishes />
      <AboutUs />
      <Menu />
      <TestimonialsList />
      <Footer />
    </div>
  );
};
