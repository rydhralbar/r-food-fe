import React, { useEffect, useState } from "react";
import "../../styles/component-styles/detail.css";
import Swal from "sweetalert2";

const FoodRecipe = (props) => {
  const { title, photo, ingredients } = props;

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
