import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TopDishes.css";

const TopDishes = () => {
  const swiperRef = useRef(null); // Create a reference to the Swiper instance

  const dishes = [
    {
      name: "Gogoși cu ciocolată",
      description: "Delicioase gogoși umplute cu ciocolată.",
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
      name: "Gogoși regale",
      description: "Gogoși de lux, perfecte pentru orice ocazie.",
      price: "12 lei",
      image: "path/to/plain-donut.jpg",
    },
    {
      name: "Gogoși simple",
      description: "Gogoși clasice, perfecte pentru orice ocazie.",
      price: "6 lei",
      image: "path/to/plain-donut.jpg",
    },
    {
      name: "Gogoși regale",
      description: "Gogoși de lux, perfecte pentru orice ocazie.",
      price: "12 lei",
      image: "path/to/plain-donut.jpg",
    },
    {
      name: "Gogoși cu ciocolată",
      description: "Delicioase gogoși umplute cu ciocolată.",
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
      name: "Gogoși regale",
      description: "Gogoși de lux, perfecte pentru orice ocazie.",
      price: "12 lei",
      image: "path/to/plain-donut.jpg",
    },
    {
      name: "Gogoși simple",
      description: "Gogoși clasice, perfecte pentru orice ocazie.",
      price: "6 lei",
      image: "path/to/plain-donut.jpg",
    },
    {
      name: "Gogoși regale",
      description: "Gogoși de lux, perfecte pentru orice ocazie.",
      price: "12 lei",
      image: "path/to/plain-donut.jpg",
    },
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
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {dishes.map((dish, index) => (
            <SwiperSlide key={index}>
              <div className="dish-card">
                <img src={dish.image} alt={dish.name} className="dish-image" />
                <div className="overlay">
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
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
