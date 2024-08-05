import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

const Product = ({ Name, Description, Price, Id }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem({ id: Id, name: Name, price: Price, quantity: 1 }));
    };

    return (
        <div className="product" key={Id}>
            <div className="image-container">
                <img src="https://via.placeholder.com/150" alt={Name} />
            </div>
            <div className="product-details">
                <h3>{Name}</h3>
                <p>{Description}</p>
                <p>${Price}</p>
                <p>ID: {Id}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;