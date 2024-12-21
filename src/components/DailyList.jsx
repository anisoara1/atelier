import React, { useState } from "react";
import DailyMenuCard from "./DailyMenuCard";
import "./DailyList.css";

const dailyData = [
  {
    title: "Menu 1",
    description:
      "A delicious menu with fresh ingredients.A tasty and hearty menu for any time of the day.",
    price: "25 lei",
    image: "path/to/menu1.jpg",
  },
  {
    title: "Menu 2",
    description: "A tasty and hearty menu for any time of the day.",
    price: "30 lei",
    image: "path/to/menu2.jpg",
  },
  {
    title: "Menu 3",
    description: "A light menu perfect for a quick meal.",
    price: "20 lei",
    image: "path/to/menu3.jpg",
  },
];

const DailyList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleOutsideClick = (e) => {
    if (e.target.className === "modal-overlay") {
      handleCloseModal();
    }
  };

  return (
    <div className="daily-list">
      <button className="view-menu-button" onClick={handleOpenModal}>
        Meniul zilei
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <div className="menu-list">
              {dailyData.map((menu, index) => (
                <DailyMenuCard key={index} {...menu} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyList;
