import { useState } from "react";
import { AddTask } from "../CustomIcon";
import "../main.css"

export default function TodosList() {
    let initialTodos = []

    const [todos, setTodos] = useState(initialTodos)

    const [todoTitle, setTitle] = useState("This is what s/he typing")



    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.title.value);

        let temp = [...todos];
        temp.push(todoTitle);
        setTodos(temp);

    }

    function handleInputChange(event) {
        setTitle(event.target.value)
    }

    function deleteTodo(deletableIndex) {
        /* slice method */
        // let temp = [...todos];
        // temp.slice(idx, 1)
        // setTodos(temp)

        /* filter method */
        let newTodos = todos.filter((el, index) => {
            if (index != deletableIndex) {
                return true;
            }
        });
        setTodos(newTodos);
    }


    // console.log("rendered");

    return (
        <>
            <h2>TodosList</h2>

            <div>
                <span>user is typing: {todoTitle}  </span> <br />
                <form onSubmit={handleSubmit} >
                    <input onChange={handleInputChange} name="title" type="text" placeholder="Add new todo here..." required />
                    <button type="submit" className="btn" ><AddTask /></button>
                </form>
                <ul>

                    {todos.map((el, idx) => {
                        return (
                            <li key={idx} >{el}
                                <button
                                    onClick={() => {
                                        deleteTodo(idx)
                                    }} className="Delete-btn">Delete</button>
                            </li>
                        )
                    })}
                </ul>
                {/* 
                {
                    todos.length == 0 ? <p>#Please add some todos here.</p> : null
                }
                 */}
                {
                    todos.length == 0 && <p>#Please add some todos here.</p>
                }


            </div >
        </>

    )
}