import React from 'react';
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';

const Checkout = () => {
    const cartItems = useSelector(state => state.cart.items);
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const stripePublicKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
    const server = import.meta.env.VITE_API_URL;

    const handlePayment = async () => {
        const stripe = await loadStripe(stripePublicKey);
        try {
            const response = await fetch(`${server}/checkout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ items: cartItems })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const session = await response.json();

            if (!session.id) {
                throw new Error('Session ID not found');
            }

            const result = await stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (result.error) {
                console.error(result.error.message);
                throw new Error(result.error.message);
            }
        } catch (error) {
            console.error('Payment failed:', error.message);
            alert('There was an issue with your payment. Please try again.');
        }
    };

    return (
        <div>
            <h1>Checkout</h1>
            <div>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map(item => (
                        <div key={item.id} style={{ margin: "10px 0" }}>
                            <h5>{item.name}</h5>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ${item.price}</p>
                            <p>Subtotal: ${item.price * item.quantity}</p>
                        </div>
                    ))
                )}
                <h2>Total: ${total}</h2>
                <button onClick={handlePayment}>Proceed to Payment</button>
            </div>
        </div>
    );
};

export default Checkout;