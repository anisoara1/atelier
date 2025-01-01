import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TopDishes.css";
import tabletImage from "../assets/dish-img-tablet.png";

const TopDishes = () => {
  const swiperRef = useRef(null);

  const dishes = [
    {
      name: "Gogoși cu ciocolată",
      description: "Delicioase cu ciocolată.",
      price: "10 lei",
    },
    {
      name: "Gogoși cu gem",
      description: "Gogoși pufoase cu gem de fructe.",
      price: "8 lei",
    },
    { name: "Gogoși simple", description: "Gogoși clasice.", price: "6 lei" },
    { name: "Gogoși regale", description: "Gogoși de lux.", price: "12 lei" },
    {
      name: "Gogoși cu ciocolată",
      description: "Delicioase cu ciocolată.",
      price: "10 lei",
    },
    {
      name: "Gogoși cu gem",
      description: "Gogoși pufoase cu gem de fructe.",
      price: "8 lei",
    },
    { name: "Gogoși simple", description: "Gogoși clasice.", price: "6 lei" },
    { name: "Gogoși regale", description: "Gogoși de lux.", price: "12 lei" },
  ];

  return (
    <div className="dishes-container">
      <h1>Farfurii de top</h1>
      <div className="swiper-container">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true, dynamicBullets: false }}
          spaceBetween={15}
          slidesPerView={4}
          slidesPerGroup={4}
          breakpoints={{
            1024: { slidesPerView: 4, slidesPerGroup: 4 },
            768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 8 },
            581: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 5 },
            312: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 5 },
            0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 5 },
          }}
        >
          {dishes.map((dish, index) => (
            <SwiperSlide key={index}>
              <div className="dish-card">
                <img src={tabletImage} alt={dish.name} className="dish-image" />
                <div className="top-dishes-overlay">
                  <h3>{dish.name}</h3>
                  <p className="overlay-text">{dish.description}</p>
                  <h3>{dish.price}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="swiper-button-prev"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15 19L8 12l7-7" />
          </svg>
        </div>
        <div
          className="swiper-button-next"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TopDishes;
