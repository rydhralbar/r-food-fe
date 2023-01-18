import React from "react";
import '../styles/myrecipe.css';
import { Link } from "react-router-dom";
import Footer from "../components/organism/Footer";
import RecipeCard from "../components/molecules/RecipeCardProfile";
import Navbar from "../components/organism/Navbar";

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

const ProfileMyRecipe = () => {
  const [ profile, setProfile ] = React.useState(localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")) : null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 5) {
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
      <Navbar/>
      {/* <!-- navbar end --> */}

      {/* <!-- profile photo & username start --> */}
      <section>
        <div id="profile-username">
          <img
            className="profile-photo rounded-circle"
            src={`${profile.photo}`}
            alt="Profile"
          />
          <Link to="../edit-profile" style={{textDecoration: "none"}}><img src="./images/edit-logo.webp" style={{
            width: "30px",
            marginLeft: "54%",
            marginTop: "-2%"}} alt="Edit" /></Link>

          <h1 className="username">{profile.name}</h1>
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
              <div className="col-3 col-3" style={{marginBottom: "28px"}}>
                <RecipeCard
                  image={item?.image}
                  name={item?.name}
                  url={item?.name?.toLocaleLowerCase()?.split(" ").join("-")}
                />
              </div>
            ))}
        </div>
      </section>
      {/* <!-- profile photo & username end --> */}

    {/* <!-- footer start --> */}
    <Footer />
    {/* <!-- footer end --> */}

    </div>
  )
}

export default ProfileMyRecipe;