import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
    const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
<div className="nav-logo">
    <img src={logo} alt="" />
    <p>SHOPPER</p>
</div>
<ul className="nav-menu">
    <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("unisex")}}><Link style={{ textDecoration: 'none' }} to='/unisex'>Unisex</Link>{menu==="unisex"?<hr/>:<></>}</li>
</ul>
<div className="nav-login-cart">
   <Link to='/LoginSignup'><button>Login</button></Link> 
    <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
    <div className="nav-cart-count">0</div>
</div>
    </div>
  )
}