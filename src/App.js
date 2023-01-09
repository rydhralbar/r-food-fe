import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomeLogged from "./pages/HomeLogged";
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

function App() {
  // const maintenance = ["/forgot/verification"]

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
      path: "signup",
      element: <Register />,
    },
    {
      path: "home",
      element: <HomeLogged />
    },
    {
      path: "/detail",
      element: <DetailGuest />
    },
    {
      path: "/home/detail",
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
      path: "/add-recipe",
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
      path: "/create-password",
      element: <CreateNewPassword />
    }
  ])

  // if(true) {
  //   return <Maintenance />;
  // } else {
  //   return <RouterProvider router={router} />;
  // }

  return <RouterProvider router={router} />;
}

export default App;
