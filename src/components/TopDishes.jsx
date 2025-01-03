import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TopDishes.css";

const TopDishes = () => {
  const swiperRef = useRef(null);

  // Obține produsele din Redux
  const { products } = useSelector((state) => state.products);

  // Filtrarea produselor pentru categoria "topDishes"
  const topDishes = products.filter(
    (product) => product.category === "topDishes"
  );

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
          {topDishes.map((dish) => (
            <SwiperSlide key={dish._id}>
              <div className="dish-card">
                <img
                  src={`http://localhost:5000${dish.image}`}
                  alt={dish.name}
                  className="dish-image"
                />
                <div className="top-dishes-overlay">
                  <h3>{dish.name}</h3>
                  <p className="overlay-text">{dish.description}</p>
                  <h3>{dish.price} lei</h3>
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
