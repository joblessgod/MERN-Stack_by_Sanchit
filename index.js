/* 
function getMonth(monthNumber) {
    if
    else if (monthNumber == 1) {
        return "Jan"
    } else if (monthNumber == 2) {
        return "Feb"
    } else if (monthNumber == 3) {
        return "Mar"
    } else if (monthNumber == 4) {
        return "Apr"
    } else if (monthNumber == 0) {
        return "Invalid Number, Please type between 1 - 12"
    } else {
        return "Invalid, Please input number between 1 - 12"
    }


}
console.log(getMonth(1));
 */



let todos = [
    {
        title: "html",
        status: true,
        sameTeacher: true
    },
    {
        title: "loop",
        status: false,
        sameTeacher: true
    },
    {
        title: "Java",
        status: false,
        sameTeacher: false
    },
]
function todoCheck(index) {
    if (todos[index].status) {
        console.log(`${todos[index].title} is completed.`);
    } if (todos[index].sameTeacher) {
        console.log(`- Teacher was same.`);
    } else {
        console.log(`Teacher wasnot same.`);
    } if (todos[index].status) {
        console.log(`${todos[index].title} is pending.`);
    }
}
todoCheck(0)
todoCheck(1)
todoCheck(2)