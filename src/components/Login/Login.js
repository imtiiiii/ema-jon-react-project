import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import './Login.css'
import useAuth from '../../Hooks/useAuth'
const Login = () => {
    const { googleLogin, userInfo } = useAuth();
    let previousLocation = useLocation();
    const history = useHistory();
    const redirectUrl = previousLocation.state?.from || '/'

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                history.push(redirectUrl);
            }).catch((error) => {

            });
    }
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
                    <button type="button" className="btn-cart" onClick={handleGoogleLogin}>Login with Google</button>
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