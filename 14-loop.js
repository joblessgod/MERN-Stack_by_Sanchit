/* 
let todoList = [
    {
        title: "html",
        status: true,
    },
    {
        title: "loop",
        status: false,
    },
    {
        title: "Java",
        status: false,
    },
]

for (let index = 0; index < 3; index++) {
    if (todoList[index].status) {
        console.log(`${todoList[index].title} is comepleted.`);
    } else {
        console.log(`${todoList[index].title} isnot comepleted.`);
    }
}
*/

/* 
function multiplyNum(num) {
    for (let index=1; index<11; index++) {
        console.log(`${num} * ${index} = ${num * index}`);
    }
}
multiplyNum(7)

*/
/* 
function findTripleMultiply(num, index) {
    for (let index = 1; index < 11; index++) {
        console.log(`${num} * ${index} = ${num * index}`);
    }
}
findTripleMultiply(2, 3)
*/

/* 
function spam() {
    for (let count = 1; count <=100; count++) {
        console.log(`${count} MERN Stack`)
    }
}
spam()
*/

// Home Practice //
/* 
let user1 = {
    username: "ram",
    password: "password",
};
let user2 = {
    username: "hari",
    password: "shyam@2023",
}

 
function login(inputUser, inputUsername, inputPassword) {
    if (inputUser.username == inputUsername) {
        if (inputUser.password == inputPassword) {
            console.log(`${inputUser.username} can login.`);
        } else {
            console.log(`${inputUser.username} cannot login.`);
        }
    } else {
        console.log(`${inputUser.username} cannot login.`);
    }
}
login(user1, "ram", "ram@9999");
login(user2, "shyam", "shyam@2023");


function login(inputUser, inputUsername, inputPassword) {
    if (inputUser.username == inputUsername && inputUser.password == inputPassword) {
        console.log(`${inputUser.username} can login `);
    } else {
        console.log(`${inputUser.username} canot login.`);
    }
}
login(user1, "ram", "Password")
login(user1, "Ram", "password")
login(user1, "ram", "password")
login(user2, "hari", "shyam@2023")
login(user1, "", "")
 */

let users = [
    { username: 'john_doe', password: 'pass123', email: 'john@example.com' },
    { username: 'alice_smith', password: 'securePwd', email: 'alice@example.com' },
    { username: 'bob_jones', password: '12345pass', email: 'bob@example.com' },
    { username: 'emma_jackson', password: 'strongPwd', email: 'emma@example.com' }
];

function printCheckLogin(inputUsername, inputPassword, inputEmail) {
    for (let index = 0; index < users.length; index++)
        if (users[index].username == inputUsername && users[index].email == inputEmail)
            if (users[index].password == inputPassword) {
                console.log(`${inputUsername} login successfull.`);
            } else {
                console.log(`[ℹ️] Please, input vaild information!`);
            }
}
printCheckLogin("john_doe", "pass123", "john@example.com")
printCheckLogin("alice_smith", "securePwd", "alice@example.com")
printCheckLogin("bob_jones", "12345pass", "bob@example.com")
printCheckLogin("emma_jackson", "strongPwd", "emma@example.com")
