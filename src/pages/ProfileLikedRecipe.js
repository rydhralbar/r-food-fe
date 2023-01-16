import React from 'react';
import "../styles/likedrecipe.css";
import { Link } from "react-router-dom";
import Footer from '../components/organism/Footer';
import RecipeCardProfile from '../components/molecules/RecipeCardProfile';
import Navbar from '../components/organism/Navbar';

const menu = [
  {
    name: "Honey Donut",
    image: "https://superapp.id/blog/wp-content/uploads/2020/10/Aneka-rasa-donat.png",
    url: "honey-donut",
  },
  {
    name: "Coffee Lava Cake",
    image: "https://i.pinimg.com/originals/e8/9a/49/e89a4996a8f0049e3f077352cd212343.jpg",
    url: "coffee-lava-cake",
  },
  {
    name: "Bananas Pancake",
    image: "https://www.cookingclassy.com/wp-content/uploads/2020/04/banana-pancakes-18.jpg",
    url: "bananas-pancake",
  },
  {
    name: "Sirloin Steak",
    image: "https://www.wholesomeyum.com/wp-content/uploads/2019/05/wholesomeyum-How-To-Cook-Top-Sirloin-Steak-In-The-Oven-13.jpg",
    url: "sirloin-steak",
  }
]

function ProfileLikedRecipe() {
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
    <div>
      <div>
    {/* <!-- navbar --> */}
    <Navbar />
    {/* <!-- navbar end --> */}

    {/* <!-- profile photo & username -->  */}
    <section>
      <div id="profile-username">
       <img className="profile-photo rounded-circle" src={`${profile.photo}`} alt="Profile"/>
       <Link to="../edit-profile" style={{textDecoration: "none"}}><img src="/images/edit-logo.webp" alt='Edit' style={{
        width: "30px",
        marginLeft: "54%",
        marginTop: "-2%"}}/></Link>
       <h1 className="username">{profile.name}</h1>
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
      {menu.map((item) => (
              <div className="col-3 col-3" style={{marginBottom: "28px"}}>
                <RecipeCardProfile
                  image={item?.image}
                  name={item?.name}
                  url={item?.name?.toLocaleLowerCase()?.split(" ").join("-")}
                />
              </div>
            ))}
      </div>
  </section>
  </div>
      
      {/* footer start */}
        <Footer />
      {/* footer end */}

      
    </div>
  );
}

export default ProfileLikedRecipe;