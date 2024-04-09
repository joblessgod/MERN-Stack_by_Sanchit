// let numbers = [1, 2, 3]
// let totalSum = 0
// numbers.forEach(el => {
//     totalSum += el
// })

// console.log(totalSum);


// let todoes = [" react", " express"]
// let printOutout2 = []

// todoes.forEach(el => {
//     printOutout2 += el
// })
// console.log(printOutout2);


let todos = []

// add system
function addTodo(event) {
    event.preventDefault()
    let inputWord = document.getElementById("input-title").value;
    // console.log("add", inputWord);
    todos.push(inputWord)

    convertTodosToList()
}

// delete system
function deleteTodo(deleteIndex) {
    todos = todos.filter((el, index) => index != deleteIndex)

    convertTodosToList()                    
}


// shortize system
function convertTodosToList() {
    let printOutout = ``

    todos.forEach((inputWord, index) => {
        printOutout += `<li>${inputWord} <button onclick="deleteTodo(${index})">Delete (After complete)</button> </li>`
    })  
    // console.log(printOutout);
    document.getElementById("todos-list").innerHTML = printOutout;
}

// localstorage in browser

// ALSO info about Postman download for windows 🪟