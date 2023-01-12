import React from "react";
import { Link } from "react-router-dom";

const RecipeCardProfile = (props) => {
  const { image, name, url } = props

  return (
    <div>
      <Link to={`/detail/${url}`} style={{textDecoration: "none", color: "#212529"}}> 
        <div className="clickable-image">
              <img
                src={image || "./images/unknown-food.webp"}
                height="80%"
                width="80%"
                alt="Food"
              />
              <h2 className="image-title" style={{color: "white"}}>
                {name || "Unknown food"}
              </h2>
        </div>
      </Link>
    </div>
  )
}

export default RecipeCardProfile;