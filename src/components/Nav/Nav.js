import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Nav.css"


const Nav = () => {
    const { userInfo, logout } = useAuth();
    // console.log(userInfo);
    return (
        <div className="nav">
            <NavLink to="/shop">Shop</NavLink><NavLink to="/OrderReview">Order Review</NavLink><NavLink to="/inventory">Manage Inventory</NavLink>
            {
                userInfo ?
                    <NavLink to="/login" onClick={logout}>{userInfo.displayName} Logout</NavLink>
                    :
                    <NavLink to="/login">Login</NavLink>
            }

        </div>
    );
};

export default Nav;