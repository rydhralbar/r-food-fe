import React from "react";
import '../styles/login.css';
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  return (
  <div style={{overflow: "hidden"}}>
      <div className="row">
    <div className="col-6 bg-login">
      <div>
        <img className="stoveimg" src="./images/stove-logo.webp" alt="Stove Logo"/>
        <p className="mrtext">R Food</p>
      </div>
    </div>
    <div className="col-6 login-form">
      <div>
        <h1>Welcome</h1>
        <p>Log in into your exiting account</p>
        {/* <!-- for email --> */}
        <div className="mb-3 width-form-login">
          <label for="email-input" className="form-label">E-mail</label>
          <input type="email" className="form-control" id="email-input" placeholder="E-mail"/>
        </div>
        {/* <!-- for password --> */}
        <div className="mb-3 width-form-login">
          <label for="password-input" className="form-label">Password</label>
          <input type="password" className="form-control" id="password-input" placeholder="Password"/>
        </div>
        {/* <!-- check button --> */}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="agreement" value="" />
          <label className="form-check-label" for="flexCheckDefault">I agree to terms & conditions</label>
        </div>
        {/* <!-- login button --> */}
        <div className="d-grid">
          <Link to="../home"><button type="button" className="btn btn-primary btn-warning" style={{width: "100%"}}>Log in</button></Link>
        </div>
        {/* <!-- forgot password --> */}
        <Link className="forgot-pass" to="../forgot">Forgot password ?</Link>
        {/* <!-- sign up --> */}
        <p className="sign-up">Don't have an account? <Link to="../signup"> Sign up</Link></p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login;