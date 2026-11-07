// var email = "admin@gmail.com";
// var password = "admin123";

// var userEmail = prompt("Enter your email");
// var userPass = prompt("Enter your password");

// if (userEmail === email && userPass === password) {
//   document.write("<h1> USER LOGIN! </h1>");
// } else {
//   alert("Email or password not match!");
// }

// pop()
// push
// length

// var userName = prompt("Enter your name")

// console.log("userName" , userName)

// if (userName.toLowerCase() === "jaffar") {
//   console.log("ALLOW");
// } else {
//   console.log("not allow");
// }

// var userName = prompt("Enter your name")

// console.log("userName" , userName)

// if (userName.toUpperCase() === "JAFFAR") {
//   console.log("ALLOW");
// } else {
//   console.log("not allow");
// }

// var userCity = prompt("Enter your city!");
// var cities = ["KARACHI", "lahore", "ISLAMABAD", "multan"];

// var isMatch = false;

// for (var i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
//   if (userCity.toUpperCase() === cities[i].toUpperCase()) {
//     alert("WELCOME to " + cities[i]);
//     isMatch = true;
//   }
// }

// if (isMatch === false) {
//   alert("CITY NOT FOUND");
// }

// String
// toLowerCase()
// toUpperCase()

// var cities = ["KARACHI", "lahore", "ISLAMABAD", "multan"].toLowerCase();
// console.log(cities)

// String

// var cities = ["KARACHI", "lahore", "ISLAMABAD", "multan"]

// var str = "Jaffar  Aman";
// console.log(str[6])
// console.log(str.length)

// var userName = "Jaffar Aman"

// console.log(userName[6])

// var str = "saylani";
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())

// var str = "jaffAr amAn"; //Saylani
// var capWord = str[0].toUpperCase() + str.slice(1).toLowerCase()
// console.log("capWord" , capWord)

// var str1 = str[0].toUpperCase(); //S
// // var str2 = str.slice(1, 7).toLowerCase();
// var str2 = str.slice(1).toLowerCase(); //aylaniwelfare
// console.log("str1", str1);
// console.log("str2", str2);

// var finalStr = str1 + str2;
// console.log(finalStr)

// var str = "my name is jaffar aman";
// var arr = str.split(" ")
// console.log(arr);

// var arr = []
// var str = ""

// var str = "my name is jaffar aman";

// var arr = str.split(" ")

// console.log(arr)

// var htmlDef =
//   "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.";
// // console.log(htmlDef)

// var arr = htmlDef.split(" ");
// // console.log(arr);

// var str = "";

// for (var i = 0; i < arr.length; i++) {
//   var word = arr[i];
//   //   console.log(word);

//   //   console.log(capWord)
//   var capWord = word[0].toUpperCase() + word.slice(1).toLowerCase();

//   str += " " + capWord;
// }

// console.log(str);

// var str = "my name is jaffar aman";
// var strArr = str.split(" ");

// var arr = [];

// for (var i = 0; i < strArr.length; i++) {
//   //   get single word
//   var word = strArr[i];
//   //   console.log("original word", word);

//   //   convert into cap
//   var cap = word[0].toUpperCase() + word.slice(1).toLowerCase();
//   //   console.log("after cap", cap);

//   //   value ko push karegy new array main
//   arr.push(cap);
// }

// console.log("arr", arr);

// var capStr = arr.join(" ")

// console.log(capStr)

// var str = "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the browser content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."

// console.log(str)

// console.log(str.indexOf("browser"))
// console.log(str.lastIndexOf("browser"))

// console.log(str[106])
// console.log(str.indexOf("browser"))

// var str = "jaffar"
// console.log(str.lastIndexOf("a"))



// var str = "jaffar";
// // console.log(str.indexOf(1)); //apsy value lehga or apko index dehga
// // console.log(str.charAt(1)); //apsy index lehga or apko value dehga
// console.log(str[1]);


var str = "Hypertext Markup Language is the standard markup language for documents designed to language be displayed in a web browser. It defines the browser content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript."

// replace
str =  str.replaceAll("language" , "lang")

console.log(str)

