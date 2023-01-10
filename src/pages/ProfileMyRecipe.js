import React from "react";
import '../styles/myrecipe.css';
import { Link } from "react-router-dom";
import ShortFooter from "../components/organism/Footer/ShortFooter";
import RecipeCardProfile from "../components/molecule/RecipeCardProfile";

const menu = [
  {
    name: "Chicken Kare",
    image: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2021/06/24/resep-chicken-curry-rice-menu-s-20210624022011.jpg",
    url: "chicken-kare",
  },
  {
    name: "Bomb Chicken",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPLoYdbQq00C0ObtLqjZYXYulZSWSMn-3Ng&usqp=CAU",
    url: "bomb-chicken",
  },
]

function ProfileMyRecipe() {
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
    <div id="my-recipe-page">
            {/* <!-- navbar start --> */}
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
                <Link className="nav-link nav-profile" to="#">Profile</Link>
              </li>
            </ul>
          </div>
          <div style={{display: "flex", alignItems: "end"}}>
            <img className="online-logo" src="../images/online-logo.webp" alt="Online"/>
            <img className="rounded-circle me-3 mt-2" src={require("../images/hydra-black-red.webp")} alt="Profile" style={{width: "45px", zIndex: 0}}/>
            <Link className="log-out" to="/"><p>Log Out</p></Link>
          </div>
        </div>
      </nav>
      {/* <!-- navbar end --> */}

      {/* <!-- profile photo & username start --> */}
      <section>
        <div id="profile-username">
          <img
            className="profile-photo rounded-circle"
            src={require("../images/hydra-black-red.webp")}
            alt="Profile"
          />
          <Link to="../edit-profile" style={{textDecoration: "none"}}><img src="./images/edit-logo.webp" style={{
            width: "30px",
            marginLeft: "54%",
            marginTop: "-2%"}} alt="Edit" /></Link>

          <h1 className="username">Hydra Protector</h1>
        </div>

        <div className="profile-recipe">
          <ul>
            <li className="myrecipe"><Link to="#">My Recipe</Link></li>
            <li className="savedrecipe">
              <Link to="./saved-recipe"> Saved Recipe </Link>
            </li>
            <li className="likedrecipe">
              <Link to="./liked-recipe">Liked Recipe</Link>
            </li>
          </ul>
        </div>
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
          {/* <!-- <div className="col-3">
            <div className="clickable-image-profile">
              <img src=require("../images/banana-smoothie-pop.webp")} />
              <h2 className="image-title-profile">
                Banana Smoothie Pobascouacionasocinasoinsi0
              </h2>
            </div>
          </div>
          <div className="col-3">
            <div className="clickable-image-profile">
              <img src={require("../images/sirloin.webp")} />
              <h2 className="image-title-profile">Sirloin with potato</h2>
            </div>
          </div> --> */}
        </div>
      </section>

    {/* <!-- footer start --> */}
    <ShortFooter />
    {/* <!-- footer end --> */}

    </div>
  )
}

export default ProfileMyRecipe;