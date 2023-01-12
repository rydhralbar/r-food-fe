import React from "react";

const FoodRecipe = (props) => {
  const { title, photo, ingredients } = props

  return (
    <div>
        <h1>{title}</h1>
        <img className="title-img" src={photo} alt="Food"/>
        <h2>Ingredients</h2>
        <p>
          { ingredients }
        </p>
    </div>
  )
}

export default FoodRecipe;