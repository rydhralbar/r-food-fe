import React, { useEffect, useState } from "react";
import "../styles/myrecipe.css";
import { Link } from "react-router-dom";
import Footer from "../components/organism/Footer";
import RecipeCard from "../components/molecules/RecipeCardProfile";
import Navbar from "../components/organism/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";
import * as profileReducer from "../store/reducer/profile";

const ProfileMyRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userRecipes, setUserRecipes] = useState([]);
  const [editPhoto, setEditPhoto] = useState();
  const [editName, setEditName] = useState();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.profile);

  const profile = data?.profile?.payload;
  const token = data?.token?.payload;

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/recipes?sort=created_at&typeSort=desc`
      )
      .then((res) => {
        const allRecipe = res?.data?.data;
        const myRecipe = allRecipe.filter(
          (item) => item?.user_id === profile?.id
        );
        setUserRecipes(myRecipe);
      })
      .catch((err) => console.log(err));
  }, [profile]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 5) {
        return document
          .querySelector(".navbar")
          .classList.add("navbar-background");
      } else {
        document.querySelector(".navbar").classList.remove("navbar-background");
      }
    });
  }, []);

  const handleEdit = () => {
    setIsLoading(true);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    const bodyParameters = {
      photo: editPhoto,
      name: editName === "" ? profile?.name : editName,
    };

    axios
      .patch(
        `${process.env.REACT_APP_URL_BACKEND}/users/${profile?.id}`,
        bodyParameters,
        config
      )
      .then((res) => {
        console.log("berhasil", res);
        Swal.fire({
          icon: "success",
          title: `${res.data.message}`,
        });
        dispatch(profileReducer.setProfile(res?.data?.data[0]));

        resetInput();
        setEditPhoto();
        setEditName("");
        setTimeout(() => {
          refreshPage();
        }, 1000);
      })
      .catch((err) => {
        console.log("error", err);
        Swal.fire({
          icon: "error",
          title: `${err.response.data.message}`,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const resetInput = () => {
    let input = document.querySelector("input");
    input.value = "";
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const maintenance = () => {
    Swal.fire({
      icon: "error",
      title: "This feature is currently under maintenance !",
      confirmButtonText: "OK",
      confirmButtonColor: "#ffc720",
    });
  };

  return (
    <div id="my-recipe-page">
      {/* <!-- navbar start --> */}
      <Navbar />
      {/* <!-- navbar end --> */}

      {/* <!-- profile photo & username start --> */}
      <section>
        <div id="profile-username">
          <img
            className="profile-photo rounded-circle"
            src={`${profile?.photo}`}
            alt="Profile"
          />
          <button
            className="btn"
            style={{
              textDecoration: "none",
              margin: "auto",
              marginLeft: "54%",
              marginTop: "-20px",
            }}
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@mdo"
          >
            <img
              src="./images/edit-logo.webp"
              style={{
                width: "30px",
              }}
              alt="Edit"
            />
          </button>

          <h1 className="username">{profile?.name}</h1>
        </div>
        <div
          className="btn-group-vertical"
          role="group"
          aria-label="Vertical button group"
          style={{ display: "grid" }}
        >
          <div
            className="modal"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Change Profile
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div clas="form-group">
                    <label className="label mb-1">Photo</label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => {
                        setEditPhoto(e.target.files[0]);
                      }}
                    />
                  </div>
                  <div className="form-group mt-2">
                    <label className="label mb-1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder={profile?.name}
                      onChange={(e) => {
                        setEditName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <div>
                    <button
                      type="button"
                      className="btn btn-warning me-2"
                      onClick={resetInput}
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary me-2"
                      data-bs-dismiss="modal"
                      onClick={resetInput}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleEdit}
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Save changes"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-recipe">
          <ul>
            <li className="myrecipe">
              <Link to="#">My Recipe</Link>
            </li>
            <li
              className="savedrecipe"
              onClick={maintenance}
              style={{ cursor: "pointer" }}
            >
              Saved Recipe
            </li>
            <li
              className="likedrecipe"
              onClick={maintenance}
              style={{ cursor: "pointer" }}
            >
              Liked Recipe
            </li>
          </ul>
        </div>
        <div className="row" style={{ marginRight: "100px" }}>
          {userRecipes ? (
            userRecipes.map((item) => (
              <div className="col-3 col-3" style={{ marginBottom: "28px" }}>
                <RecipeCard
                  image={item?.photo}
                  name={item?.title}
                  id={item?.id}
                />
              </div>
            ))
          ) : (
            <h4 style={{ marginLeft: "70px", marginTop: "25px" }}>
              You don't have a recipe yet
            </h4>
          )}
        </div>
      </section>
      {/* <!-- profile photo & username end --> */}

      {/* <!-- footer start --> */}
      <Footer />
      {/* <!-- footer end --> */}
    </div>
  );
};

export default ProfileMyRecipe;
