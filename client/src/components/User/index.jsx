import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../../redux/cartSlice'; // Ensure the path to cartSlice is correct
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';

const User = () => {
    const isLoggedIn = useSelector(state => state.cart.isLoggedIn);
    const navigate = useNavigate();
    const username = useSelector(state => state.cart.username);
    const dispatch = useDispatch();
    const [className, setClassName] = useState('');

    const handleLogout = () => {
        dispatch(setLogin({ isLoggedIn: false, username: null }));
        navigate('/');
    };

    const toggleActiveClass = () => {
        if (className === '') {
            setClassName('active');
        } else if (className === 'active') {
            setClassName('inactive');
        } else {
            setClassName('active');
        }
    };

    return (
        <div className="user">
            <img onClick={toggleActiveClass} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="User Icon" />
            {isLoggedIn ? (
                <div className={`${className} user-bar`}>
                    <p>{username}</p>
                    <p>Settings</p>
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            ) : (
                <div className={`${className} user-bar`}>
                    <Link to="/login">Log In</Link>
                    <button>Sign Up</button>
                </div>
            )}
        </div>
    )
}

export default User;
