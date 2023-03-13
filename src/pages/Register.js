import React, { useEffect, useState } from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isSamePass, setIsSamePass] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    const isLogin = profile?.profile?.payload;
    if (isLogin) {
      navigate("/");
    }
  }, [profile, navigate]);

  const registerHandle = () => {
    setIsLoading(true);
    if (password !== isSamePass) {
      setIsLoading(false);
      setIsError(true);
      setErrMsg("Confirm your password is wrong");
    } else {
      axios
        .post(`${process.env.REACT_APP_URL_BACKEND}/users/add`, {
          name,
          email,
          phone: phoneNumber,
          password,
        })
        .then((res) => {
          setIsError(false);
          setIsSuccess(true);
          setSuccessMsg("Register successful");

          setTimeout(() => {
            navigate("/login");
          }, 1700);
        })
        .catch((err) => {
          setIsSuccess(false);
          setIsError(true);
          setErrMsg(
            err?.response?.data?.message ??
              "System error, please try again later."
          );
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div id="register">
      <div className="row">
        <div className="col-6 bg-register">
          <div>
            <img
              className="stoveimg"
              src="./images/stove-logo.webp"
              alt="Stove Logo"
            />
            <p className="mrtext">R Food</p>
          </div>
        </div>
        <div className="col-6 register-form">
          <div className="reg-form" height="89%">
            <h1>Let's Get Started !</h1>
            <p className="create">Create new account to access all features</p>
            {isError ? (
              <div className="alert alert-danger" role="alert">
                {errMsg}
              </div>
            ) : null}
            {isSuccess ? (
              <div className="alert alert-success" role="alert">
                {successMsg}
              </div>
            ) : null}
            {/* <!-- for name --> */}
            <div className="width-form-register">
              <label htmlFor="name-input" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name-input"
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            {/* <!-- for email --> */}
            <div className="width-form-register">
              <label htmlFor="email-input" className="form-label">
                Email address*
              </label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="Enter email address"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            {/* <!-- for phone number --> */}
            <div className="width-form-register">
              <label htmlFor="phone-number-input" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone-number-input"
                placeholder="08xxxxxxxxxx"
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </div>
            {/* <!-- for create new password --> */}
            <div className="width-form-register">
              <label htmlFor="password-input" className="form-label">
                Create New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Create New Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {/* <!-- for new password --> */}
            <div className="width-form-register">
              <label htmlFor="password-input" className="form-label">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="New Password"
                onChange={(event) => setIsSamePass(event.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    registerHandle();
                  }
                }}
              />
            </div>
            {/* <!-- sign up button --> */}
            <div className="d-grid">
              <button
                type="button"
                className="btn btn-primary btn-warning"
                disabled={isLoading}
                onClick={registerHandle}
                style={{ marginTop: "15px" }}
              >
                {isLoading ? "Loading..." : "Register"}
              </button>
            </div>
            {/* <!-- login --> */}
            <p className="log-in text-center">
              Already have account?{" "}
              <Link to="../login" style={{ color: "#EFC81A" }}>
                Login Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
