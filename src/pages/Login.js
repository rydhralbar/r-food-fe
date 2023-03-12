import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import * as profileReducer from "../store/reducer/profile";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckedBox, setIsCheckedBox] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (isCheckedBox !== true) {
      agreement();
    } else {
      setIsLoading(true);
      axios
        .post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`, {
          email,
          password,
        })
        .then((res) => {
          dispatch(profileReducer.setProfile(res?.data?.data?.profile));
          dispatch(profileReducer.setToken(res?.data?.data?.token));
          dispatch(profileReducer.setIsLogin(true));

          setIsError(false);
          setIsSuccess(true);
          setSuccessMsg("Login successful");

          setTimeout(() => {
            navigate("/");
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

  const maintenance = () => {
    Swal.fire({
      icon: "error",
      title: "This feature is currently under maintenance !",
      confirmButtonText: "OK",
      confirmButtonColor: "#ffc720",
    });
  };

  const agreement = () => {
    Swal.fire({
      icon: "error",
      title: "You must agree to the terms and conditions of the agreement !",
      confirmButtonText: "OK",
      confirmButtonColor: "#ffc720",
    });
  };

  const profile = useSelector((state) => state.profile);
  useEffect(() => {
    const isLogin = profile?.data?.payload;
    const token = profile?.id?.payload;

    if (isLogin && token) {
      navigate("/");
    }
  }, [profile, navigate]);

  return (
    <div id="login">
      <div className="row">
        <div className="col-lg-6 bg-login">
          <div>
            <img
              className="stoveimg"
              src="./images/stove-logo.webp"
              alt="Stove Logo"
            />
            <p className="mrtext">R Food</p>
          </div>
        </div>
        <div className="col-lg-6 col-xs-12 login-form">
          <div>
            <h1>Welcome</h1>
            <p>Log in into your exiting account</p>

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

            {/* <!-- for email --> */}
            <div className="mb-3 width-form-login">
              <label htmlFor="email-input" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="E-mail"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            {/* <!-- for password --> */}
            <div className="mb-3 width-form-login">
              <label htmlFor="password-input" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit();
                  }
                }}
              />
            </div>
            {/* <!-- check button --> */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreement"
                value=""
                onChange={() => setIsCheckedBox(!isCheckedBox)}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I agree to terms & conditions
              </label>
            </div>
            {/* <!-- login button --> */}
            <div className="d-grid">
              <button
                type="submit"
                onKey
                className="btn btn-primary btn-warning"
                disabled={isLoading}
                onClick={handleSubmit}
                style={{ width: "100%" }}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
            {/* <!-- forgot password --> */}
            <p className="forgot-pass" onClick={maintenance}>
              Forgot password ?
            </p>
            {/* <!-- sign up --> */}
            <p className="sign-up">
              Don't have an account? <Link to="../signup"> Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
