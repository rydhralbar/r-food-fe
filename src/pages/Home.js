import React from "react";
import "../styles/home.css";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/organism/Footer";
import RecipeCardHome from "../components/molecules/RecipeCardHome";
import Placeholder from "../components/molecules/Placeholder";
import Navbar from "../components/organism/Navbar";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  let [keyword, setKeyword] = React.useState(
    "Discovery Recipe & Delicious Food"
  );
  let [menu, setMenu] = React.useState([]);
  let [isLoading, setIsLoading] = React.useState(true);
  let [currentPage, setCurrentPage] = React.useState(1);
  let [totalPage, setTotalPage] = React.useState(1);
  let [disablePagination, setDisablePagination] = React.useState(false);

  let emptyArray = [1, 2, 3, 4, 5, 6];

  // Did mount
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/recipes?page=1&limit=6`)
      .then(({ data }) => {
        console.log(data);
        setMenu(data?.data);
        let countPagination = Math.ceil(
          parseInt(data?.all_pagination?.[0]?.count) / 6
        );
        setTotalPage(countPagination);
      })
      .catch(() => setMenu([]))
      .finally(() => setIsLoading(false));
  }, []);

  const fetchPagination = (pageParam) => {
    setIsLoading(true);
    setMenu([]);
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes?page=${pageParam}&limit=6`
      )
      .then(({ data }) => {
        let countPagination = Math.ceil(
          parseInt(data?.all_pagination?.[0]?.count) / 6
        );
        setMenu(data?.data);
        setTotalPage(countPagination);
        setCurrentPage(pageParam);
        setDisablePagination(false);
      })
      .catch(() => setMenu([]))
      .finally(() => setIsLoading(false));
  };

  const fetchByKeyWord = () => {
    setIsLoading(true);

    if (keyword && keyword !== "") {
      axios
        .get(`${process.env.REACT_APP_URL_BACKEND}/recipe-search/${keyword}?sort=asc`)
        .then(({ data }) => {
          setMenu(data?.data);
          setDisablePagination(true);
        })
        .catch(() => setMenu([]))
        .finally(() => setIsLoading(false));
    } else {
      axios
        .get(`${process.env.REACT_APP_URL_BACKEND}/recipes?page=1&limit=6`)
        .then(({ data }) => {
          setMenu(data?.data);
          let countPagination = Math.ceil(
            parseInt(data?.all_pagination?.[0]?.count) / 6
          );
          setTotalPage(countPagination);
        })
        .catch(() => setMenu([]))
        .finally(() => setIsLoading(false));
    }
  };

  const fetchBySort = (sortValue) => {
    setIsLoading(true);
    setMenu([]);
    if(sortValue === "1"){
      axios
        .get(`${process.env.REACT_APP_URL_BACKEND}/recipes?sort=created_at_desc`)
        .then(({ data }) => {
          setMenu(data?.data);
          setDisablePagination(true);
        })
        .catch(() => setMenu([]))
        .finally(() => setIsLoading(false));
    } else if (sortValue === "2") {
      axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/recipes?sort=created_at_asc`)
      .then(({ data }) => {
        setMenu(data?.data);
        setDisablePagination(true);
      })
      .catch(() => setMenu([]))
      .finally(() => setIsLoading(false));
    } else if (sortValue === "3") {
      axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/recipes?sort=title_asc`)
      .then(({ data }) => {
        setMenu(data?.data);
        setDisablePagination(true);
      })
      .catch(() => setMenu([]))
      .finally(() => setIsLoading(false));
    } else if (sortValue === "4") {
      axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/recipes?sort=title_desc`)
      .then(({ data }) => {
        setMenu(data?.data);
        setDisablePagination(true);
      })
      .catch(() => setMenu([]))
      .finally(() => setIsLoading(false));
    }
  };

  // Did update
  React.useEffect(() => {
    console.log("Loading berubah");
  }, [isLoading, keyword]);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        return document
          .querySelector(".navbar")
          .classList.add("navbar-background");
      } else {
        document.querySelector(".navbar").classList.remove("navbar-background");
      }
    });
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* navbar start */}
      <Navbar />
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
              <h1>Discovery Recipe & Delicious Food</h1>
              <div className="mt-4 search-recipe">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="form-search"
                  placeholder="Search Recipe..."
                  onChange={(event) => {
                    setKeyword(event.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      window.location.href = "/#popular-recipe";
                      fetchByKeyWord();
                    }
                  }}
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
                alt="Food"
              />
            </div>

            {/* <!-- right side --> */}
            <div
              className="col-lg-5 col-xs-12 offset-1"
              style={{ marginTop: "50px", marginLeft: "15px" }}
            >
              <h2>
                Risotto <br />
                (Quick & Easy)
              </h2>

              <p>
                Master this collection of classNameic Italian risotto recipes.
                Try autumnal pumpkin and butternut squash, or the winning
                standby combination of chorizo & pea risotto.
              </p>
              <Link to="/detail">
                <button type="button" className="btn btn-warning">
                  See More
                </button>
              </Link>
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
            <div className="row align-self-center">
              <div className="col">
                <h2 className="title">Popular Recipe</h2>
              </div>
              <div className="col-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ marginLeft: "-35%", marginTop: "11%" }}
                  onChange={(e) => {
                    fetchBySort(e.target.value)
                    console.log(e.target.value)
                  }}
                >
                  <option selected disabled>
                    Sort by
                  </option>
                  <option value="1">Newest update</option>
                  <option value="2">Oldest update</option>
                  <option value="3">A-Z</option>
                  <option value="4">Z-A</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row">
            {isLoading
              ? emptyArray.map((item) => (
                  <div className="col-lg-4 col-6">
                    <Placeholder />
                  </div>
                ))
              : menu.map((item, key) => (
                  <div
                    className="col-lg-4 col-6"
                    style={{ transitionDuration: "1s" }}
                    key={key}
                  >
                    {/* <RecipeCardHome item={item} /> */}
                    <RecipeCardHome
                      image={item?.photo}
                      name={item?.title}
                      url={item?.slug}
                    />
                  </div>
                ))}
            {menu.length === 0 && !isLoading ? (
              <h2>Recipe is not found</h2>
            ) : null}
          </div>

          {/* <!-- recipe list --> */}
          {/* <div className="row">
            {}
          </div> */}
        </div>
      </section>
      {/* <!-- popular recipe end --> */}

      {/* <!-- pagination start --> */}
      {!isLoading && !disablePagination && (
        <nav
          className="pagination-mobile"
          aria-label="..."
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <ul className="pagination">
            <li className="page-item">
              <a
                className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => {
                  if (currentPage > 1) fetchPagination(currentPage - 1);
                }}
              >
                Previous
              </a>
            </li>
            {/* {console.log({
            array1: totalPage,
            array2: 
          })} */}
            {[...new Array(totalPage)].map((item, key) => {
              let position = ++key;
              return (
                <li className="page-item" key={key}>
                  <a
                    className={`page-link ${
                      currentPage === position ? "active" : ""
                    }`}
                    onClick={() => {
                      fetchPagination(position);
                    }}
                  >
                    {position}
                  </a>
                </li>
              );
            })}
            <li className="page-item">
              <a
                className={`page-link ${
                  currentPage === totalPage ? "disabled" : ""
                }`}
                onClick={() => {
                  if (currentPage < totalPage) fetchPagination(currentPage + 1);
                }}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      )}
      {/* <!-- pagination end --> */}

      {/* <!-- footer start --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default Home;
