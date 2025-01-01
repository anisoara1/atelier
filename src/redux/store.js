import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice"; // Asigură-te că ai un slice pentru autentificare

const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
  },
});

export default store;
