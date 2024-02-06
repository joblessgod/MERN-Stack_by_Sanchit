const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha", "Mukesh"]

let dummyUsers = []
for (let index = 0; index < nepaliNames.length; index++) {
    const element = nepaliNames[index];
    // dummyUsers.push(element) // no need to push 😀
    let names = nepaliNames[index]
    dummyUsers.push({
        name: `${names}`,
        email: `${names.toLowerCase()}@gmail.com,`,
        password: `${names.toLowerCase()}${index}`,
    })
}

// console.log(nepaliNames); // 1st thing

console.log({dummyUsers});

/* 

TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/

