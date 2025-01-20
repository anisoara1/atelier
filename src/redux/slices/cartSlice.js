export const addToCart = (product) => ({
  type: "ADD_TO_CART",
  payload: product,
});

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        // Actualizăm cantitatea produsului existent
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? { ...x, quantity: x.quantity + 1 } : x
          ),
        };
      } else {
        // Adăugăm produsul cu cantitatea inițială 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, quantity: 1 }],
        };
      }
    default:
      return state;
  }
};
