import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css'
const Register = () => {
    const { googleLogin } = useAuth();
    //const history = useHistory();
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {

            }).catch((error) => {

            });
    }
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
                <button type="button" className="btn-cart" onClick={handleGoogleLogin}>Register with Google</button>
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