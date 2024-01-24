// console.log("Hi \n  Hi");
/* compatision operators] */
/* 
console.log("one" == "one");
console.log(" 1" == "1");

let HI = 100
console.log({HI});
HI = HI + 1


console.log(HI);
console.log(HI += 1);
 */

/* pre-increament & post-increment*/
/* let age = 20
//  number++
//  ++number
console.log(age++); // updates number in backgorund
console.log(++age); // instant number updates
 */
/* 
comfitional statements 
if else
*/
/* 
let isCold = true;

if (isCold) {
    console.log("need jacket");
} else {
    console.log("no need jacket.");
}


let num1 = 1
let num2 = 2
// console.log(num1 < num2); // no need
if (num1 > num2) {
    console.log("Less");
} else {
    console.log("Great");
}
 */
let employee1 = {  // Don't use array
    name: "ram",
    role: "reception",
};
let employee2 = {
    name: "sita",
    role: "manager",
};
let employee3 = {
    name: "hari",
    role: "super viser",
}

function vaultAccess(employee) {
    let allowedRole = "manager"
    if (employee.role == allowedRole) {
        console.log(`${employee.name} can acces vault.`);
    } else {
        console.log(`${employee.name} can't access vault.`);
    }
}
vaultAccess(employee1)
vaultAccess(employee2)
vaultAccess(employee3)