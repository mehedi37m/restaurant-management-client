import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element:<Home></Home>
        }
      ]
    },
  ]);
 

export default Routes;