import React from "react";
import '../styles/register.css';
import { Link } from "react-router-dom";

function Register() {
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
      <div height="89%">
        <h1>Let's Get Started !</h1>
        <p className="create">Create new account to access all features</p>
        {/* <!-- for name --> */}
        <div className="width-form-register">
          <label for="name-input" className="form-label">Name</label>
          <input type="text" className="form-control" id="name-input" placeholder="Name"/>
        </div>
        {/* <!-- for email --> */}
        <div className="width-form-register">
          <label for="email-input" className="form-label">Email address*</label>
          <input type="email" className="form-control" id="email-input" placeholder="Enter email address"/>
        </div>
        {/* <!-- for phone number --> */}
        <div className="width-form-register">
          <label for="phone-number-input" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone-number-input" placeholder="08xxxxxxxxxx"/>
        </div>
        {/* <!-- for create new password --> */}
        <div className="width-form-register">
          <label for="password-input" className="form-label">Create New Password</label>
          <input type="password" className="form-control" id="password-input" placeholder="Create New Password"/>
        </div>
        {/* <!-- for new password --> */}
        <div className="width-form-register">
          <label for="password-input" className="form-label">New Password</label>
          <input type="password" className="form-control" id="password-input" placeholder="New Password"/>
        </div>
        {/* <!-- sign up button --> */}
        <div className="d-grid">
          <button type="button" className="btn btn-primary btn-warning" style={{marginTop: "15px"}}>Register Account</button>
        </div>
        {/* <!-- login --> */}
        <p className="log-in">Already have account? <Link to="../login" style={{color: "#EFC81A"}}>Log in Here</Link></p>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Register;