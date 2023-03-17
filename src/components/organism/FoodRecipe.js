import React, { useEffect, useState } from "react";
import "../../styles/component-styles/detail.css";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FoodRecipe = (props) => {
  const { idRecipe, userId, title, photo, ingredients } = props;

  const profile = useSelector((state) => state.profile);
  const token = profile?.token?.payload;

  const userIdRedux = profile?.profile?.payload?.id;
  const navigate = useNavigate();

  const [ingredientList, setIngredientList] = useState([]);

  const maintenance = () => {
    Swal.fire({
      icon: "error",
      title: "This feature is currently under maintenance !",
      confirmButtonText: "OK",
      confirmButtonColor: "#ffc720",
    });
  };

  useEffect(() => {
    if (ingredients) {
      setIngredientList(ingredients.split(", "));
    }
  }, [ingredients]);

  const deleteRecipe = () => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .delete(
        `${process.env.REACT_APP_URL_BACKEND}/recipes/${idRecipe}`,
        config
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Nice",
          text: "Recipe deleted successful",
          confirmButtonText: "OK",
          confirmButtonColor: "#ffc720",
        }).then((_res) => {
          if (_res.isConfirmed) {
            navigate("/profile");
            window.scrollTo(0, 0);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: "Recipe delete failed, please try again later",
          confirmButtonText: "OK",
          confirmnButtonColor: "#ffc720",
        });
      });
  };
  return (
    <div id="detail-page">
      <h1>{title}</h1>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-8">
            <div style={{ position: "relative" }}>
              <img className="title-img" src={photo} alt="Food" />
              <div className="d-flex mark-recipe">
                <div onClick={maintenance}>
                  <img
                    className="like-logo"
                    src="/images/like-logo.webp"
                    alt="Like"
                  />
                </div>
                <div onClick={maintenance}>
                  <img
                    className="favorite-logo"
                    src="/images/favorite-logo.webp"
                    alt="Favorite"
                  />
                </div>
                {/* {isHisRecipe && ( */}
                <div>
                  <img
                    className="delete-logo"
                    src="/images/delete-logo.webp"
                    alt="Delete"
                    onClick={() => {
                      if (!profile?.isLogin?.payload) {
                        Swal.fire({
                          icon: "error",
                          title: "Login required!",
                          confirmButtonText: "OK",
                          confirmButtonColor: "#ffc720",
                        });
                      } else if (userId !== userIdRedux) {
                        Swal.fire({
                          icon: "error",
                          title: "Oops..",
                          text: "You cannot access this feature",
                          confirmButtonText: "OK",
                          confirmButtonColor: "#ffc720",
                        });
                      } else {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          confirmButtonColor: "#ffc720",
                          confirmButtonText: "Yes, delete it!",
                          cancelButtonText: "No, cancel!",
                          showCancelButton: true,
                          reverseButtons: true,
                        }).then((result) => {
                          if (result.isConfirmed) {
                            deleteRecipe();
                          } else if (
                            result.dismiss === Swal.DismissReason.cancel
                          ) {
                            Swal.fire({
                              icon: "error",
                              title: "Cancelled",
                              text: "Your recipe will not be deleted",
                              confirmButtonText: "OK",
                              confirmButtonColor: "#ffc720",
                            });
                          }
                        });
                      }
                    }}
                  />
                </div>
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Ingredients</h2>
      <ul style={{ marginLeft: "5%", marginTop: "40px" }}>
        {ingredientList.map((item, key) => (
          <>
            <li>{item}</li>
            <br />
          </>
        ))}
      </ul>
    </div>
  );
};

export default FoodRecipe;
