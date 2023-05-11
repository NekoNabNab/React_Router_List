import React from 'react'
import { NavLink } from "react-router-dom";
import "../css/Sidebar.css"
import Logo from "../img/logo.jpg"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="nav-brand">
            <img 
            src={Logo}
            alt="" 
            width="140px"
            className="brand-image"
            />
            {/* <p className="desc-brand pink">Study Cafe & Eatery</p> */}
        </div>
        <div className="nav-menu">
            <ul>
                <li><NavLink to="/dashboard" >Dashboard</NavLink></li>
                <li><NavLink to="/borrow" >List Borrow</NavLink></li>
                <li><NavLink to="/book" >List Books</NavLink></li>
            </ul>
        </div>
        <div className="account">
            <ul>
                <li className='user'>Nabila Rozan | Admin</li>
                <li className='logout'><NavLink to="/" >Logout</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar