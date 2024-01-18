// let todos = [
//     {
//       title: "varaible",
//       status: "completed",
//       createAt:"2024-01-01"
//     },
//     {
//       title: "array",
//       status: "completed",
//       createAt:"2024-01-02"
//     },
//     {
//       title: "object",
//       status: "completed",
//       createAt:"2024-01-04"
//     },
//     {
//       title: "loop",
//       status: "pending",
//       createAt:"2024-01-05"
//     },
//     {
//       title: "function",
//       status: "pending",
//       createAt:"2024-01-05"
//     },
//   ];

/* use template literal / string literal */
/* 
    varaible is complted
    array is complted
    object is complted
    loop is complted
    function is complted
 
*/
/* 
    varaible crated at 2024-01-01 is complted
    array crated at 2024-01-01 is complted
    object crated at 2024-01-01 is complted
    loop crated at 2024-01-04 is complted
    function crated at 2024-01-05 is complted
*/

let todoList = [
    {
        // title: "Varible",
        title: {
            name: "variable",
            description: "A JavaScript variable is a named storage for holding data values.",
        }
        // description: "A JavaScript variable is a named storage for holding data values.",
        status: "completed",
        createdAt: "2024-01-07",
    },
    {
        title: "array",
        status: "completed",
        createdAt: "2024-01-08",
    },
    {
        title: "object",
        status: "completed",
        createdAt: "2024-01-14",
    },
    {
        title: "loop",
        status: "pending",
        createdAt: "2024-01-20",
    },
    {
        title: "funtion",
        status: "pending",
        createdAt: "2024-01-24",
    },
    {
        title: "Git",
        status: "pending",
        createdAt: "2024-01-17",
    }
]

console.log(todoList);
console.log(`                -- More Info --`);
console.log(`${todoList[0].title[0].name} created at ${todoList[0].createdAt} is ${todoList[0].status}!`);
// console.log(`Description: ${todoList[0].description}`);
console.log(`${todoList[1].title} created at ${todoList[1].createdAt} is ${todoList[1].status}!`);
console.log(`${todoList[2].title} created at ${todoList[2].createdAt} is ${todoList[2].status}!`);
console.log(`${todoList[3].title} created at ${todoList[3].createdAt} is ${todoList[3].status}!`);
console.log(`${todoList[4].title} created at ${todoList[4].createdAt} is ${todoList[4].status}!`);
console.log(`${todoList[5].title} created at ${todoList[4].createdAt} is ${todoList[5].status}!`);

