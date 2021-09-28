import React from 'react';
import "./Nav.css"

const Nav = () => {
    return (
        <div className="nav">
            <a href="/shop">Shop</a><a href="/orders">Order Review</a><a href="/inventory">Manage Inventory</a>
        </div>
    );
};

export default Nav;