import React, { useState } from "react";
import { useSelector } from "react-redux";

export const AdminPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  if (!isAuthenticated) {
    return <div>Nu aveți permisiunea de a accesa această pagină.</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    setProducts([...products, newProduct]);
    setNewProduct({ name: "", price: "", description: "" });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleAddProduct}>
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
        <input
          type="text"
          name="description"
          placeholder="Descriere"
          value={newProduct.description}
          onChange={handleInputChange}
        />
        <button type="submit">Adaugă produs</button>
      </form>
      <h2>Produse existente</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price} - {product.description}
          </li>
        ))}
      </ul>
    </div>
  );
};
