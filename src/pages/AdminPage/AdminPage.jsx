import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/productSlice";
import "./AdminPage.css";

export const AdminPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  // Log the products from Redux state
  console.log("Products from Redux state:", products);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Log type and value of changed field
    console.log(
      `Field: ${name}, Type: ${type}, Value: ${
        type === "file" ? files[0] : value
      }, Value Type: ${typeof value}`
    );

    setProduct((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the product data being submitted
    console.log("Submitting product:", product);

    await dispatch(addProduct(product));
    setProduct({
      name: "",
      price: "",
      description: "",
      image: "",
      category: "topDishes",
    });
  };

  if (!isAuthenticated) {
    return <div>Nu aveți permisiunea de a accesa această pagină.</div>;
  }

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nume produs"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Preț"
          value={product.price}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Descriere"
          value={product.description}
          onChange={handleChange}
        />
        <input type="file" name="image" onChange={handleChange} />
        <select
          name="category"
          value={product.category || "topDishes"}
          onChange={handleChange}
        >
          <option value="topDishes">Top Dishes</option>
          <option value="menus">Menus</option>
          <option value="dailyMenu">Daily Menu</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? "Se încarcă..." : "Adaugă produs"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <h2>Produse existente</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="product-list">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product, index) => (
            <li className="product-item" key={product._id || index}>
              {" "}
              {/* Folosește _id în loc de id */}
              <div className="product-info">
                <p>{product.name}</p>
                <p>{product.price} lei</p>
                <p>{product.description}</p>
                <p>Categoria: {product.category}</p>
              </div>
              {product.image && (
                <img
                  src={`http://localhost:5000${product.image}`} // Asigură-te că link-ul către imagine este corect
                  alt={product.name}
                  className="product-image"
                />
              )}
              <div className="product-actions">
                <button>Editează</button>
                <button>Șterge</button>
              </div>
            </li>
          ))
        ) : (
          <p>Nu există produse.</p>
        )}
      </ul>
    </div>
  );
};
