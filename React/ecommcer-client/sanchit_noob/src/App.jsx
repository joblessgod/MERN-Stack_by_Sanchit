import React from "react"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import RootElement from "./Components/RootElement";

/* Pages Import */
import Home from "./pages/Home";
import Pages from "./pages/Pages";
import Blogs from "./pages/Blogs";
import Products from "./pages/Products";
import Contact from "./pages/Contact";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "pages",
        element: <Pages />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "blogs",
        element: <Blogs />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "login",
        element: (
          <h1>Login</h1>
        ),
      }
    ]
  },
]);


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
