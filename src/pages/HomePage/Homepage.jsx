import Hero from "../../components/Hero";
import TopDishes from "../../components/TopDishes";
import AboutUs from "../../components/AboutUs";
import Menu from "../../components/Menu";
import DailyList from "../../components/DailyList";
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
      <DailyList />
      <Footer />
    </div>
  );
};
