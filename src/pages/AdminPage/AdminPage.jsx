import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/productSlice";
import "./AdminPage.css";

export const AdminPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
    category: "topDishes", // Default category
  });
  const [editingProduct, setEditingProduct] = useState(null);

  if (!isAuthenticated) {
    return (
      <div className="error-message">
        Nu aveți permisiunea de a accesa această pagină.
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const handleCategoryChange = (e) => {
    setNewProduct({ ...newProduct, category: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    dispatch(addProduct(newProduct));

    setNewProduct({
      name: "",
      price: "",
      description: "",
      image: null,
      category: "topDishes",
    });
  };

  const handleEditProduct = (index) => {
    setEditingProduct(index);
    setNewProduct(products[index]);
  };

  return (
    <div className="admin-page">
      <h1>Admin Dashboard</h1>
      <form className="product-form" onSubmit={handleAddProduct}>
        <input
          type="text"
          name="name"
          placeholder="Nume produs"
          value={newProduct.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Preț"
          value={newProduct.price}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          placeholder="Descriere"
          value={newProduct.description}
          onChange={handleInputChange}
        ></textarea>
        <input type="file" name="image" onChange={handleImageChange} />

        <select
          name="category"
          value={newProduct.category}
          onChange={handleCategoryChange}
        >
          <option value="topDishes">Top Dishes</option>
          <option value="menus">Menus</option>
          <option value="dailyMenu">Daily Menu</option>
        </select>

        <button type="submit">
          {editingProduct !== null ? "Salvează modificările" : "Adaugă produs"}
        </button>
      </form>
      <h2>Produse existente</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className="product-list">
        {products.map((product, index) => (
          <li className="product-item" key={product.id || index}>
            <div className="product-info">
              <p>{product.name}</p>
              <p>{product.price} lei</p>
              <p>{product.description}</p>
              <p>Categoria: {product.category}</p>
            </div>
            {product.image && (
              <img
                src={`http://localhost:5000${product.image}`}
                alt={product.name}
                className="product-image"
              />
            )}

            <div className="product-actions">
              <button onClick={() => handleEditProduct(index)}>Editează</button>
              <button>Șterge</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
