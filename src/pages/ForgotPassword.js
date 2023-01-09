import React from "react";
import "../styles/forgot.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div style={{overflow: "hidden"}}>
     <div className="row">
        <div className="col-6 bg-login">
          <div>
            <img className="stoveimg" src="./images/stove-logo.webp" alt="Stove"/>
            <p className="mrtext">R Food</p>
          </div>
        </div>
        <div className="col-6 forgot-form">
          <div>
            <h1>Forgot Password?</h1>
            <p>We just need your registered e-mail address</p>
            <p>to send your password resend</p>
            {/* <!-- for email --> */}
            <div className="mb-3 width-form-forgot">
              <label for="email-input" className="form-label">E-mail</label>
              <input type="email" className="form-control" id="email-input" placeholder="E-mail"/>
            </div>
            {/* <!-- login button --> */}
            <div className="d-grid">
              <Link to="./verification"><button type="button" className="btn btn-primary btn-warning" style={{width: "100%"}}>Send E-mail</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword;