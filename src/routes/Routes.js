import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/Courses/FAQ";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/questions",
        element: <FAQ />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
