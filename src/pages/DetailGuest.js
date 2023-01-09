import React from "react";
import '../styles/detailguest.css';
import { Link } from "react-router-dom";

function DetailGuest() {
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
            {/* <!-- navbar start --> */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container container-xs-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-5">
                <Link className="nav-link active" aria-current="page" to="/" style={{fontWeight: 500, textDecoration: "underline"}}>Home</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" onClick={loginAlert}>Add Recipe</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" onClick={loginAlert}>Profile</Link>
              </li>
            </ul>
          </div>
          <div className="button-logres col-lg-2 col-xs-5">
            <Link to="../login">
              <button type="button" className="btn btn-warning shadow-sm" style={{marginRight: "13px"}}>
                Log In
              </button>
            </Link>
            <Link to="../signup">  
              <button type="button" className="btn btn-light shadow-sm">
                Register
              </button>
            </Link>
          </div>
        </div>
      </nav>
      {/* <!-- navbar end --> */}

      <section id="recipe" style={{display: "flex", justifyContent: "center"}}>
      <div>
        {/* <!-- title recipe --> */}
        <h1>Risotto</h1>
        <img className="title-img" src={require("../images/risotto.webp")} alt="Risotto"/>

        {/* <!-- ingridients --> */}
        <h2>Ingredients</h2>
        <p>
          - 4 C. Low-Sodium Chicken Broth <br />
          - 3 C. Water <br />
          - 4 Tbsp Butter, Divided <br />
          - 1 Small yellow onion, finely chopped <br /> 
          - 2 Cloves Garlic, Minced <br />
          - 1 1/2 C. Arborio Rice <br />
          - Kosher Salt <br />
          - 1/4 C. Dry White Wine <br />
          - 1 Tbsp Fresh Lemon Juice <br />
          - 1 C. Freshly Grated Parmesan Cheese, Plus More For Serving <br />
          - Freshly Ground Black Pepper <br />
          - 2 Tbsp Chopped Chives <br />
          - 2 Tbsp Finely Chopped Basil
        </p>

        {/* <!-- Video steps --> */}
        <h2>Video Step</h2>
        <div className="videostep">
          <Link to="https://youtu.be/NKtR3KpS83w" target="_blank">
            <button type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </button>
          </Link>

          <button type="button" className="btn btn-primary btn-video2" data-bs-toggle="modal" data-bs-target="#modalVideo">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
            </svg>
          </button>
          
          {/* <!-- Modal --> */}
          <div className="modal fade" id="modalVideo" tabindex="-1" aria-labelledby="modalVideoLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title fs-5" id="modalVideoLabel">Risotto</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <iframe title="Frame Video" src="https://youtube.com/embed/NKtR3KpS83w" style={{width: "50rem", height: "25rem", display: "block", margin: "auto"}}></iframe>
                </div>
              </div>
            </div>
          </div>

          <Link to="https://youtu.be/NKtR3KpS83w" target="_blank">
            <button type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </button>
          </Link>

          <Link to="https://youtu.be/NKtR3KpS83w" target="_blank">
            <button type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </button>
          </Link>

          <Link to="https://youtu.be/NKtR3KpS83w" target="_blank">
            <button type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </button>
          </Link>
        </div>

        <div className="comment mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comment :"></textarea>
          <Link onClick={loginAlert}><button type="button" className="btn btn-warning">Send</button></Link>
        </div>
        
        {/* <!-- user comment --> */}
        <div className="user-comment">
          <h2 className="comment-text">Comment</h2>
          <div>
            <div className="user">
              <img className="rounded-circle" src={require("../images/garneta-sharina.webp")} style={{marginTop: "25px"}} alt="Profile"/>
              <div style={{marginBottom: "27px"}}>
                <h3>Garneta Sharina</h3>
                <p>"This is the best recipe I've ever seen"</p>
              </div>
            </div>

            <div className="user">
              <img className="rounded-circle" src={require("../images/prof-x.webp")} alt="Profile"/>
              <h3>Chef X</h3>
              <p>"Good"</p>
            </div>
          </div>
      </div>
      </div>

      </section>

      {/* <!-- footer start --> */}
      <footer id="footer-detail">
      <div>
        <h2>Eat, Cook, Repeat</h2>
        <p>Share Your Best Recipe By Uploading Here !</p>

        <div className="footer-link">
          <p>Copyright &#169 Riyadh Ryan Albar, 2022. All Rights Reserved.</p>
        </div>
      </div>
      </footer>
      {/* <!-- footer end --> */}
    </div>
  )
}

export default DetailGuest;