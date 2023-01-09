import React from "react";
import '../styles/savedrecipe.css';
import { Link } from "react-router-dom";

function ProfileSavedRecipe() {
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
      {/* <!-- navbar --> */}
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-5">
              <Link className="nav-link me-5" aria-current="page" to="../home">Home</Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link" to="/add-recipe">Add Recipe</Link>
            </li>
            <li className="nav-item me-5">
              <Link className="nav-link nav-profile" to="/">Profile</Link>
            </li>
          </ul>
        </div>
        <div style={{display: "flex", alignItems: "end"}}>
          <img className="online-logo" src={require("../images/online-logo.webp")} alt="Online" />
          <img className="rounded-circle me-3 mt-2" src={require("../images/hydra-black-red.webp")} alt="Profile" style={{width: "45px", zIndex: 0}}/>
          <a className="log-out" href="/"><p>Log Out</p></a>
        </div>
      </div>
    </nav>
    {/* <!-- navbar end --> */}

    {/* <!-- profile photo & username -->  */}
    
    <section>
      <div id="profile-username">
       <img className="profile-photo" src={require("../images/hydra-black-red.webp")} alt="Profile" />
       <Link to="./" style={{textDecoration: "none"}}><img src={require("../images/edit-logo.webp")} alt="Edit" style={{
        width: "30px",
        marginLeft: "54%",
        marginTop: "-2%"}}/></Link>
       <h1 className="username">Hydra Protector</h1>
     </div>
     
     <div className="profile-recipe">
       <ul>
         <li className="myrecipe2"><Link to="/profile">My Recipe</Link></li>
         <li className="savedrecipe2"><Link to="/profile/saved-recipe">Saved Recipe</Link></li>
         <li className="likedrecipe2"><Link to="/profile/liked-recipe">Liked Recipe</Link></li>
        </ul>
      </div>
      {/* <!-- <div className="food-photo">
        <img className="photo1" src="./assets/images/bomb-chicken.webp"><p>Bomb Chicken</p></img>
        <img className="photo2" src="./assets/images/bananas-pancake.webp"><p>Bananas Cake</p></img>
      </div> --> */}
      <div className="row" style={{marginRight: "100px"}}>
        <div className="col-3">
          <div className="clickable-image">
            <img className="myrecipe1"
              src={require("../images/sugar-salmon.webp")}
              alt="Food"
            />
            <h2 className="image-title">
              Sugar Salmon
            </h2>
          </div>
        </div>
        <div className="col-3">
          <div className="clickable-image">
            <img
              src={require("../images/bananas-pancake.webp")}
              alt="Food"
            />
            <h2 className="image-title">
              Bananas Pancake
            </h2>
          </div>
        </div>
        <div className="col-3">
          <div className="clickable-image">
            <img
              src={require("../images/indian-salad.webp")}
              alt="Food"
            />
            <h2 className="image-title">
              Indian Salad
            </h2>
          </div>
        </div>
        {/* <!-- <div className="col-3">
          <div className="clickable-image">
            <img
              src={require("../images/sirloin.webp")}
              alt="Food"
            />
            <h2 className="image-title">
              Sirloin with potato
            </h2>
          </div>
        </div> --> */}
      </div>
     </section>
      <footer className="ftr-profile">
        <p>Copyright &#169 Riyadh Ryan Albar, 2022. All Rights Reserved.</p>
     </footer>
    </div>
  )
}

export default ProfileSavedRecipe;