import React, { useState } from "react";
import { useSelector } from "react-redux";

export const AdminPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });
  const [editingProduct, setEditingProduct] = useState(null);

  if (!isAuthenticated) {
    return <div>Nu aveți permisiunea de a accesa această pagină.</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (editingProduct !== null) {
      const updatedProducts = products.map((product, index) =>
        index === editingProduct ? newProduct : product
      );
      setProducts(updatedProducts);
      setEditingProduct(null);
    } else {
      setProducts([...products, newProduct]);
    }
    setNewProduct({ name: "", price: "", description: "", image: null });
  };

  const handleEditProduct = (index) => {
    setEditingProduct(index);
    setNewProduct(products[index]);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
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
        <input type="file" name="image" onChange={handleImageChange} />
        <button type="submit">
          {editingProduct !== null ? "Salvează modificările" : "Adaugă produs"}
        </button>
      </form>
      <h2>Produse existente</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price} - {product.description}
            {product.image && (
              <img
                src={URL.createObjectURL(product.image)}
                alt={product.name}
                style={{ width: "100px", height: "100px" }}
              />
            )}
            <button onClick={() => handleEditProduct(index)}>Editează</button>
            <button onClick={() => handleDeleteProduct(index)}>Șterge</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
