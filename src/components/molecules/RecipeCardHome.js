import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/homeguest.css"

const RecipeCardHome = (props) => {
  const navigate = useNavigate();

  const navigateDetail = () => {
    navigate(`/detail/${item?.slug}`, {
      state: {
        data: item
      }
    })
  }

  const { item } = props
 
  return (
    <div>
      {/* <Link to={`/detail/${item?.slug}`} style={{textDecoration: "none", color: "#212529"}}>  */}
        <div onClick={navigateDetail} className="clickable-image-home">
              <img
                src={item?.photo || require("https://mhscattalk.com/wp-content/uploads/2019/12/no-food-plate-900x600.jpg")}
                height="80%"
                width="80%"
                alt="Chicken Kare"
              />
              <h2 className="image-title-home" style={{color: "white"}}>
                {item?.title || "Unknown food"}
              </h2>
        </div>
      {/* </Link> */}
    </div>
  )
}

export default RecipeCardHome;