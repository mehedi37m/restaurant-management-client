import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Page/Home/Home";
import Login from "../Component/Login/Login";
import Register from "../Component/Register/Register";

import AddItems from "../Component/ServerItems/AddItems/AddItems";
import AllFoodCard from "../Page/AllFood/AllFoodCard";
import CardDetails from "../Page/AllFood/CardDetails";
import UpdateItems from "../Component/ServerItems/UpdateItems/UpdateItems";
import OrderItems from "../Component/ServerItems/OrderItems/OrderItems";

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
            path: "/allItems",
            element:<AllFoodCard></AllFoodCard>
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
          path:"/addItems",
          element:<AddItems></AddItems>

        },
        {
          path:"/details/:id",
          element:<CardDetails></CardDetails>,
          loader:() => fetch('http://localhost:5000/items')
        },
        {
          path:"/updateItems/:id",
          element:<UpdateItems></UpdateItems>,
          loader:({params}) => fetch(`http://localhost:5000/items/${params.id}`)
        },
        {
          path:"/orderFood",
          element:<OrderItems></OrderItems>
        }

      ]
    },
  ]);
 

export default Routes;