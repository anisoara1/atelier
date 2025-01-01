import React, { useState } from "react";
import "./CartPage.css";

const CartPage = ({ cartItems = [], updateQuantity, removeItem }) => {
  const [selectedDrink, setSelectedDrink] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleDrinkChange = (event) => {
    setSelectedDrink(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="cart">
      <h2>Cosul Tau</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="quantity-control">
              <button onClick={() => updateQuantity(item, item.quantity - 1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item, item.quantity + 1)}>
                +
              </button>
            </div>
            <button onClick={() => removeItem(item)}>Sterge</button>
          </div>
        ))}
      </div>
      <div className="drink-selection">
        <h3>Alege bautura</h3>
        <label>
          <input
            type="radio"
            value="0.5l"
            checked={selectedDrink === "0.5l"}
            onChange={handleDrinkChange}
          />
          0.5l
        </label>
        <label>
          <input
            type="radio"
            value="1l"
            checked={selectedDrink === "1l"}
            onChange={handleDrinkChange}
          />
          1l
        </label>
        <label>
          <input
            type="radio"
            value="2l"
            checked={selectedDrink === "2l"}
            onChange={handleDrinkChange}
          />
          2l
        </label>
      </div>
      <div className="delivery-form">
        <h3>Adresa de livrare</h3>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Introdu adresa"
        />
      </div>
      <div className="message-form">
        <h3>Mesaj</h3>
        <textarea
          value={message}
          onChange={handleMessageChange}
          placeholder="Introdu mesajul"
        ></textarea>
      </div>
    </div>
  );
};

export default CartPage;
