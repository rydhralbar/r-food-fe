import React from "react";
import '../styles/addrecipe.css';
import Footer from "../components/organism/Footer";
import NavbarLogged from "../components/organism/Navbar/NavbarLogged";

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
        <NavbarLogged />


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
    <Footer />
    {/* footer end */}
    </div>
  )
}

export default AddRecipe;