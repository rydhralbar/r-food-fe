import React, { useState, useEffect } from "react";
import "../styles/addrecipe.css";
import Footer from "../components/organism/Footer";
import Navbar from "../components/organism/Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";

const AddRecipe = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [video, setVideo] = useState("");

  const profile = useSelector((state) => state?.profile);

  const addRecipeHandle = () => {
    setIsLoading(true);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${profile?.token?.payload}`,
      },
    };

    let data = new FormData();
    data.append("photo", photo);
    data.append("title", title);
    data.append("description", description);
    data.append("ingredients", ingredients);
    data.append("video", video);

    axios
      .post(`${process.env.REACT_APP_URL_BACKEND}/recipes/add`, data, config)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: `${res.data.message}`,
        });
        refreshPage();
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          localStorage.removeItem("persist:root");
          navigate("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: `${err.response.data.message}`,
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 90) {
        return document
          .querySelector(".navbar")
          .classList.add("navbar-background");
      } else {
        document.querySelector(".navbar").classList.remove("navbar-background");
      }
    });
  }, []);

  return (
    <div id="add-recipe-page">
      <Navbar />

      <section id="add-recipe">
        <div className="mb-4">
          <label
            htmlFor="formFileLg"
            className="form-label"
            style={{ fontWeight: 500 }}
          >
            Food Photo
          </label>
          <input
            accept="image/*"
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
            onChange={(e) => {
              setPhoto(e.target.files[0]);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            style={{ fontWeight: 500 }}
          >
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your food title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            style={{ fontWeight: 500 }}
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
            style={{ fontWeight: 500 }}
          >
            Ingredients
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="9"
            placeholder="Enter your food ingredients, example: rice, salt, sugar, etc"
            onChange={(e) => {
              setIngredients(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mb-2">
          <label
            htmlFor="formFileLg"
            className="form-label"
            style={{ fontWeight: 500 }}
          >
            Video Step
          </label>
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your video link"
            onChange={(e) => {
              setVideo(e.target.value);
            }}
          />
        </div>
        <button
          onClick={addRecipeHandle}
          type="button"
          className="btn btn-warning"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Send"}
        </button>
      </section>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </div>
  );
};

export default AddRecipe;
