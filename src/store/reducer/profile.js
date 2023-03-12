import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  token: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, payload) => {
      state.profile = payload;
    },
    setToken: (state, payload) => {
      state.token = payload;
    },
  },
});

export const { setProfile, setToken } = profileSlice.actions;

export default profileSlice.reducer;
