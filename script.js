let blogs = [
    {
      title: "Exploring Tomorrow",
      created_at: "24-01-19T13:01:03.486205+05:45",
      iamge:"/static/meda/blog1.png"
    },
    {
      title: "Career in Web ",
      created_at: "24-01-18T15:02:21.353832+05:45",
    },
    {
      title: "Degrees Dying",
      created_at: "24-01-17T14:06:24.457394+05:45",
    },
    {
      title: "Career in Digital Marketing",
      created_at: "24-01-17T11:02:40.936608+05:45",
    },
  ];
  
  // console.log(`${blogs[0].title}: ${blogs[0].created_at.substring(0, 10)}`);
  // console.log(`${blogs[1].title}: ${blogs[1].created_at.substring(0, 10)}`);
  // console.log(`${blogs[2].title}: ${blogs[2].created_at.substring(0, 10)}`);
  // console.log(`${blogs[3].title}: ${blogs[3].created_at.substring(0, 10)}`);
  
  function formatDate(date) {
    /* split.. */
    return date.substring(0, 8);
  }
  
  console.log("simplifiedDate", formatDate("24-01-17T11:02:40.936608+05:45"));
  console.log("simplifiedDate", formatDate("24-02-17T11:02:40.936608+05:45"));
  
  function blogInfo(index) {
    // console.log(`${blogs[index].title}: ${blogs[index].created_at.substring(0, 8)}`);
  
    let blog = blogs[index];
    let { title, created_at } = blog; // object destructuring
  
    // console.log(`${blog.title}: ${formatDate(blog.created_at) }`);
    console.log(`${title}: ${formatDate(created_at)}`);
  }
  
  blogInfo(0);
  blogInfo(1);
  blogInfo(2);
  blogInfo(3);
  
  let members = [
    {
      name: "Ram",
      joined_at: "24-01-19T13:01:03.486205+05:45",
    },
    {
      name: "Hari",
      joined_at: "24-01-18T15:02:21.353832+05:45",
    },
    {
      name: "Sita",
      joined_at: "24-01-17T14:06:24.457394+05:45",
    },
  ];
  
  function printMemberInfo(index) {
    let member = members[index];
    console.log(`${member.name} joined at ${formatDate(member.joined_at)}`);
  }
  
  // console.log(`${members[0].name} joined at ${members[0].joined_at}`);
  // console.log(`${members[1].name} joined at ${members[1].joined_at}`);
  
  printMemberInfo(0);
  printMemberInfo(1);
  printMemberInfo(2);
  
  "full name".substring(0, 5);
  
  ("Exploring Tomorrow :24-01-19 ");
  ("Career in Web : 24-01-18 ");
  ("...");
  ("...");
  
  // function doSomething(){
  //     console.log("do somehting");
  // }
  
  // let user= {
  //     name:"ram",
  //     age:12,
  //     work: doSomething
  // }
  
  // user.work()
  
  /* 
    function typeof(input){
      // return iput's Datatype
    }
  */
  
  console.log("1212,type", typeof 1212);
  console.log(typeof "hello");
  
  function sum(input1, input2) {
    // console.log(`${input1} + ${input2} = ${input1 + input2}`);
    let result = input1 + input2;
    return result;
  }
  
  sum(1, 2);
  console.log("result", sum(10, 50));
  
  
  function makeFullUrl(suffix){
    return `https://www.mindrisers.com.np${suffix}`
  }
  console.log(makeFullUrl("/contactus"));