import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
export const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
  return (
    <div className='navbar'>
<div className="nav-logo">
    <img src={logo} alt="" />
    <p>SHOPPER</p>
</div>
<ul className="nav-menu">
    <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("unisex")}}><Link style={{ textDecoration: 'none' }} to='/unisex'>Unisex</Link>{menu==="unisex"?<hr/>:<></>}</li>
</ul>
<div className="nav-login-cart">
   <Link to='/LoginSignup'><button>Login</button></Link> 
    <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
    <div className="nav-cart-count">{getTotalCartItems()}</div>
</div>
    </div>
  )
}
