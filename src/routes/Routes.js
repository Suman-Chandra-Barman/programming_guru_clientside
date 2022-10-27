import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import FAQ from "../pages/FAQ/FAQ";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CourseDetails from "../pages/Courses/CourseDetails";
import Checkout from "../pages/Checkout/Checkout";
import PrivetRoute from "./PrivetRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Courses />,
        loader: () =>
          fetch("https://programming-guru-server.vercel.app/courses"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () =>
          fetch("https://programming-guru-server.vercel.app/courses"),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails />,
        loader: ({ params }) =>
          fetch(
            `https://programming-guru-server.vercel.app/courses/${params.id}`
          ),
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
      {
        path: "/checkout",
        element: (
          <PrivetRoute>
            <Checkout />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default routes;
