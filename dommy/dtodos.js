let dummyTodos = []

function addDummyTodo(event) {
    event.preventDefault()
    let taskWord = document.getElementById("dummyTodo").value;
    console.log("added", taskWord);
    dummyTodos.push(taskWord)

    let dummyOutput = ``;

    dummyTodos.forEach((taskWord) => {
        dummyOutput += `<li>${taskWord}</li>`

        // * console.log(dummyOutput); // log console commands dummyOutput
    })
    document.getElementById("todos-list").innerHTML = dummyOutput;
}

function deleteDummyTodo(){
    
}
