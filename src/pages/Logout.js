import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  React.useState(() => {
    setTimeout(() => {
      localStorage.clear();
      navigate("/");
      // localStorage.removeItem("isLogin");
      // localStorage.removeItem("token");
      // localStorage.removeItem("profile");
    }, 1500)
  }, [])

  return (
    <div >
      <div style={{display: "flex", justifyContent: "center", marginTop: "40vh"}}>
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <h1 style={{display: "flex", justifyContent: "center"}}>Please wait...</h1>
    </div>
  )
}

export default Logout;