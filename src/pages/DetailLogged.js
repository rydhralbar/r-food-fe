import React from "react";
import '../styles/detaillogged.css';
import { Link } from "react-router-dom";
import Footer from "../components/organism/Footer";
import Navbar from "../components/organism/Navbar";

function DetailLogged() {
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
    <div id="detail-logged-page">
      
    {/* <!-- navbar start --> */}
      <Navbar />
    {/* <!-- navbar end --> */}

    <section id="recipe" style={{display: "flex", justifyContent: "center"}}>
      <div>
        {/* <!-- title recipe --> */}
        <h1>Risotto</h1>
        <img className="title-img" src={require("../images/risotto.webp")} alt="Title"/>

        {/* <!-- ingredients --> */}
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
          <Link to="https://youtu.be/NKtR3KpS83w" target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-primary btn-video1">
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
                  <iframe title="videoFrame" src="https://youtube.com/embed/NKtR3KpS83w" style={{width: "50rem", height: "25rem", display: "block", margin: "auto"}}></iframe>
                </div>
              </div>
            </div>
          </div>

          <Link to="https://youtu.be/NKtR3KpS83w" target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </button>
          </Link>

          <Link to="https://youtu.be/NKtR3KpS83w" target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </button>
          </Link>

          <Link to="https://youtu.be/NKtR3KpS83w" target="_blank" rel="noreferrer">
            <button type="button" className="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
              </svg>
            </button>
          </Link>
        </div>

        <div className="comment mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comment :"></textarea>
          <button type="button" className="btn btn-warning">Send</button>
        </div>
        
        {/* <!-- user comment --> */}
        <div className="user-comment">
          <h2>Comment</h2>
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

    </section>

    {/* <!-- footer start --> */}
    <Footer />
    {/* <!-- footer end --> */}

    </div>
  )
}

export default DetailLogged;