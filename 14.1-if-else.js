
/* Exercise #1 — Determine If a Number Is Positive
Scenario: Write a program that determines whether a given number is positive or not. */
let number = 3;
if (number > 0) {
    console.log(`The number ${number} is positive`);
} else {
    console.log(`The number ${number} is not positive`);
}


/* Exercise #2 — Check Even or Odd
Scenario: Write a program that checks if a number is even or odd. */
let num = 1; // NOT WORKED
if (num == 2, 4, 6, 8, 10) {
    console.log(`The number ${num} is even.`);
} else {
    console.log(`The number ${num} is odd.`);
}

/* Exercise #3 — Determine the Greater Number
Scenario: Write a program to determine the greater of two numbers. */

let num1 = 3;
let num2 = 5;
if (num1 > num2) {
    console.log(`num1 is greater than num2.`);
} else {
    console.log(`num2[${num2}] is greater than num1[${num1}].`);

}

/* Exercise #4 — Grade Calculator
Scenario: Write a program that assigns a letter grade based on a numerical grade. */

let marks = 19;
let grade;
if (marks >= 90) {
    grade = "A+"
} else if (marks >= 80) {
    grade = "A"
} else if (marks >= 70) {
    grade = "B+"
} else if (marks >= 60) {
    grade = "B"
} else if (marks >= 50) {
    grade = "C+"
} else if (marks >= 40) {
    grade = "C"
} else if (marks >= 30) {
    grade = "D+"
} else if (marks >= 20) {
    grade = "D"
} else if (marks < 20) {
    grade = "Fail"
}
console.log("Grade:", grade);

/* Exercise #5 - Vote Machine
Senario: Write a program that assigns a age based vote system. */

age = "21"
let votable = (age < 18) ?"too young":"old enough";
console.log(votable);

if (age < 18) {
    console.log(`too young`);
} else if (age >= 18){
    console.log(`old enough`);
}