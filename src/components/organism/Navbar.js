import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const loginAlert = () => {
    Swal.fire({
      icon: "error",
      title: "Login required !",
      confirmButtonText: "OK",
      confirmButtonColor: "#ffc720",
    });
  };

  const data = useSelector((state) => state.profile);

  const isLogin = data?.profile?.payload;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        return document
          .querySelector(".navbar")
          .classList.add("navbar-background");
      } else {
        document.querySelector(".navbar").classList.remove("navbar-background");
      }
    });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container container-xs-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {isLogin ? (
                <div style={{ display: "inline-flex" }}>
                  <li className="nav-item me-5">
                    <Link
                      className={`nav-link ${
                        window.location.pathname === "/" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item me-5">
                    <Link
                      className={`nav-link ${
                        window.location.pathname === "/add-recipe"
                          ? "active"
                          : ""
                      }`}
                      to="/add-recipe"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      Add Recipe
                    </Link>
                  </li>
                  <li className="nav-item me-5">
                    <Link
                      className={`nav-link ${
                        window.location.pathname === "/profile" ||
                        window.location.pathname === "/profile/saved-recipe" ||
                        window.location.pathname === "/profile/liked-recipe"
                          ? "active"
                          : ""
                      }`}
                      to="/profile"
                    >
                      Profile
                    </Link>
                  </li>
                </div>
              ) : (
                <div style={{ display: "inline-flex" }}>
                  <li className="nav-item me-5">
                    <Link
                      className={`nav-link ${
                        window.location.pathname === "/" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item me-5">
                    {/* <Link className="nav-link" onClick={alertLogin}>Add Recipe</Link> */}
                    <Link className="nav-link" onClick={loginAlert} to="#">
                      Add Recipe
                    </Link>
                  </li>
                  <li className="nav-item me-5">
                    <Link className="nav-link" onClick={loginAlert} to="#">
                      Profile
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>
          {isLogin ? (
            <div style={{ display: "flex", alignItems: "end" }}>
              <img
                className="online-logo"
                src="/images/online-logo.webp"
                alt="Online"
              />
              <img
                className="rounded-circle me-3 mt-2"
                src={isLogin?.photo}
                alt="Profile"
                style={{ width: "45px", zIndex: 0 }}
              />
              <Link className="log-out" to="/logout">
                <p>Logout</p>
              </Link>
            </div>
          ) : (
            <div className="button-logres col-lg-2 col-xs-5">
              <Link to="/login">
                <button
                  type="button"
                  className="btn btn-warning shadow-sm"
                  style={{ marginRight: "13px" }}
                >
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" className="btn btn-light shadow-sm">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
