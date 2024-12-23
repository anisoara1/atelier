import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TopDishes.css";
import desktopImage from "../assets/top-dishes-img.jpg";
import tabletImage from "../assets/dish-img-tablet.png";
import mobileImage from "../assets/dish-img-mobile.png";

const TopDishes = () => {
  const swiperRef = useRef(null); // Create a reference to the Swiper instance

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
      <h2>Top Dishes</h2>
      <div className="swiper-container">
        <Swiper
          ref={swiperRef} // Attach swiper instance to the ref
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true, dynamicBullets: false }}
          spaceBetween={40}
          slidesPerView={4}
          slidesPerGroup={4}
          breakpoints={{
            1300: { slidesPerView: 4, slidesPerGroup: 4 },
          }}
        >
          {dishes.map((dish, index) => (
            <SwiperSlide key={index}>
              <div className="dish-card">
                <picture>
                  <source
                    srcSet={tabletImage}
                    media="(min-width: 768px) and (max-width: 1024px)"
                  />
                  <source srcSet={mobileImage} media="(max-width: 767px)" />
                  <img
                    src={desktopImage}
                    alt={dish.name}
                    className="dish-image"
                  />
                  console.log(desktopImage); console.log(tabletImage);
                  console.log(mobileImage);
                </picture>

                <div className="overlay">
                  <h3>{dish.name}</h3>
                  <p className="overlay-text">{dish.description}</p>
                  <strong>{dish.price}</strong>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom Navigation Arrows */}
        <span
          className="swiper-button-prev"
          onClick={() => swiperRef.current.swiper.slidePrev()} // Use slidePrev method
        >
          <svg>
            <use xlinkHref="/assets/icons.svg#icon-circle-left"></use>
          </svg>
        </span>
        <span
          className="swiper-button-next"
          onClick={() => swiperRef.current.swiper.slideNext()} // Use slideNext method
        >
          <svg>
            <use xlinkHref="/assets/icons.svg#icon-circle-right"></use>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default TopDishes;
