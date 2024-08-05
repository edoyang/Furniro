import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItemQuantity, clearCart } from '../../redux/cartSlice';
import './style.scss';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (productId) => {
    dispatch(removeItem({ id: productId }));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateItemQuantity({ id: productId, quantity }));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div className="item" key={item.id}>
            <p className="item-name">{item.name}</p>
            <p className="item-price">${item.price}</p>
            <p className="item-id">ID: {item.id}</p>
            <div className="buttons">
                <p className="item-qty">Quantity: {item.quantity}</p>
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
        </div>
      ))}
        <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;