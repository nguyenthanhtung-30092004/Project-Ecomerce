import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { cartItems } = state;
      const { payload } = action;
      const isCheckProduct = cartItems.some((item) => item.id === payload.id);
      if (isCheckProduct) {
        const updateCarts = cartItems.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        return {
          ...state,
          cartItems: [...updateCarts],
        };
      }
      return {
        ...state,
        cartItems: [...cartItems, payload],
      };
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const { cartItems } = state;
      const updateCarts = cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: [...updateCarts],
      };
    },

    removeCart: (state, action) => {
      const { id } = action.payload;
      const { cartItems } = state;
      const updateCarts = cartItems.filter((item) => item.id !== id);
      return {
        ...state,
        cartItems: [...updateCarts],
      };
    },
  },
});

export const { addToCart, decrementQuantity, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
