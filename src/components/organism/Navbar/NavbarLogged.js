import React from "react";
import { Link } from "react-router-dom";

const NavbarLogged = () => {
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
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav" style={{marginTop: "7px"}}>
          <ul className="navbar-nav">
            <li className="nav-item me-5">
              <Link className="nav-link active me-5" aria-current="page" to="#" style={{  fontWeight: 500, textDecoration: "underline"}}>Home</Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/add-recipe">Add Recipe</Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="../profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div style={{display: "flex", alignItems: "end"}}>
          <img className="online-logo" src={require("../../../images/online-logo.webp")} alt="Online"/>
          <img className="rounded-circle me-3 mt-2" src={require("../../../images/hydra-black-red.webp")} alt="Profile" style={{width: "45px", zIndex: 0}}/>
          <Link className="log-out" to="../"><p>Log Out</p></Link>
        </div>
      </div>
    </nav>
  )
}

export default NavbarLogged;