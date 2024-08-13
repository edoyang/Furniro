import React, { useState, useEffect } from 'react';
import Product from "../Product";
import "./style.scss";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data.slice(0, 4));
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className={`products ${loading ? 'loading' : ''}`}>
            {loading ? (
                <>
                    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                </>
            ) : (
                products.map(product => (
                    <Product key={product._id} Id={product.id} Name={product.name} Description={product.description} Price={product.price} />
                ))
            )}
        </div>
    );
};

export default Products;
