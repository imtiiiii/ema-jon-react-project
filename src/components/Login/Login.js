import React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className="form">
            <div>
                <form>
                    <h2>Please login first</h2>
                    <label >Email:</label>
                    <br />
                    <input type="email" placeholder="alex02@gmail.com"></input>
                    <br />
                    <label >Password:</label>
                    <br />
                    <input type="password"></input>
                    <br />
                    <button type="submit" >Login</button>
                    <h4>Or,</h4>
                    <hr></hr>
                    <button type="button" className="btn-cart">Login with Google</button>
                    <div>
                        <h3>
                            <NavLink to="/register">New to ema-john? Register here</NavLink>
                        </h3>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;