import React from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
  }

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}`)
      .then((res) => console.log(res));

    const isLogin = localStorage.getItem("isLogin");
    const token = localStorage.getItem("token")

    if(isLogin && token){
      navigate("/")
    }
  },[]);

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

            {isError ? (<div className="alert alert-danger" role="alert">
              { errMsg }
            </div>) : null}  

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
              />
            </div>
            {/* <!-- check button --> */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="agreement"
                value=""
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
                onClick={() => {
                  setIsLoading(true)
                  axios.post(`${process.env.REACT_APP_URL_BACKEND}/auth/login`, 
                  {
                    email,
                    password,
                  })
                  .then((res) => {
                    localStorage.setItem("isLogin", "true");
                    localStorage.setItem("token", res?.data?.data?.token ?? "")
                    localStorage.setItem("profile", JSON.stringify(res?.data?.data?.profile) ?? "")
                    navigate("/")
                  })
                  .catch((err) => {
                    setIsError(true);
                    setErrMsg(err?.response?.data?.message ?? "System error, please try again later.")
                  })
                  .finally(() => setIsLoading(false))
                }}
                style={{ width: "100%" }}
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
            {/* <!-- forgot password --> */}
            <Link className="forgot-pass" to="../forgot">
              Forgot password ?
            </Link>
            {/* <!-- sign up --> */}
            <p className="sign-up">
              Don't have an account? <Link to="../signup"> Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
