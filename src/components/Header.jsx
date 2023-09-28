import React from 'react'
import './Header.css'
import shopifylogo from '../assets/shopifylogo.png'
import cartlogo from '../assets/cart.png'

const Header = (props) => {
  return (
    <header>
      <div id="logo">
        <img src={shopifylogo} alt="" />
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
        </ul>
        <a id='cartlogocont' href="#" 
        onClick={() => {
          props.setShowCart(!props.showcart)
        }}>Cart<img src={cartlogo} /></a>
      </nav>
    </header>
  )
}

export default Header
