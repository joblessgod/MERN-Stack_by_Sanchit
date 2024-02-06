let todoTask = []

function addTask(event) {
    event.preventDefault()
    let searchWord = document.getElementById("inputTask").value;
    console.log("added:", searchWord);
    todoTask.push(searchWord);

    convertingTodoIntoList()
}

function removeTodo(removeIndex) {
    todoTask = todoTask.filter((el, index) => index != removeIndex)

    convertingTodoIntoList()
}

    
function convertingTodoIntoList() {
    let outputResult = ``

    todoTask.forEach((searchWord, index) => {
        outputResult += `<li>${searchWord} <button onclick = "removeTodo(${index})" >Remove</button></li>`
    })
    document.getElementById("dtodo-api-list").innerHTML = outputResult
}










