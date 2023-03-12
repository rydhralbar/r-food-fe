import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  token: null,
  isLogin: false,
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
    setIsLogin: (state, payload) => {
      state.isLogin = payload;
    },
  },
});

export const { setProfile, setToken, setIsLogin } = profileSlice.actions;

export default profileSlice.reducer;
