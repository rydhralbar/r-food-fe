import React from "react";

const NavbarGuest = () => {
  function loginAlert() {
    alert("Login required!")
  }

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
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
      <div className="container container-xs-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-5">
              <Link className="nav-link active" aria-current="page" href="#"   style={{fontWeight: 500, textDecoration: "underline"}}>Home</Link>
            </li>
            <li className="nav-item me-5">
              {/* <Link className="nav-link" onClick={alertLogin}>Add Recipe</Link> */}
              <Link className="nav-link" onClick={loginAlert}>Add Recipe</Link>
            </li>
            <li className="nav-item me-5">
              {/* <Link className="nav-link" onClick={alertLogin}>Profile</Link> */}
              <Link className="nav-link" onClick={loginAlert}>Profile</Link>
            </li>
          </ul>
        </div>
        <div className="button-logres col-lg-2 col-xs-5">
          <Link to="/login">
            <button type="button" className="btn btn-warning shadow-sm" style={{marginRight: "13px"}}>
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button type="button" className="btn btn-light shadow-sm">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavbarGuest;