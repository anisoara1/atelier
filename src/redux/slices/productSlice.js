import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000/";

// Async thunk pentru adăugarea unui produs
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData, thunkAPI) => {
    try {
      console.log("Trimitere date către server:", productData); // Log datele trimise
      const response = await axios.post("/products", productData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Răspuns server:", response.data); // Log răspunsul serverului
      return response.data; // Returnează produsul adăugat
    } catch (error) {
      console.error("Eroare la adăugarea produsului:", error.message); // Log eroarea
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
      .addCase(addProduct.pending, (state) => {
        console.log("Pending addProduct state:", state); // Loghează starea Redux
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        console.log("Fulfilled addProduct state:", state);
        state.loading = false;
        state.products.push(action.payload); // Add the new product to the array
      })
      .addCase(addProduct.rejected, (state, action) => {
        console.log("Rejected addProduct state:", state);
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
