import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateItemQuantity, clearCart, toggleCart, closeCart } from '../../redux/cartSlice';
import './style.scss';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const openCart = useSelector((state) => state.cart.openCart);
  const dispatch = useDispatch();
  const cartRef = useRef(null);

  const handleRemoveItem = (productId) => {
    dispatch(removeItem({ id: productId }));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateItemQuantity({ id: productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleToggleCart = () => {
    dispatch(toggleCart());
  };

  const handleClickOutside = (event) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(event.target) &&
      !event.target.closest('.product')
    ) {
      dispatch(closeCart());
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`cart ${openCart}`} ref={cartRef}>
      <img src="cart.svg" alt="cart" onClick={handleToggleCart} />
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          cartItems.map((item) => (
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
          ))
        )}
        {cartItems.length > 0 &&
          <div className='cart-finalize'>
            <button onClick={handleClearCart}>Clear Cart</button>
            <Link to="/checkout">Checkout</Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Cart;
