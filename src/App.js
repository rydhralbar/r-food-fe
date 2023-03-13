import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotVerification from "./pages/ForgotVerification";
// import Maintenance from "./pages/Maintenance";
import CreateNewPassword from "./pages/CreateNewPassword";
import AddRecipe from "./pages/AddRecipe";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store/index";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";

const App = () => {
  let persistor = persistStore(store);
  // const maintenance = ["/forgot"]
  // const [ isPageMaintenance, setIspageMaintenance ] = useState(
  //   process.env.REACT_APP_IS_MAINTENANCE === "true" && maintenance.find((res) => res === document.location.pathname)
  // )

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      element: <Detail />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "add-recipe",
      element: <AddRecipe />,
    },
    {
      path: "forgot",
      element: <ForgotPassword />,
    },
    {
      path: "forgot/verification",
      element: <ForgotVerification />,
    },
    {
      path: "create-password",
      element: <CreateNewPassword />,
    },
  ]);

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

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
};

export default App;
