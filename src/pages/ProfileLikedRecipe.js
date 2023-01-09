import React from 'react';
import "../styles/likedrecipe.css";
import { Link } from "react-router-dom";

function ProfileLikedRecipe() {
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
              <Link className="nav-link nav-profile" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <div style={{display: "flex", alignItems: "end"}}>
          <img className="online-logo" src="/images/online-logo.webp" alt="Online"/>
          <img className="rounded-circle me-3 mt-2" src={require("../images/hydra-black-red.webp")} alt="Profile" style={{width: "45px", zIndex: 0}}/>
          <Link className="log-out" to="/"><p>Log Out</p></Link>
        </div>
      </div>
    </nav>
    {/* <!-- navbar end --> */}

    {/* <!-- profile photo & username -->  */}
    
    <section>
      <div id="profile-username">
       <img className="profile-photo" src={require("../images/hydra-black-red.webp")} alt="Profile"/>
       <Link href="./changeprofile.html" style={{textDecoration: "none"}}><img src="/images/edit-logo.webp" alt='Edit' style={{
        width: "30px",
        marginLeft: "54%",
        marginTop: "-2%"}}/></Link>
       <h1 className="username">Hydra Protector</h1>
     </div>
     
     <div className="profile-recipe">
       <ul>
         <li className="myrecipe3"><Link to="/profile">My Recipe</Link></li>
         <li className="savedrecipe3"><Link to="/profile/saved-recipe">Saved Recipe</Link></li>
         <li className="likedrecipe3"><Link to="/profile/liked-recipe">Liked Recipe</Link></li>
        </ul>
      </div>
      {/* <div className="food-photo">
        <img className="photo1" src="./assets/images/bomb-chicken.webp"><p>Bomb Chicken</p></img>
        <img className="photo2" src="./assets/images/bananas-pancake.webp"><p>Bananas Cake</p></img>
      </div> */}
      <div className="row" style={{marginRight: "100px"}}>
        <div className="col-3">
          <div className="clickable-image-profile">
            <img className="myrecipe1"
              src={require("../images/bomb-chicken2.webp")}
              alt="Food"
            />
            <h2 className="image-title-profile">
              Bomb Chicken
            </h2>
          </div>
        </div>
        <div className="col-3">
          <div className="clickable-image-profile">
            <img
              src={require("../images/coffee-lava-cake.webp")}
              alt="Food"
            />
            <h2 className="image-title-profile">
              Coffee Lava Cake
            </h2>
          </div>
        </div>
        <div className="col-3">
          <div className="clickable-image-profile">
            <img
              src={require("../images/banana-smoothie-pop.webp")}
              alt="Food"
            />
            <h2 className="image-title-profile">
              Banana Smoothie Pop
            </h2>
          </div>
        </div>
        <div className="col-3">
          <div className="clickable-image-profile">
            <img
              src={require("../images/sirloin.webp")}
              alt='Food'
            />
            <h2 className="image-title-profile">
              Sirloin with potato
            </h2>
          </div>
        </div>
      </div>
  </section>
  </div>
      <footer className="ftr-profile">
        <p>Copyright &#169 Riyadh Ryan Albar, 2022. All Rights Reserved</p>
     </footer>

      
    </div>
  );
}

export default ProfileLikedRecipe;