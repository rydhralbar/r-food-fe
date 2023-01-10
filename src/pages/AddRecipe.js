import React from "react";
import '../styles/addrecipe.css';
import { Link } from "react-router-dom";
import LongFooter from "../components/organism/Footer/LongFooter";

const AddRecipe = () => {
  const successAlert = () => {
    alert("Recipe added successful")
  }

  const refreshPage = () => {
    window.location.reload()
  }

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 90) {
        return document.querySelector(".navbar").classList.add("navbar-background");
      } else {
        document
          .querySelector(".navbar")
          .classList.remove("navbar-background");
      }
    });
  }, []);


  return (
    <div id="add-recipe-page">
        <nav className="navbar navbar-add navbar-expand-lg fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNav" style={{marginTop: "7px"}}>
            <ul className="navbar-nav">
              <li className="nav-item me-5">
                <Link className="nav-link me-5" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link nav-add active" to="#" style={{  textDecoration: "underline",fontWeight: 500, color: "black"}}>Add Recipe</Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
          <div style={{display: "flex", alignItems: "end"}}>
            <img className="rounded-circle me-3 mt-2" src={require("../images/hydra-black-red.webp")} alt="Profile" style={{width: "45px"}}/>
            <Link className="log-out" to="/"><p>Log Out</p></Link>
          </div>
        </div>
      </nav>


    <section id="add-recipe">
      <div className="mb-4">
        <label for="formFileLg" className="form-label" style={{fontWeight: 500}}>Food Photo</label>
        <input accept="image/*" className="form-control form-control-lg" id="formFileLg" type="file"/>
      </div>
      <div className="mb-4">
        <label for="exampleFormControlInput1" className="form-label" style={{fontWeight: 500}}>Title</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your food title"/>
      </div>
      <div className="mb-4">
        <label for="exampleFormControlTextarea1" className="form-label" style={{fontWeight: 500}}>Ingredients</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" placeholder="Enter your food ingredients"></textarea>
      </div>
      <div className="mb-4">
        <label for="formFileLg" className="form-label" style={{fontWeight: 500}}>Video Step</label>
        <input accept="video/*" className="form-control form-control-lg" id="formFileLg" type="file"/>
      </div>
      <div className="mb-3">
        <input accept="video/*" className="form-control form-control-lg" id="formFileLg" type="file"/>
      </div>
      <div className="mb-3">
        <input accept="video/*" className="form-control form-control-lg" id="formFileLg" type="file"/>
      </div>
      <div className="mb-4">
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your video link"/>
      </div>
      <div className="mb-4">
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your video link"/>
      </div>
      <button onClick={() => {successAlert(); refreshPage();}} type="button" className="btn btn-warning">Send</button>
    </section>

    {/* footer start */}
    <LongFooter />
    {/* footer end */}
    </div>
  )
}

export default AddRecipe;