import React from "react";
import { CompletedIcon, PendingIcon } from "./CustomIcon"
import SingleTodo from "./SingleTodo"
import "./main.css"

let TodoLists = [
    {
        title: "html",
        description: "This is description and you have to believe.",
        status: true
    },
    {
        title: "java script",
        description: "This is description and you have to believe.",
        status: false
    },
    {
        title: "git",
        description: "This is description and you have to believe.",
        status: true
    },
    {
        title: "css",
        description: "This is description and you have to believe.",
        status: false
    },
    {
        title: "js",
        description: "This is description and you have to believe.",
        status: true
    },
    {
        title: "js v2",
        description: "This is description and you have to believe.",
        status: false
    },
    {
        title: "js",
        description: "This is description and you have to believe.",
        status: true
    },
]


export default function Todo() {
    return (
        <>
            {/* Fragment */}
            <h1>Todo</h1>
            <div className="todos">
                {/*  using component */}
                {TodoLists.map((el) => {
                    return (
                        <>
                            <SingleTodo
                                title={el.title} status={el.status ? <CompletedIcon /> : <PendingIcon />}
                                description={el.description}
                            />


                        </>
                    )
                })
                }


            </div>
        </>
    )
}