import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Todo from "./TodoList"
import Users from "./Users"
import Products from "./Products"
import Counter from "./PlayGround/Counter"
import TodosList from "./PlayGround/TodosLIst"
import GoogleTabs from "./PlayGround/GoogleTabs"
import ShoppingList from "./PlayGround/ShoppingList"
import SshoppingList from "./PlayGround/Sshopping"
import APIproductList from "./data/APIproductList"
import APIproductListAutoLoad from "./data/APIproductListAutoLoad"
import TodoAPI from "./TodoAPI"
import RootElement from "./components/RootElement";


let title = "My React™ is getting training..."
let description = "This is the best description in the this lastroom here so you have to believe me"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        path: "",
        element: (
          <>
            <h4>Home is my Dom!</h4>
          </>
        ),
      },
      {
        path: "about",
        element: (
          <>
            <h4>ABout: who the hell are you what I should kmow</h4>
          </>
        ),
      },
      {
        path: "blogs",
        element: <h4>Habibi you want blogs click next tab</h4>,
        children: [
          {
            path: "/habibi",
            element: (
              <>
                <h4>Habibi Come to dubai 🌃</h4>
              </>
            ),
          },
        ]
      },
    ]
  },

]);

function App() {
  return (
    <>
      <div>

        <RouterProvider router={router} />
      </div>
      {/* <TodoAPI/> */}
      {/* <APIproductList /> */}
      {/* <APIproductListAutoLoad /> */}
      {/* <ShoppingList /> */}
      {/* <SshoppingList/> */}
      {/* <GoogleTabs/> */}
      {/* <TodosList/> */}
      {/* <Counter /> */}
      {/* <Products /> */}
      {/* <Users /> */}
      {/* <Todo /> */}
    </>

  )
}

export default App