/* if else 
    - neste conditions
    - nested if else 
*/

let willRain = false
let hasProbablity = true

if (willRain) {
    console.log("take umbrella");

} else {
    if (hasProbablity) {
        console.log(`you might need umbrella [🌂] `);
    } else {
        console.log("no need");
    }
}

/* if not padid, ram canot give exam */
/* if not paid but has schoolorship, ram can give exam */

let student = {
    name: "Ram",
    paidStatus: true,
    hasSchoolorship: true,
};

if (student.paidStatus) {
    console.log(`${student.name} can give exam [✔️]`);
} else if (student.hasSchoolorship) {
    console.log(`${student.name} can give exam [✔️]`);
} else {
    console.log(`${student.name} cannot give exam [✖️]`);
}



function getMonth(number) {
    if (number == 1) {
        return "Jan"
    } else if (number == 2) {
        return "Feb"
    } else if (number == 3) {
        return "Mar"
    } else if (number == 4) {
        return "Apr"
    } else if (number == 0) {
        return "Invalid Number, Please type between 1 - 12"
    } else {
        return "Invalid, Please input number between 1 - 12"
    }


}
console.log(getMonth(typeof));

/* Swtich Case */



