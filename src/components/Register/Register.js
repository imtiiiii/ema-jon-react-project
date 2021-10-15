import React from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css'
const Register = () => {
    return (
        <div className="form">
            <div>
                <h2>Register here</h2>
                <label >Email:</label>
                <br />
                <input type="email" placeholder="alex02@gmail.com"></input>
                <br />
                <label >Password:</label>
                <br />
                <input type="password" placeholder="give your password"></input>
                <h4>Confirm password</h4>
                <input type="password" placeholder="re-enter your password"></input>
                <br />
                <button type="submit">Register</button>
                <h4>Or,</h4>
                <hr></hr>
                <button type="button" className="btn-cart">Register with Google</button>
                <div>
                    <h3>
                        <NavLink to="/login">Already have an account? Login</NavLink>
                    </h3>
                </div>
            </div>

        </div>
    );
};

export default Register;