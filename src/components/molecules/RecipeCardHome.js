import React from "react";
import { Link } from "react-router-dom";

const RecipeCardHome = (props) => {
  const { image, name, url } = props

  return (
    <div>
      <Link to={`/detail/${url}`} style={{textDecoration: "none", color: "#212529"}}> 
        <div className="clickable-image-home">
              <img
                src={image || require("../../images/chicken-kare.webp")}
                height="80%"
                width="80%"
                alt="Chicken Kare"
              />
              <h2 className="image-title-home" style={{color: "white"}}>
                {name || "Unknown food"}
              </h2>
        </div>
      </Link>
    </div>
  )
}

export default RecipeCardHome;