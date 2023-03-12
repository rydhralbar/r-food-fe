import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as recipeReducer from "../../store/reducer/recipe";

const RecipeCardProfile = (props) => {
  const { image, name, id } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="clickable-image"
        onClick={() => {
          axios
            .get(`${process.env.REACT_APP_URL_BACKEND}/recipes/${id}`)
            .then(({ data }) => {
              console.log("bisa");
              dispatch(recipeReducer.setData(data?.data?.[0]));
              dispatch(recipeReducer.setId(id));
              navigate(`/detail/${id}`);
              window.scrollTo(0, 0);
            });
        }}
      >
        <img
          src={image || "./images/unknown-food.webp"}
          height="80%"
          width="80%"
          alt="Food"
        />
        <h2 className="image-title" style={{ color: "white" }}>
          {name || "Unknown food"}
        </h2>
      </div>
    </div>
  );
};

export default RecipeCardProfile;
