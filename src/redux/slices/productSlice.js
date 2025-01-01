import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

// Thunk asincron pentru adăugarea unui produs
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("name", productData.name);
      formData.append("price", productData.price);
      formData.append("description", productData.description);
      formData.append("category", productData.category);
      if (productData.image) {
        formData.append("image", productData.image); // Atașează fișierul imagine
      }

      const response = await axios.post("/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data; // Returnează produsul salvat
    } catch (error) {
      console.error("Error adding product:", error);
      return thunkAPI.rejectWithValue(
        error.response?.data || "Eroare la adăugarea produsului"
      );
    }
  }
);

// Slice pentru produse
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
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload); // Adaugă produsul la lista existentă
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "An unknown error occurred";
      });
  },
});

export default productSlice.reducer;
