import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as profileReducer from "../store/reducer/profile";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    const isLogin = profile?.data?.payload;
    const token = profile?.id?.payload;

    if (isLogin && token) {
      navigate("/");
    }
  }, [profile, navigate]);

  React.useState(() => {
    setTimeout(() => {
      dispatch(profileReducer.setProfile(null));
      dispatch(profileReducer.setToken(null));
      navigate("/");
    }, 1500);
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Please wait...
      </h1>
    </div>
  );
};

export default Logout;
