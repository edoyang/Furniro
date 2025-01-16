import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  updateItemQuantity,
  clearCart,
  toggleCart,
  closeCart,
} from "../../redux/cartSlice";
import "./style.scss";

import { loadStripe } from "@stripe/stripe-js";

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
      !event.target.closest(".product")
    ) {
      dispatch(closeCart());
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
  const server = import.meta.env.VITE_API_URL;

  const handlePayment = async () => {
    const stripe = await loadStripe(stripePublicKey);
    try {
      const response = await fetch(`${server}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const session = await response.json();

      if (!session.id) {
        throw new Error("Session ID not found");
      }

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error("Payment failed:", error.message);
      alert("There was an issue with your payment. Please try again.");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity + 1)
                  }>
                  +
                </button>
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity - 1)
                  }>
                  -
                </button>
                <button onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <div className="cart-finalize">
            <button onClick={handleClearCart}>Clear Cart</button>
            <button onClick={handlePayment}>Checkout</button>
            {/* <Link to="/checkout">Checkout</Link> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
