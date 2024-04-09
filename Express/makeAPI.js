const express = require("express")
const app = express()
// const retrive = require("./APIs/products")
const { checkAuth, checkValidRole } = require("./1auth") // destructing

let lastId = 2;

let todos = [
    {
        id: 1,
        title: "html",
        status: true,
    },
    {
        id: 2,
        title: "css",
        status: false,
    },
];
/* middleware
     - simply a function which has access to req and res 
        and can modify them 
     - next: points to the next upcomming valid middleware
*/
// app.use(checkAuthentication); // global middleware
// app.use(checkValidRole); // global middleware
app.use(express.json()); // sets up req.body // () =>{  return (req,res,next) =>{ req.body = postman body }  }

const createTodos = (req, res) => {
    let inputTitle = req.body.title?.trim();
    // let todos = ["html","css"]
    // inputTitle = "html"
    if (!inputTitle) {
        return res.status(400).send({
            errors: [
                {
                    key: "title",
                    msg: "this field is required.", // TODO: send already exits
                },
            ],
        });
    }
    // let matched = todos.find(el =>el === inputTitle) // html
    let matched = todos.some((el) => el === inputTitle); // true
    if (matched) {
        return res.status(400).send({
            errors: [
                {
                    key: "title",
                    msg: "already exists",
                },
            ],
        });
    }

    /* input validation */

    todos.push(req.body.title);
    lastId++

    todos.push({
        id: lastId++,
        title: req.body.title
    });
    return res.send("todos creatred");
};
// let inputTitle = "html"
// console.log(createTodos);

// app.use(checkAuth) // golbal middleware
// app.use(checkValidRole) //

app.use(express.json()) //* it set up

// const createTodos = (req, res) => {
//     let inputTitle = req.body.title?trim()

//     // let todos = ["httml", "css"] 
//     // inputTitle = "html"

//     if (!inputTitle) {
//         return res.status(400).send({
//                 errors: [
//                     {
//                         key: "title"
//                         msg: "this fiend is reqiuired!" // TODO: sed already exists
//                     },
//                 ],
//             })
//     }
//     // let matched = todos.find((el) => el == inputTitle) // html
//     let matched = todos.some((el) => el == inputTitle) // true

//     if (matched) {
//         return res.send(400).send({
//             errors: [
//                 {
//                     key: "title"
//                     msg: "already exits"
//                 }
//             ]
//         })
//     }

//     /* input validation */

//      }

app.get('/api/todos/', (req, res) => {
    console.log("respnse: list of todos");
    res.send(todos)
})

app.put('/api/todos/:id', (req, res) => {
    /* code t update particular todo item from todos */
    /* map */

    // todos // [{id: 1, "html"},{id:2, "css"}]

    todos = todos.map(el => {
        if (el.id == req.params.id) {
            let newData = {
                title: req.body.title,
                status: req.body.status,
            }
            return newData;
        } else {
            return el;
        }
    })
    res.send(`update ${req.params.id}`)
})


app.post('/api/todos/', (req, res) => {

    console.log('response: created of todos ');
    
    return res.send("todos created: true")
})

// use filter to delete 
app.delete('/api/todos//reset', checkAuth, checkValidRole, (req, res) => {
    console.log('response: deleted of todos ');
    todos = []
    return res.status(204).send()
})


app.listen(8000, () => { // if multiple powershell has open then we should change app.listen(8000) to 8080 like that....
    console.log("Sir, Server started....");
})
