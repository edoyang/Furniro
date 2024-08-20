import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    isLoggedIn: false,
    username: null,
    openCart: '',
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        // item.quantity += action.payload.quantity;
        item.quantity += 1;
      } else {
        state.items.push(action.payload);
      }
      state.openCart = 'active';
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
    toggleCart: (state) => {
      state.openCart = state.openCart === 'active' ? '' : 'active';
    },
    closeCart: (state) => {
      state.openCart = '';
    },
  },
});

export const { addItem, removeItem, updateItemQuantity, clearCart, setLogin, openCart, toggleCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;