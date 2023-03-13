import React, { useState, useEffect } from "react";
import "../styles/home.css";
import { Link, Router, useNavigate } from "react-router-dom";
import Footer from "../components/organism/Footer";
import RecipeCardHome from "../components/molecules/RecipeCardHome";
import Placeholder from "../components/molecules/Placeholder";
import Navbar from "../components/organism/Navbar";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import * as recipeReducer from "../store/reducer/recipe";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchedData, setSearchedData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [sortBy, setSortBy] = useState(["created_at", "desc"]);
  const [disablePagination, setDisablePagination] = useState(false);

  let emptyArray = [1, 2, 3, 4, 5, 6];

  const fetchByKeyWord = () => {
    setSortBy(["created_at", "desc"]);
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes/search/by?keyword=${keyword}&searchBy=title`
      )
      .then((res) => {
        setSearchedData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: `Recipe with keyword ${keyword} is not found`,
          confirmButtonText: "OK",
          confirmButtonColor: "#ffc720",
        });
      });
  };

  useEffect(() => {
    setIsLoading(true);

    const fetchNewRecipe = axios.get(
      `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=created_at&typeSort=desc`
    );

    const fetchPopularRecipe = axios.get(
      `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=created_at&typeSort=desc&page=${currentPage}&limit=6`
    );

    Promise.all([fetchNewRecipe, fetchPopularRecipe])
      .then((res) => {
        setNewRecipe(res?.[0]?.data?.data?.[0]);

        setRecipes(res?.[1]?.data?.data);

        setTotalPage(
          Math.ceil(res?.[1]?.data?.total_all_data / res?.[1]?.data?.limit)
        );
      })
      .catch((err) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title:
            err?.response?.data?.message || "There was an error from server",
          confirmButtonText: "OK",
          confirmButtonColor: "#ffc720",
        });
      })
      .finally(() => {
        setIsLoading(false);
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 600) {
            return document
              .querySelector(".navbar")
              .classList.add("navbar-background");
          } else {
            document
              .querySelector(".navbar")
              .classList.remove("navbar-background");
          }
        });
      });
  }, []);

  const fetchPagination = (positionPage) => {
    setIsLoading(true);

    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=${sortBy[0]}&typeSort=${sortBy[1]}&page=${currentPage}&limit=6`
      )
      .then(({ data }) => {
        setIsLoading(false);
        setRecipes(data?.data);
        setTotalPage(Math.ceil(data?.total_all_data / data?.limit));
        setCurrentPage(positionPage);
      })
      .catch((error) => {
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "There was an error from server !",
          showCancelButton: false,
          showCloseButton: false,
        });
      });
  };

  useEffect(() => {
    setIsLoading(true);
    if (!keyword) {
      axios
        .get(
          `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=${sortBy[0]}&typeSort=${sortBy[1]}&page=${currentPage}&limit=6`
        )
        .then(({ data }) => {
          setRecipes(data?.data);
          setTotalPage(Math.ceil(data?.total_all_data / data?.limit));
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          Swal.fire({
            icon: "error",
            title:
              err?.response?.data?.message || "There was an error from server",
            confirmButtonText: "OK",
            confirmButtonColor: "#ffc720",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
      axios
        .get(
          `${process.env.REACT_APP_URL_BACKEND}/recipes/search/by?sort=${sortBy[0]}&typeSort=${sortBy[1]}&keyword=${keyword}&searchBy=title`
        )
        .then((res) => {
          setSearchedData(res?.data?.data);
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title:
              err?.response?.data?.message || "There was an error from server",
            confirmButtonText: "OK",
            confirmButtonColor: "#ffc720",
          });
        });
    }
  }, [sortBy, currentPage]);

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
                      window.location.href = "#search-recipe";
                      fetchByKeyWord(e.target.value);
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
          {/* <!-- left side --> */}
          <div className="row align-items-center">
            {isLoading ? (
              <div className="col-lg-6 col-xs-12">
                <img
                  src={
                    "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                  }
                  className="main-image"
                  alt="Food"
                />
              </div>
            ) : (
              <div className="col-lg-6 col-xs-12">
                <img
                  src={
                    newRecipe?.photo ??
                    "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                  }
                  className="main-image"
                  alt="Food"
                />
              </div>
            )}

            {/* <!-- right side --> */}
            <div
              className="col-lg-5 col-xs-12 offset-1"
              style={{ marginTop: "50px", marginLeft: "15px" }}
            >
              {isLoading ? (
                <p className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                  <span className="placeholder col-12"></span>
                  <span className="placeholder col-12"></span>
                </p>
              ) : (
                <>
                  <h2>{newRecipe?.title}</h2>

                  <p>{newRecipe?.description}</p>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      axios
                        .get(
                          `${process.env.REACT_APP_URL_BACKEND}/recipes/${newRecipe?.id}`
                        )
                        .then((res) => {
                          dispatch(recipeReducer.setData(recipes[0]));
                          dispatch(recipeReducer.setId(newRecipe?.id));
                          navigate(`/detail/${newRecipe?.id}`);

                          window.scrollTo(0, 0);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    See More
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="search-recipe">
        <div className="container">
          <div className="container">
            <div className="row align-self-center">
              <div className="col">
                <h2 className="title">
                  {keyword === "" ? "Popular recipe" : "Searched recipe"}
                </h2>
              </div>
              <div className="col-2">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  style={{ marginLeft: "-35%", marginTop: "11%" }}
                  onChange={(event) => {
                    const value = event.target.value;
                    if (value === "1" || value === "0") {
                      // Newest
                      setSortBy(["created_at", "desc"]);
                    } else if (value === "2") {
                      setSortBy(["created_at", "asc"]);
                      // A-Z
                    } else if (value === "3") {
                      setSortBy(["title", "-"]);
                      // Z-A
                    } else {
                      setSortBy(["title", "desc"]);
                    }
                  }}
                >
                  <option value="0" selected>
                    Default
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
            {isLoading &&
              emptyArray.map((item) => (
                <div className="col-lg-4 col-6">
                  <Placeholder />
                </div>
              ))}
            {!keyword
              ? recipes.map((item, key) => (
                  <div
                    className="col-lg-4 col-6"
                    style={{ transitionDuration: "1s" }}
                    key={key}
                  >
                    {/* <RecipeCardHome item={item} /> */}
                    <RecipeCardHome
                      image={item?.photo}
                      name={item?.title}
                      id={item?.id}
                    />
                  </div>
                ))
              : searchedData.map((item, key) => (
                  <div
                    className="col-lg-4 col-6"
                    style={{ transitionDuration: "1s" }}
                    key={key}
                  >
                    {/* <RecipeCardHome item={item} /> */}
                    <RecipeCardHome
                      image={item?.photo}
                      name={item?.title}
                      id={item?.id}
                    />
                  </div>
                ))}
            {recipes.length === 0 && !isLoading ? (
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

            marginTop: "2.5rem",
          }}
        >
          <ul className="pagination">
            <li className="page-item">
              <a
                className={`page-link ${currentPage === 1 ? "disabled" : ""}`}
                onClick={() => {
                  if (currentPage > 1) fetchPagination(currentPage - 1);
                }}
                href=""
              >
                Previous
              </a>
            </li>
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
