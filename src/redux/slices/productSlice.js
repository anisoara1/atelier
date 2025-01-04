import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://atelier-server.onrender.com";

// Async thunk pentru obținerea produselor
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/products");
      console.log("Produse obținute:", response.data); // Log răspunsul serverului
      return response.data; // Returnează lista de produse
    } catch (error) {
      console.error("Eroare la obținerea produselor:", error.message); // Log eroarea
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk pentru adăugarea unui produs
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, thunkAPI) => {
    try {
      const response = await axios.post("/products", productData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk pentru actualizarea unui produs
export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async ({ id, updateData }, thunkAPI) => {
    try {
      const response = await axios.put(`/products/${id}`, updateData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk pentru ștergerea unui produs
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, thunkAPI) => {
    try {
      const response = await axios.delete(`/products/${productId}`);
      console.log("Produs șters:", response.data); // Log răspunsul serverului
      return productId; // Returnăm ID-ul produsului șters
    } catch (error) {
      console.error("Eroare la ștergerea produsului:", error.message); // Log eroarea
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Adăugare produs
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Stocăm produsele în starea locală
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.products = state.products || [];
      })
      // Actualizare produs
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (p) => p._id === action.payload._id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Ștergere produs
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((p) => p._id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
