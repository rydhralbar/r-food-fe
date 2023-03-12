import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  id: null,
};

const recipe = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setData(state, payload) {
      state.data = payload;
    },
    setId(state, payload) {
      state.id = payload;
    },
  },
});

export const { setData, setId } = recipe.actions;
export default recipe.reducer;
