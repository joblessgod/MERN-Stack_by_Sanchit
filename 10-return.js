/* "2024-01-19T13:01:03.486205+05:45".substring(0, 10)

"Exploring Tomorrow :2024-01-19 "
"Career in Web : 2024-01-18 "
"Exploring Tomorrow :2024-01-19 "
"Exploring Tomorrow :2024-01-19 "
 */

/* Home Work */
/* 
let blogs = [
  {
      title:
          "Exploring Tomorrow",
      created_at: "2024-01-19T13:01:03.486205+05:45",
  },
  {
      title:
          "Career in Web ",
      created_at: "2024-01-18T15:02:21.353832+05:45",
  },
  {
      title:
          "Degrees Dying",
      created_at: "2024-01-17T14:06:24.457394+05:45",
  },
  {
      title:
          "Career in Digital Marketing",
      created_at: "2024-01-16T11:02:40.936608+05:45",
  },
];

// we can also do this but we must choose fast way which is below 
// console.log(`${blogs[0].title} :${blogs[0].created_at.substring(0, 10)}`);

function blogsFast(index) {
  console.log(`${blogs[index].title}: ${blogs[index].created_at.substring(0, 10)}`);
}

blogsFast(0)
blogsFast(1)
blogsFast(2)
blogsFast(3)
*/

/* NEW work */
let members = [
    {
        name: "Ram",
        joined_at: "2024-01-19T13:01:03.486205+05:45",
    },
    {
        name: "Hari",
        joined_at: "2024-01-18T15:02:21.353832+05:45",
    },
    {
        name: "Sita",
        joined_at: "2024-01-17T14:06:24.457394+05:45",
    }
];

function formatDate(date) {
    return date.substring(0, 10)
}


function memberInfo(index) {
    let member = members[index]
    // console.log(`${member.name} joined company at ${member.joined_at}`);
    console.log(member.name, "joined company at", formatDate(member.joined_at));
}
memberInfo(0)
memberInfo(1)
memberInfo(2)


/*                 Return Keyword           */
function sum(num1, num2) {
    // console.log(`SUM: ${num1} + ${num2} = ${num1 + num2}`);
    return total = (num1 + num2)
}

console.log("result:", sum(2, 4));

