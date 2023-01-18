import React from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [isSamePass, setIsSamePass] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}`)
      .then((res) => console.log(res));
  }, []);

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
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="New Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {/* <!-- sign up button --> */}
            <div className="d-grid">
              <button
                type="button"
                className="btn btn-primary btn-warning"
                disabled={isLoading}
                onClick={() => {
                  setIsLoading(true)
    
                  axios.post(`${process.env.REACT_APP_URL_BACKEND}/users`, 
                  {
                    name,
                    email,
                    phone: phoneNumber,
                    password,
                  })
                  .then((res) => {
                    navigate("/login")
                  })
                  .catch((err) => {
                    setIsError(true);
                    console.log({err: err.response})
                    setErrMsg(err?.response?.data?.message ?? "System error, please try again later.")
                  })
                  .finally(() => setIsLoading(false))
                }}
                style={{ marginTop: "15px" }}
              >
                {isLoading ? "Loading..." : "Register"}
              </button>
            </div>
            {/* <!-- login --> */}
            <p className="log-in">
              Already have account?{" "}
              <Link to="../login" style={{ color: "#EFC81A" }}>
                Log in Here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
