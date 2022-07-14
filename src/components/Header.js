import React, { useState, useEffect} from "react";
import  ReactDOM  from "react";
import { NavLink } from "react-router-dom";
import './Header.css';




const Header = () => {
    
    return (
        <header>
            <h1>Stranger's Things</h1>
                <div className="navbar">
                    <h3>Home</h3>
                    <h3>Posts</h3>
                    <NavLink to="/login" activeClassName="current">Login</NavLink>
                </div>
            
        </header>
)}

export default Header;