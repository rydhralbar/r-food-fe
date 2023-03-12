import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as recipeReducer from "../../store/reducer/recipe";
import "../../styles/home.css";

const RecipeCardHome = (props) => {
  const navigate = useNavigate();

  // const navigateDetail = () => {
  //   navigate(`/detail/${item?.slug}`, {
  //     state: {
  //       data: item
  //     }
  //   })
  // }

  // const { item } = props

  // return (
  //   <div>
  //     {/* <Link to={`/detail/${item?.slug}`} style={{textDecoration: "none", color: "#212529"}}>  */}
  //       <div onClick={navigateDetail} className="clickable-image-home">
  //             <img
  //               src={item?.photo || require("https://mhscattalk.com/wp-content/uploads/2019/12/no-food-plate-900x600.jpg")}
  //               height="80%"
  //               width="80%"
  //               alt="Chicken Kare"
  //             />
  //             <h2 className="image-title-home" style={{color: "white"}}>
  //               {item?.title || "Unknown food"}
  //             </h2>
  //       </div>
  //     {/* </Link> */}
  //   </div>
  // )

  const dispatch = useDispatch();
  const { image, name, id } = props;

  return (
    <div
      className="clickable-image-home"
      onClick={() => {
        axios
          .get(`${process.env.REACT_APP_URL_BACKEND}/recipes/${id}`)
          .then(({ data }) => {
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
        alt="Placeholder"
      />
      <h2 className="image-title-home" style={{ color: "white" }}>
        {name || "Unknown Food"}
      </h2>
    </div>
  );
};

export default RecipeCardHome;
