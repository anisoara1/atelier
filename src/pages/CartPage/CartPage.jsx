import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import "./CartPage.css";
import sticleImage from "../../assets/sticle.webp";
import logo from "../../assets/logo.jpg";

const CartPage = ({ updateQuantity }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [drinkQuantities, setDrinkQuantities] = useState({
    "0.5l": 0,
    "1l": 0,
    "2l": 0,
  });

  const handleQuantityChange = (type, key, value) => {
    if (type === "menu") {
      const updatedCartItems = [...cartItems];
      updatedCartItems[key].quantity = Math.max(0, value);
      updateQuantity(updatedCartItems);
    } else if (type === "drink") {
      setDrinkQuantities((prev) => ({
        ...prev,
        [key]: Math.max(0, value),
      }));
    }
  };

  const calculateMenuTotal = useCallback(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const calculateDrinkTotal = useCallback(() => {
    const drinkPrices = { "0.5l": 5, "1l": 8, "2l": 12 };
    return Object.entries(drinkQuantities).reduce(
      (sum, [size, qty]) => sum + qty * drinkPrices[size],
      0
    );
  }, [drinkQuantities]);

  const menuTotalPrice = calculateMenuTotal();
  const drinkTotalPrice = calculateDrinkTotal();
  const grandTotal = menuTotalPrice + drinkTotalPrice;

  const generateWhatsAppMessage = () => {
    const menuDetails = cartItems
      .map(
        (item) =>
          `${item.name} x${item.quantity} = ${item.price * item.quantity} lei`
      )
      .join(", ");
    const drinkDetails = Object.entries(drinkQuantities)
      .map(([size, qty]) => `${size} x${qty}`)
      .filter((detail) => !detail.includes("x0"))
      .join(", ");
    const total = calculateMenuTotal() + calculateDrinkTotal();

    return `Adresa: ${address}\nTelefon: ${phone}\nOra livrare: ${deliveryTime}\nMesaj: ${message}\nMeniuri: ${menuDetails}\nBauturi: ${drinkDetails}\nTotal: ${total} lei`;
  };

  const sendToWhatsApp = () => {
    const formattedMessage = encodeURIComponent(generateWhatsAppMessage());
    const whatsappNumber = "+40747581863";
    window.open(`https://wa.me/${whatsappNumber}?text=${formattedMessage}`);
  };
  return (
    <div className="cart">
      <h2>Coșul Tău</h2>

      <h3>Meniuri</h3>
      <div className="cart-section">
        <div className="drink-image">
          <img src={logo} alt="Racoritoare" className="dish-image" />
        </div>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <span className="menu-name">{item.name}</span>
              <div className="quantity-control">
                <button
                  onClick={() =>
                    handleQuantityChange("menu", index, item.quantity - 1)
                  }
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange("menu", index, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <span className="menu-subtotal">
                {item.price * item.quantity} lei
              </span>
            </div>
          ))}
        </div>
      </div>
      <h4>Total meniuri: {menuTotalPrice} lei</h4>
      <h3>Băuturi</h3>
      <div className="drink-section">
        <div className="drink-image">
          <img src={sticleImage} alt="Racoritoare" className="dish-image" />
        </div>
        <div className="drink-options">
          {["0.5l", "1l", "2l"].map((size) => (
            <div key={size} className="drink-option">
              <span className="drink-size">{size}</span>
              <div className="quantity-control">
                <button
                  onClick={() =>
                    handleQuantityChange(
                      "drink",
                      size,
                      drinkQuantities[size] - 1
                    )
                  }
                >
                  -
                </button>
                <span className="quantity">{drinkQuantities[size]}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(
                      "drink",
                      size,
                      drinkQuantities[size] + 1
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h4>Total băuturi: {drinkTotalPrice} lei</h4>

      {/* Detalii livrare */}
      <div className="delivery-form">
        <h3>Adresa de livrare</h3>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Introdu adresa"
        />
      </div>
      <div className="delivery-time-form">
        <h3>Interval de timp pentru livrare</h3>
        <input
          type="text"
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
          placeholder="Introdu intervalul de timp dorit"
        />
      </div>
      <div className="message-form">
        <h3>Mesaj</h3>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Introdu mesajul"
        ></textarea>
      </div>
      <div className="phone-form">
        <h3>Număr de telefon</h3>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Introdu numărul de telefon"
        />
      </div>

      {/* Total general */}
      <div className="total-price">
        <h3>Total general: {grandTotal} lei</h3>
      </div>
      <button onClick={sendToWhatsApp}>Trimite comanda</button>
    </div>
  );
};

export default CartPage;
