import React, {useState} from 'react'
import logo from "../../assets/img/logo.png"
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

import './Header.css'

const Header = () => {
  const [isToggled, setIsToggled] = useState(false)

  const handleClick = () =>{
    setIsToggled(!isToggled)
  }
  return (
    <div>
      <header>
        <div className="container navbar">
          <div className="nav-left">
            <div className="nav-logo">
              <img src={logo} alt="" />
            </div>
            <ul className="nav-link">
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">Pages</a></li>
              <li><a href="">Contact us</a></li>
            </ul>
            <ul id={isToggled ? 'block' : 'hidden'} className="nav-links">
            <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Shop</a></li>
              <li><a href="">Pages</a></li>
              <li><a href="">Contact us</a></li>
              <h1 className='' onClick={handleClick}><FaTimes /></h1>
            </ul>

          </div>
          <div className="nav-right">
            <div className="nav-cart">
              <p><span><FaShoppingCart /></span> cart 0</p>
            </div>
            <h1 className='' onClick={handleClick}><FaBars /></h1>
          </div>
        </div>
      </header>
      <div className="content">
        </div>
      
    </div>
  )
}

export default Header
