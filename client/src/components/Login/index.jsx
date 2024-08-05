import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../../redux/cartSlice'; // Ensure this path is correct

const Login = () => {
    const isLoggedIn = useSelector((state) => state.cart.isLoggedIn);
    const username = useSelector((state) => state.cart.username); // Get username from Redux state
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prevCredentials => ({
            ...prevCredentials,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, credentials);
            console.log('Login successful:', response.data);
            // Dispatch the login state with username
            dispatch(setLogin({ isLoggedIn: true, username: response.data.user.username }));
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            dispatch(setLogin({ isLoggedIn: false, username: null })); // Reset on error
        }
    }

    return (
        <div className="login-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;