import React from 'react'
import'./navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
const navbar = () => {
  return (
    <div className='navbar'>
         <div className='nav-logo'>
             <img src={logo} alt="" />
             <p>Shopsy</p>
         </div>
         <ul className='nav-menu'>
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>kids</li>
         </ul>
         <div className="nav-login-cart">
            <button>login</button>
            <img src={cart_icon} alt="" />
         </div>
    </div>
  )
}

export default navbar