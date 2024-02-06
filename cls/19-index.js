/* let numbers = [1, 2, 3]
let doubleNumbers = []

numbers.forEach((element) => {   // forEach way
    doubleNumbers.push(element * 2)
});


numbers.map((element) => {       // map way
    doubleNumbers.push(element * 3)
})
console.log(doubleNumbers); // [2,4,6]




let fiftherNumbers = numbers.map((element) => {   // we can use map but need to use "return" not like doubleNumbes.push 👍🏽
    return element * 5
})
console.log(fiftherNumbers);
 */

// const nepaliNames = ["Aarav", "Bikash", "Chitra", "Danisha"]         // forEach way
// let fakeDatas = []
// nepaliNames.forEach((element, idx) => {
//     fakeDatas.push({ name: element, email: element.toLowerCase() + "@gmail.com", password: element.toLowerCase() + idx })
// });

// console.log(fakeDatas);


/* const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha", "Mukesh"]         // Map way

let fakeDatasMap = nepaliNames.map((element, idx) => {
    return ({ name: element, email: element.toLowerCase() + "@gmail.com", password: element.toLowerCase() + idx })
})
console.log(fakeDatasMap);
*/


let wholeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = wholeNumbers.filter(element => element % 2 == 0);  /// Using Filter method
let oddNumbers = wholeNumbers.filter(element => element % 2 !== 0);
// oddNumbers = wholeNumbers.filter(function (element) { element % 2 !== 0 }); // function way has a problem

// ################################################
// let evenNumbers = []
// let oddNumbers = []
// wholeNumbers.forEach(element => {       /// using forech method
//     if (element % 2 == 0) {
//         evenNumbers.push(element)
//     } else {
//         oddNumbers.push(element)
//     }
// });

console.log(evenNumbers); // using filter method
console.log(oddNumbers); // using filter method



let countries = [
    {
        "code": "af",
        "name": "Afghanistan",
        "path": "afghanistan"
    },
    {
        "code": "jp",
        "name": "Japan",
        "path": "japan"
    },
    {
        "code": "zm",
        "name": "Zambia",
        "path": "zambia"
    },
    {
        "code": "zw",
        "name": "Zimbabwe",
        "path": "zimbabwe"
    }
]

countries.find