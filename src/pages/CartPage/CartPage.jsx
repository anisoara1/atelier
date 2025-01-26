import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import "./CartPage.css";
import colaDrink from "../../assets/cola-drink.jpg";
import orangeDrink from "../../assets/orange-drink.jpg";
import waterDrink from "../../assets/water-drink.jpg";
import { removeFromCart } from "../../redux/slices/cartSlice";

const CartPage = ({ updateQuantity }) => {
  const baseURL = process.env.REACT_APP_SERVER_URL_PROD;
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState(null);
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [drinkQuantities, setDrinkQuantities] = useState({
    "0.5l": 0,
    "1l": 0,
    "2l": 0,
  });

  const [selectedDrink, setSelectedDrink] = useState({});

  const [customMessage] = useState("");

  const sendToWhatsApp = () => {
    let drinksMessage = Object.keys(drinkQuantities)
      .filter((size) => drinkQuantities[size] > 0)
      .map((size) => {
        const drinkName = selectedDrink.name || "Nume băutură";
        return `${drinkName} ${size}: ${drinkQuantities[size]} buc`;
      })
      .join("\n");

    const message = `Comandă:
  Adresă: ${address}
  Telefon: ${phone}
  Mesaj: ${customMessage}
  Meniuri: ${cartItems
    .map((item) => `${item.name} x${item.quantity}`)
    .join("\n")}
  Băuturi:\n${drinksMessage}
  Total: ${grandTotal} lei`;

    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`);
  };

  const handleDrinkQuantityChange = (size, drinkName, increment) => {
    setDrinkQuantities((prev) => ({
      ...prev,
      [size]: Math.max(0, (prev[size] || 0) + increment),
    }));
    setSelectedDrink({ name: drinkName });
  };

  const handleMenuQuantityChange = (index, change) => {
    const updatedCartItems = [...cartItems];
    const updatedQuantity = updatedCartItems[index].quantity + change;

    updatedCartItems[index].quantity = Math.max(0, updatedQuantity);

    if (updateQuantity) {
      updateQuantity(updatedCartItems);
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

  const removeItemFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="cart">
      <h2>Coșul Tău</h2>
      <div className="cart-section">
        <div className="cart-items">
          <h3>Meniuri</h3>
          <div className="menus-section">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-details">
                  <div className="cart-item-image">
                    {item.image ? (
                      <img
                        src={`${baseURL}${
                          item.image.startsWith("/")
                            ? item.image
                            : `/${item.image}`
                        }`}
                        alt={item.name}
                        className="item-image"
                      />
                    ) : (
                      <img
                        src="default-image.jpg"
                        alt="Default"
                        className="item-image"
                      />
                    )}
                    <button
                      className="remove-item-button"
                      onClick={() => removeItemFromCart(item._id)}
                    >
                      X
                    </button>
                  </div>

                  <span className="menu-name">{item.name}</span>

                  <div className="quantity-control">
                    <button onClick={() => handleMenuQuantityChange(index, -1)}>
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button onClick={() => handleMenuQuantityChange(index, 1)}>
                      +
                    </button>
                  </div>

                  <span className="menu-price">
                    {item.price * item.quantity} lei
                  </span>
                </div>
              </div>
            ))}
          </div>
          <h4>Total meniuri: {menuTotalPrice} lei</h4>
          <h3>Băuturi</h3>
          <div className="drinks-section">
            <div className="drink-card">
              <div className="drinks-item-image">
                <h5>Apă plată</h5>
                <img src={waterDrink} alt="Meniu" className="item-image" />
              </div>
              <div className="drinks-list">
                {Object.keys(drinkQuantities).map((size) => {
                  const drinkPrice = { "0.5l": 5, "1l": 8, "2l": 12 }[size];
                  const quantity = drinkQuantities[size];
                  return (
                    <div key={size} className="drink-item">
                      <div className="drink-item-details">
                        <span className="menu-name">{size}</span>
                        <div className="quantity-control">
                          <button
                            onClick={() =>
                              handleDrinkQuantityChange(size, "Apă plată", -1)
                            }
                          >
                            -
                          </button>
                          <span className="quantity">{quantity}</span>
                          <button
                            onClick={() =>
                              handleDrinkQuantityChange(size, "Apă plată", 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <span className="menu-price">
                          {quantity * drinkPrice} lei
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="drink-card">
              <div className="drinks-item-image">
                <h5>Suc Cola</h5>
                <img src={colaDrink} alt="Meniu" className="item-image" />
              </div>
              <div className="drinks-list">
                {Object.keys(drinkQuantities).map((size) => {
                  const drinkPrice = { "0.5l": 5, "1l": 8, "2l": 12 }[size];
                  const quantity = drinkQuantities[size];
                  return (
                    <div key={size} className="drink-item">
                      <div className="drink-item-details">
                        <span className="menu-name">{size}</span>
                        <div className="quantity-control">
                          <button
                            onClick={() =>
                              handleDrinkQuantityChange(size, "Suc Cola", -1)
                            }
                          >
                            -
                          </button>
                          <span className="quantity">{quantity}</span>
                          <button
                            onClick={() =>
                              handleDrinkQuantityChange(size, "Suc Cola", 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <span className="menu-price">
                          {quantity * drinkPrice} lei
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="drink-card">
              <div className="drinks-item-image">
                <h5>Suc de portocale</h5>
                <img src={orangeDrink} alt="Meniu" className="item-image" />
              </div>
              <div className="drinks-list">
                {Object.keys(drinkQuantities).map((size) => {
                  const drinkPrice = { "0.5l": 5, "1l": 8, "2l": 12 }[size];
                  const quantity = drinkQuantities[size];
                  return (
                    <div key={size} className="drink-item">
                      <div className="drink-item-details">
                        <span className="menu-name">{size}</span>
                        <div className="quantity-control">
                          <button
                            onClick={() =>
                              handleDrinkQuantityChange(
                                size,
                                "Suc de portocale",
                                -1
                              )
                            }
                          >
                            -
                          </button>
                          <span className="quantity">{quantity}</span>
                          <button
                            onClick={() =>
                              handleDrinkQuantityChange(
                                size,
                                "Suc de portocale",
                                1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <span className="menu-price">
                          {quantity * drinkPrice} lei
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <h4>Total băuturi: {drinkTotalPrice} lei</h4>
        </div>

        <div className="form-container">
          <div className="field">
            <label htmlFor="address">Adresa de livrare</label>
            <InputText
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Introdu adresa"
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Număr de telefon</label>
            <InputText
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Introdu numărul de telefon"
            />
          </div>
          <div className="field">
            <label htmlFor="deliveryTime">
              Interval de timp pentru livrare
            </label>
            <Calendar
              id="deliveryTime"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.value)}
              showTime
              placeholder="Selectează ora"
            />
          </div>
          <div className="field">
            <label htmlFor="message">Mesaj</label>
            <InputTextarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Introdu mesajul"
              rows={3}
            />
          </div>
          <div className="total-price">
            <h3>Total general: {grandTotal} lei</h3>
          </div>
          <Button label="Trimite comanda" onClick={sendToWhatsApp} />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
