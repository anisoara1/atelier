import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopDishes from "./components/TopDishes";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import TestimonialsList from "./components/TestimonialsList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <TopDishes />
      <AboutUs />
      <Menu />
      <TestimonialsList />
      <Footer />
    </div>
  );
}

export default App;
