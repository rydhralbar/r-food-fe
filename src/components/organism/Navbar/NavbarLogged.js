import React from "react";
import { Link } from "react-router-dom";

const NavbarLogged = () => {
  const [ profile, setProfile ] = React.useState(localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")) : null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 500) {
        return document.querySelector(".navbar").classList.add("navbar-background");
      } else {
        document
          .querySelector(".navbar")
          .classList.remove("navbar-background");
      }
    });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav" style={{marginTop: "7px"}}>
            <ul className="navbar-nav">
              <li className="nav-item me-5">
                <Link className={`nav-link ${window.location.pathname === "/home" ? "active" : "" }`} aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item me-5">
                <Link className={`nav-link ${window.location.pathname === "/add-recipe" ? "active" : "" }`} to="/add-recipe">Add Recipe</Link>
              </li>
              <li className="nav-item me-5">
                <Link className={`nav-link ${window.location.pathname === "/profile" || window.location.pathname === "/profile/saved-recipe" || window.location.pathname === "/profile/liked-recipe" ? "active" : "" }`} to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          <div style={{display: "flex", alignItems: "end"}}>
            <img className="online-logo" src={require("../../../images/online-logo.webp")} alt="Online"/>
            <img className="rounded-circle me-3 mt-2" src={`${profile.photo}`} alt="Profile" style={{width: "45px", zIndex: 0}}/>
            <Link className="log-out" to="../"><p>Log Out</p></Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavbarLogged;