let todos = [
    {
        title: "variable",
        status: "completed ✔️", // true
    },
    {
        title: "array",
        status: "completed ✔️",
    },
    {
        title: "object",
        status: "completed ✔️",
    },
    {
        title: "loop",
        status: "pending ❌",
    },
    {
        title: "function",
        status: "pending ❌",
    },
];

todos.forEach((todo) => {
    // console.log(todo, index);
    if (todo.status.includes("completed")) {
        console.log(`${todo.title} is ${todo.status}`);
    } else {
        console.log(`${todo.title} is ${todo.status}`)
    }
})


/* html is completed */
/* js is pending */
/* react is pending */


/* 
    array functions // only work on "array"
        - forEach
        - map
        - filter
        - find
        - reduce
*/









// ############################################
// const numbers = [4,9,16,25]                #
// const newArr = numbers.map(Math.sqrt)      #
// console.log(newArr);                       #

// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr);