import React from "react";
import '../styles/savedrecipe.css';
import Footer from "../components/organism/Footer";
import { Link } from "react-router-dom";
import RecipeCardProfile from "../components/molecules/RecipeCardProfile";

const menu = [
  {
    name: "Sugar Salmon",
    image: "https://iambaker.net/wp-content/uploads/2019/03/bssalmon-blog2.jpg",
    url: "sugar-salmon",
  },
  {
    name: "Bananas Smoothie Pop",
    image: "https://i.ytimg.com/vi/ypN4EMkm7IM/maxresdefault.jpg",
    url: "banana-smoothie-pop",
  },
  {
    name: "Indian Salad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoi8Jg_nXZDsOOjwjB5hkRxNbPdT47dwszw&usqp=CAU",
    url: "indian-salad",
  },
]

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
          <img className="rounded-circle me-3 mt-2" src={require("../images/erik-lehnsherr.webp")} alt="Profile" style={{width: "45px", zIndex: 0}}/>
          <Link className="log-out" to="/"><p>Log Out</p></Link>
        </div>
      </div>
    </nav>
    {/* <!-- navbar end --> */}

    {/* <!-- profile photo & username -->  */}
    
    <section>
      <div id="profile-username">
       <img className="profile-photo rounded-circle" src={require("../images/erik-lehnsherr.webp")} alt="Profile" />
       <Link to="../edit-profile" style={{textDecoration: "none"}}><img src={require("../images/edit-logo.webp")} alt="Edit" style={{
        width: "30px",
        marginLeft: "54%",
        marginTop: "-2%"}}/></Link>
       <h1 className="username">Erik Lehnsherr</h1>
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
      {menu.map((item) => (
              <div className="col-3 col-3">
                <RecipeCardProfile
                  image={item?.image}
                  name={item?.name}
                  url={item?.name?.toLocaleLowerCase()?.split(" ").join("-")}
                />
              </div>
            ))}
      </div>
     </section>
     {/* footer start */}
        <Footer />
      {/* footer end */}
    </div>
  )
}

export default ProfileSavedRecipe;