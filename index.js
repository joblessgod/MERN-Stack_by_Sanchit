/* 
let student = {
    name: "ram",
    paidStatus: false,
    hasScholorship: true,
    fulFillAttendence: false,
}
let { name, paidStatus, hasScholorship, fulFillAttendence } = student
// New Way
if ((paidStatus || hasScholorship) && fulFillAttendence) {
    console.log(`${name} can enroll.`);
} else {
    console.log(`${name} cannot enroll.`);
}


function printSum(num1=0, num2=0, num3=0, num4=0){
    return num1+num2+num3+num4;
}
console.log(printSum(2,3));
console.log(printSum(2,3,4));
console.log(printSum(2,3,4,5));
*/


/* Practice */

const sum = (num1, num2, ...rest) => {
    console.log({rest});
    return num1 + num2;
}
console.log(sum(2, 3, 100, 200, 300));