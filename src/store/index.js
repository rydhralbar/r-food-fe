import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipes";

const store = configureStore ({
  reducer: {
    recipe: recipeReducer,
  }
})

export default store;