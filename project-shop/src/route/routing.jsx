import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import DetailProduct from "../pages/DetailProduct/DetailProduct";
import ListProduct from "../pages/Product/ListProduct";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/product",
        element: <ListProduct />,
      },
      {
        path: "/product/:id",
        element: <DetailProduct />,
      },
      {
        path: "/product/category/:product",
        element: <ListProduct />,
      },
      {
        path: "/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
