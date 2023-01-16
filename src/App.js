import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import DetailLogged from "./pages/DetailLogged";
import ProfileMyRecipe from "./pages/ProfileMyRecipe";
import ProfileSavedRecipe from "./pages/ProfileSavedRecipe";
import DetailGuest from "./pages/DetailGuest";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotVerification from "./pages/ForgotVerification";
import ProfileLikedRecipe from "./pages/ProfileLikedRecipe";
// import Maintenance from "./pages/Maintenance";
import CreateNewPassword from "./pages/CreateNewPassword";
import AddRecipe from "./pages/AddRecipe";
import EditProfile from "./pages/EditProfile";

function App() {
  // console.log(process.env.REACT_APP_IS_MAINTENANCE)
  // const maintenance = ["/forgot"]
  // const [ isPageMaintenance, setIspageMaintenance ] = React.useState(
  //   process.env.REACT_APP_IS_MAINTENANCE === "true" && maintenance.find((res) => res === document.location.pathname)
  // )

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "logout",
      element: <Logout />,
    },
    {
      path: "signup",
      element: <Register />,
    },
    {
      path: "detail/:id",
      element: <DetailGuest />
    },
    {
      path: "home/detail",
      element: <DetailLogged />
    },
    {
      path: "profile",
      element: <ProfileMyRecipe />
    },
    {
      path: "profile/saved-recipe",
      element: <ProfileSavedRecipe />
    },
    {
      path: "profile/liked-recipe",
      element: <ProfileLikedRecipe />
    },
    {
      path: "add-recipe",
      element: <AddRecipe />
    },
    {
      path: "forgot",
      element: <ForgotPassword />
    },
    {
      path: "forgot/verification",
      element: <ForgotVerification />
    },
    {
      path: "create-password",
      element: <CreateNewPassword />
    },
    {
      path: "edit-profile",
      element: <EditProfile />
    }
  ])

  // if(true) {
  //   return <Maintenance />;
  // } else {
  //   return <RouterProvider router={router} />;
  // }

  // if(isPageMaintenance){
  //   return (
  //     <Maintenance 
  //       maintenanceList = { maintenance }
  //       turnOnMaintenance = {() => setIspageMaintenance(true)}
  //       turnOffMaintenance = {() => setIspageMaintenance(false)}
  //     />
  //   )
  // } else {
  //   return <RouterProvider router={router} />;
  // }

  return <RouterProvider router={router} />;
}

export default App;
