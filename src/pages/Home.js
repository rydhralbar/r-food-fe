import React from "react";
import '../styles/homeguest.css';
import { Link } from "react-router-dom";
import LongFooter from "../components/organism/Footer/LongFooter";
import RecipeCardHome from "../components/molecules/RecipeCardHome";

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
  {
    name: "Coffee Lava Cake",
    image: "https://i.pinimg.com/originals/e8/9a/49/e89a4996a8f0049e3f077352cd212343.jpg",
    url: "coffee-lava-cake",
  },
  {
    name: "Sugar Salmon",
    image: "https://iambaker.net/wp-content/uploads/2019/03/bssalmon-blog2.jpg",
    url: "sugar-salmon",
  },
  {
    name: "Banana Smoothie Pop",
    image: "https://i.ytimg.com/vi/ypN4EMkm7IM/maxresdefault.jpg",
    url: "banana-smoothie-pop",
  },
  {
    name: "Indian Salad",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuoi8Jg_nXZDsOOjwjB5hkRxNbPdT47dwszw&usqp=CAU",
    url: "indian-salad",
  },
]

function Home() {
  function loginAlert() {
    alert("Login required!")
  }

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
    {/* navbar start */}
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container container-xs-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item me-5">
              <Link className="nav-link active" aria-current="page" to="/"   style={{fontWeight: 500, textDecoration: "underline"}}>Home</Link>
            </li>
            <li className="nav-item me-5">
              {/* <Link className="nav-link" onClick={alertLogin}>Add Recipe</Link> */}
              <Link className="nav-link" onClick={loginAlert}>Add Recipe</Link>
            </li>
            <li className="nav-item me-5">
              {/* <Link className="nav-link" onClick={alertLogin}>Profile</Link> */}
              <Link className="nav-link" onClick={loginAlert}>Profile</Link>
            </li>
          </ul>
        </div>
        <div className="button-logres col-lg-2 col-xs-5">
          <Link to="/login">
            <button type="button" className="btn btn-warning shadow-sm" style={{marginRight: "13px"}}>
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button type="button" className="btn btn-light shadow-sm">
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
    {/* <!-- navbar end --> */}

    {/* <!-- header start--> */}
    <section id="header">
      {/* <!-- background yellow --> */}
      <div className="overlay-background"></div>

      {/* <!-- content --> */}
      <div className="container content">
        <div className="row align-items-center">
          {/* <!-- side left --> */}
          <div className="discover col-lg-5 col-xs-12">
            <h1>Discover Recipe & Delicious Food</h1>
            <div className="mt-4">
              <input
                type="text"
                className="form-control form-control-lg"
                id="form-search"
                placeholder="Search Recipe..."
              />
            </div>
          </div>
          {/* <!-- side right --> */}
          <div className="col-lg-6 col-xs-12 background-grid">
            <img
              src={require("../images/food-on-plate.webp")}
              className="main-background-guest"
              alt="Food on plate"
            />
            {/* <!-- background header --> */}
            <img
              src={require("../images/lettuce.webp")}
              className="background-1-guest"
              alt="Lettuce"
            />
            <img
              src={require("../images/polkadot.webp")}
              className="background-2-guest"
              alt="Polkadot"
            />
          </div>
        </div>
      </div>
    </section>
    {/* <!-- header end --> */}

    {/* <!-- new recipe start --> */}
    <section id="new-recipe">
      {/* <!-- title --> */}
      <div className="container">
        <h2 className="title">New Recipe</h2>
      </div>

      {/* <!-- background --> */}
      <div className="background-overlay"></div>
      {/* <!-- content --> */}
      <div className="container">
        <div className="row align-items-center">

          {/* <!-- left side --> */}
          <div className="col-lg-6 col-xs-12">
            <img
              src={require("../images/risotto.webp")}
              className="main-image"
              alt="Risotto"
            />
          </div>

          {/* <!-- right side --> */}
          <div className="col-lg-5 col-xs-12 offset-1" style= {{marginTop: "50px", marginLeft: "15px"}}>
            <h2>
              Risotto <br />
              (Quick & Easy)
            </h2>

            <p>
              Master this collection of classNameic Italian risotto recipes. Try autumnal pumpkin and butternut squash, or the winning standby combination of chorizo & pea risotto.
            </p>
            <Link to="./detail"><button type="button" className="btn btn-warning">See More</button></Link>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- new recipe end --> */}

    {/* <!-- popular recipe start --> */}
      {/* <!-- popular recipe --> */}
      <section id="popular-recipe">
        <div className="container">
          {/* <!-- title --> */}
          <div className="container">
            <h2 className="title">Popular Recipe</h2>
          </div>

          {/* <!-- recipe list --> */}
          <div className="row">
            {menu.map((item) => (
              <div className="col-lg-4 col-6">
                <RecipeCardHome
                  image={item?.image}
                  name={item?.name}
                  url={item?.name?.toLocaleLowerCase()?.split(" ").join("-")}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    {/* <!-- popular recipe end --> */}

    {/* <!-- pagination start --> */}
    <nav aria-label="..." style= {{display: "flex", justifyContent: "center", marginBottom: "2rem"}}>
      <ul className="pagination">
        <li className="page-item previous">
          <span className="page-link">Previous</span>
        </li>
        <li className="page-item active"><span className="page-link">1</span></li>
        <li className="page-item" aria-current="page">
          <Link className="page-link" to="/">2</Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/">3</Link>
        </li>
        <li className="page-item">
          <Link className="page-link" to="/">Next</Link>
        </li>
      </ul>
    </nav>
    {/* <!-- pagination end --> */}

    {/* <!-- footer start --> */}
    <LongFooter />
    {/* <!-- footer end --> */}
  </div>
)}

export default Home;