import React from 'react';
import "./Header.css"
import logo from "../../images/logo.png";
import Nav from '../Nav/Nav';
const Header = () => {
    return (
        <header>
            <div className="header-img">
                <img src={logo} alt="website logo" />
            </div>
            <nav>
                {
                    <Nav></Nav>
                }
            </nav>
        </header>
    );
};

export default Header;