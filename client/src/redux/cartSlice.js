import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isLoggedIn: false,
    username: null,
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    updateItemQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      if (item.quantity <= 0) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    setLogin: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.username = action.payload.username;
    },
  },
});

export const { addItem, removeItem, updateItemQuantity, clearCart, setLogin } = cartSlice.actions;

export default cartSlice.reducer;