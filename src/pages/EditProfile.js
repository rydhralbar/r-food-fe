import React from "react";
import "../styles/changeprofile.css"
import { Link } from "react-router-dom";
import Footer from "../components/organism/Footer";
import RecipeCardProfile from "../components/molecules/RecipeCardProfile";
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

const EditProfile = () => {
  const [ profile, setProfile ] = React.useState(localStorage.getItem("profile") ? JSON.parse(localStorage.getItem("profile")) : null);

  return(
    <div>
      {/* <!-- navbar start --> */}
      <Navbar />
      {/* <!-- navbar end --> */}

      {/* <!-- profile photo & username start --> */}
      <section>
        <div id="profile-username">
          <img
            className="profile-photo-edit rounded-circle"
            src={profile?.photo}
            alt="Profile"
          />
          <Link to="/edit-profile" style={{textDecoration: "none"}}><img src={"./images/edit-logo.webp"} alt="Edit" style={{
            width: "30px",
            marginLeft: "54%",
            marginTop: "-2%"}}/></Link>

          <div className="btn-group-vertical" role="group" aria-label="Vertical button group" style={{display: "grid", height: "60px"}}>
            <button type="button" className="btn btn-secondary">Change Photo Profile</button>
            <button type="button" className="btn btn-secondary">Change Name</button>
          </div>
        </div>

        <div className="profile-recipe">
          <ul>
            <li className="myrecipe"><Link to="/profile">My Recipe</Link></li>
            <li className="savedrecipe">
              <Link to="/profile/saved-recipe"> Saved Recipe </Link>
            </li>
            <li className="likedrecipe">
              <Link to="/profile/liked-recipe">Liked Recipe</Link>
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
            <div className="clickable-image">
              <img src={require("../images/banana-smoothie-pop.webp")} alt="Food" />
              <h2 className="image-title">
                Banana Smoothie Pop
              </h2>
            </div>
          </div>
          <div className="col-3">
            <div className="clickable-image">
              <img src={require("..images/sirloin.webp")} alt="Food" />
              <h2 className="image-title">Sirloin with potato</h2>
            </div>
          </div> --> */}
        </div>
      </section>

    {/* <!-- footer start --> */}
    <Footer />
    {/* <!-- footer end --> */}
    </div>
  )
}

export default EditProfile;