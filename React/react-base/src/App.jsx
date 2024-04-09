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

let title = "My React™ is getting training..."
let description = "This is the best description in the this lastroom here so you have to believe me"

function App() {
    return (
        <>
            <TodoAPI/>
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
            {/* <h1>{title}</h1> */}
            {/* <p>{description}</p> */}

        </>

    )
}

export default App