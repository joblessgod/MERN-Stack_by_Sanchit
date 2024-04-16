import React from "react"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Header from "./components/Header";

/* Pages Import */
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "pages",
        element: (
          <h1>Pages</h1>
        )
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
          <h1><Login/></h1>
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
