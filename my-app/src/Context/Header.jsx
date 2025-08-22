

import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { IoIosClose } from "react-icons/io";
import { NavLink } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext';
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../Context/CartContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { name, isLoggedIn } = useAuth()
  const { cartCount } = useCart()

  return (
    <header className="header shadow-md relative">
      <div className="container flex mx-auto py-4 px-4 justify-between items-center w-full">
        
        {/* Logo */}
        <div className="logo text-2xl font-bold text-green-800">
          <h1>Logo</h1>
          <p>{name}</p>
        </div>

        {/* Navbar Links */}
        <nav className='nav-bar hidden md:block'>
          <ul className='flex space-x-6 font-medium text-gray-700'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            {isLoggedIn ? (
              <li><NavLink to="/logout">Logout</NavLink></li>
            ) : (
              <>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
              </>
            )}
          </ul>
        </nav>

        {/* Cart Icon */}
        <div className="relative flex items-center gap-3">
          <FaShoppingCart className="text-2xl text-green-800 cursor-pointer" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="bars md:hidden">
          {menuOpen ? (
            <IoIosClose className='text-2xl' onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
