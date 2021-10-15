import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {
    return (
        <div className="nav">
            <NavLink to="/shop">Shop</NavLink><NavLink to="/OrderReview">Order Review</NavLink><NavLink to="/inventory">Manage Inventory</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    );
};

export default Nav;