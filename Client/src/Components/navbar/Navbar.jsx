import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import newlogo from '../assets/newlogo.png';
import axios from 'axios';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('https://ecommerce-mern-stack-okqn.onrender.com/cartitems');
      if (Array.isArray(response.data)) {
        setCartCount(response.data.length);
      } else {
        console.error('Invalid data received:', response);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (menuName) => {
    setMenu(menuName);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={newlogo} alt='logo.png' />
          <p>Shoptical</p>
        </div>
        <div className='nav-menu-icon' onClick={handleMenuClick}>
          &#9776;
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <li onClick={() => handleNavItemClick("shop")}><Link to='/' style={{ textDecoration: "none", color: "orange" }}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
          <li onClick={() => handleNavItemClick("mens")}><Link to='/mens' style={{ textDecoration: "none", color: "orange" }}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
          <li onClick={() => handleNavItemClick("womens")}><Link to='/womens' style={{ textDecoration: "none", color: "orange" }}>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
          <li onClick={() => handleNavItemClick("kids")}><Link to='/kids' style={{ textDecoration: "none", color: "orange" }}>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
          <Link onClick={() => handleNavItemClick("cart")} to='/cart'><img src={cart_icon} alt='cart-icon.png' /></Link>
          <div className="nav-cart-count">{cartCount}</div>
        </ul>
        <div className="nav-login-cart">
          {/* <Link to='/login'><button>Login</button></Link> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
