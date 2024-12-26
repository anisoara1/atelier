import React, { useState, useEffect } from "react";
import config from "../config";
import "./Menu.css";
import dishImage from "../assets/menuDish.png";

const allMenuItems = [
  {
    name: "Gogoși cu ciocolată",
    description: "cu ciocolată.Delicioase gogoși umplute cu ciocolată.",
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
    name: "Gogoși cu ciocolată",
    description:
      "Delicioase gogoși umplute cu ciocolată.Delicioase gogoși umplute .",
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
    name: "Gogoși cu ciocolată",
    description: "Delicioase gogoși umplute cu ciocolată.Delicioase ciocolată.",
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
    name: "Gogoși cu ciocolată",
    description: "Delicioase gogoși umplute cu ciocolată.Delicioase ciocolată.",
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
    name: "Gogoși cu ciocolată",
    description:
      "Delicioase gogoși umplute cu ciocolată.Delicioase cu ciocolată.",
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
    name: "Gogoși cu ciocolată",
    description:
      "Delicioase gogoși umplute cu ciocolată.Delicioase gogoși ciocolată.",
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
    name: "Gogoși cu ciocolată",
    description:
      "Delicioase gogoși umplute cu ciocolată.Delicioase gogoși cu ciocolată.",
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
    name: "Gogoși cu ciocolată",
    description:
      "Delicioase gogoși umplute cu ciocolată.Delicioase gogoși cu ciocolată.",
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
];

const Menu = () => {
  const [visibleItems, setVisibleItems] = useState(6); // Initially 6 items for large screens
  const [itemsPerPage, setItemsPerPage] = useState(6); // Default for large screens

  useEffect(() => {
    // Adjust the number of items per page based on the screen width
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setItemsPerPage(3); // For tablets and smaller screens, show 3 items per page
      } else {
        setItemsPerPage(6); // For larger screens, show 6 items per page
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Call the function initially to set the correct items per page
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage); // Load based on itemsPerPage
  };

  return (
    <section className="menu">
      <h2>{config.menuTitle}</h2>
      <div className="menu-container">
        <div className="vertical-border"></div>
        {allMenuItems.slice(0, visibleItems).map((item, index) => (
          <div key={index} className="menu-item">
            <div className="image-card">
              <img src={dishImage} alt={item.name} className="menu-image" />
            </div>
            <div className="text-container">
              <h3>{item.name}</h3>
              <h5>{item.description}</h5>
              <hr className="orange-line" />
              <div className="price-container">
                <button className="order-button">Adauga</button>
                <h4 className="price">{item.price}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show "Load More" button if there are more items to load */}
      {visibleItems < allMenuItems.length && (
        <button className="load-more-button" onClick={loadMoreItems}>
          Vezi meniuri
        </button>
      )}
    </section>
  );
};

export default Menu;
