import React from "react";
import "../styles/forgot.css";
import { Link } from "react-router-dom";

const CreateNewPassword = () => {
  const successAlert = () => {
    alert("New password created successfully")
  }

  return (
    <div style={{overflow: "hidden"}}>
        <div className="row">
    <div className="col-6 bg-login">
      <div>
        <img className="stoveimg" src="./images/stove-logo.webp" alt="Stove"/>
        <p className="mrtext">R Food</p>
      </div>
    </div>
    <div className="col-6 login-form">
      <div>
        {/* <!-- for new password --> */}
        <div className="mb-3 width-form-forgot">
          <label htmlFor="email-input" className="form-label">New password</label>
          <input type="email" className="form-control" id="email-input" placeholder="Enter new password"/>
        </div>
        {/* <!-- for new password --> */}
        <div className="mb-3 width-form-forgot">
          <label htmlFor="password-input" className="form-label">Confirm New password</label>
          <input type="password" className="form-control" id="password-input" placeholder="Confirm new password"/>
        </div>
        {/* <!-- check button --> */}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="agreement" value="" />
          <label className="form-check-label" htmlFor="flexCheckDefault">I agree with the new password</label>
        </div>
        {/* <!-- confirm button --> */}
        <div className="d-grid">
          <Link onClick={successAlert} to="/login"><button type="button" className="btn btn-primary btn-warning" style={{width: "100%"}}>Confirm</button></Link>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default CreateNewPassword;