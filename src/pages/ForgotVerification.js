import React from 'react';
import "../styles/forgot.css";
import { Link } from "react-router-dom"

function ForgotVerification() {
  return (
    <div style={{overflow: "hidden"}}>
      <div className="row">
        <div className="col-6 bg-login">
          <div>
           <img className="stoveimg" src="/images/stove-logo.webp" alt='Stove'/>
            <p className="mrtext">R Food</p>
          </div>
        </div>
        <div className="col-6 forgot-form">
          <div>
        {/* <!-- for code --> */}
        <div className="mb-3 width-form-forgot">
          <label htmlFor="email-input" className="form-label">Code 6 Digit</label>
          <input type="tel" className="form-control" id="email-input" placeholder="Enter code" maxlength="6"/>
        </div>
        {/* <!-- login button --> */}
        <div className="d-grid">
          <Link to="/create-password"><button type="button" className="btn btn-primary btn-warning" style={{width: "100%"}}>Reset Password</button></Link>
        </div>
       </div>
       </div>
      </div>
    </div>
  )
  }

export default ForgotVerification;