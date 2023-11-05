import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";
import MyProfile from "../Profile/MyProfile/MyProfile";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/register",
            element:<Register></Register>
        },
        {
          path: "/profile",
          element:<MyProfile></MyProfile>
        }

      ]
    },
  ]);
 

export default Routes;