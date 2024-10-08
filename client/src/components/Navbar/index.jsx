import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import Cart from '../Cart'

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState('')

    const handleHamburger = () => {
        setOpenNavbar(openNavbar === '' ? 'open' : '')
    }

  return (
    <div className={`navbar ${openNavbar}`}>

        <div className='row'>
            <input type="checkbox" name="hamburger" id="hamburger" />
            <label onClick={handleHamburger} className="hamburger" htmlFor="hamburger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </div>


        <div className="left">
            <Link to="/"><h1 className="logo">Furniro</h1></Link>

            <div className="nav-links">
                <div className="dropdown">
                    <p>Products</p>
                    <div className="dropdown-content">
                        <a href="#">Chairs</a>
                        <a href="#">Tables</a>
                        <a href="#">Beds</a>
                        <a href="#">Sofas</a>
                        <a href="#">Cupboards</a>
                    </div>
                </div>
                <div className="dropdown">
                    <p>Rooms</p>
                    <div className="dropdown-content">
                        <a href="#">Living Room</a>
                        <a href="#">Bedroom</a>
                        <a href="#">Dining Room</a>
                        <a href="#">Study Room</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="search-bar">
            <label htmlFor="search">
                <img src="mirror.svg" alt="search" />
            </label>
            <input type="text" placeholder="Search for products" id='search' name='search' />

            <div className="search-result"></div>
        </div>

        <div className="right">

            <img src="wish.svg" alt="wishlist" />

            <Cart />

            <img src="user" alt="user" />

        </div>

    </div>
  )
}

export default Navbar