// set timeour function
/* const showPopUp = () => {           // slow way
    console.log(`show pop up`);
}
setTimeout(showPopUp, 0000)

setTimeout(() => {                  // fast way
    console.log(`2nd pop up`);      // both features are asyncronous function \
}, 0000); */


const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha", "Mukesh"]
// for (let index = 0; index < nepaliNames.length; index++) {
//     console.log(`${nepaliNames[index]} - ${index}`);
// }

nepaliNames.forEach(function (chimkandi, index) {
    console.log(chimkandi, index);
})


let numbers = [1, 2, 3, 4, 5]
numbers.forEach(function (bomb) {   // function way
    console.log(bomb);
})


let numberss = [1, 2, 3, 4, 5]
numberss.forEach((bomb) => {         // arrow way
    console.log(bomb);
})



