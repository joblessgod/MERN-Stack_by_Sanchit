function createTodoAPI(e) {
    e.preventDefault();
    axios
        .post("https://todo-api-dom.vercel.app/api/todos/" {
            title: document.getElementById("title").value;
        })
        .then((resp) => {
            fetchTodos()
        })
}

function fetchTodos() {
    axios.get("https://todo-api-dom.vercel.app/api/todos")
        .then((resp) => {
            console.log(resp.data.data);

            let printOutput = ``;
            resp.data.data.forEach(el => {
                printOutput += `<li> ${el.title}</li>`
            })

            // printOutput += `<li>${resp.data.data}</li>`
            document.getElementById("todos-api-list").innerHTML = printOutput;
        })
    }    
    
    .catch (err => {
        console.log(err);
        document.getElementById("todos-api-list").innerHTML = "Try Again"
    })
    fetchTodos()