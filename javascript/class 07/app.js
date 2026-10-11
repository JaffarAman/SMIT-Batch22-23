// Array ---

var user1 = "Jaffar";
var user2 = "Aman";
var user3 = "Bilal";
var user3 = "Ali";

// Array --- []

var num1 = 100;

//  index =    0        1           2       3     4
// var users = ["Jaffar", "aman", "bilal", "ali" , "sufiyan"];

// console.log("users", users[indexNumber]  );
// console.log("users", users[2]  );

// console.log(users[0])

// var users = ["Jaffar", "aman", "bilal", "ali" , "sufiyan"];
// console.log(users[0] ,  users[1])

// var arr = ["karachi"] //empty array - true value

// arr = ["lahore"]
// arr = "karachi"

// arr[1] = "lahore"

// var arr = []

// arr[0] = "karachi"
// arr[1] = "lahore"
// console.log(arr)

// var cities = ["karachi", "lahore"];

// // cities[2] = "multan"

// cities[1] = "multan"
// console.log(cities)

// Index number = 0 sy start
// length ==> number of values ==> 1 sy start

// [] ==> empty array ==> true value
// "" ==> empty str ===>  false value

// Array
// index         0         1        2
// var fruits = ["apple", "mango" , "orange" , ""];
// // length        1         2        3
// console.log(fruits);

// var arr = [100, 200, 300, 400, 500, 600 , "apple" , "saylani" ,true ,false];

// console.log(arr)

// var userName1 = prompt("Enter your name 1");
// var userName2 = prompt("Enter your name 2");
// var userName3 = prompt("Enter your name 3");

// // console.log("userName1", userName1);
// // console.log("userName2", userName2);
// // console.log("userName3", userName3);

// var userArr = [userName1, userName2, userName3];

// console.log("userArr", userArr);

// Array Method's
// Properties

// pop , push ==> last index
// pop ==> last index remove
// push ==> last index value add

// var arr = ["jaffar", "aman", "saylani", "it"];

// arr.push("pakistan" , "nepal" , "india")
// arr.push("india")

// console.log(arr)

// pop , push
// pop ==> array ki last value remove krta hai

// arr.pop()  //method remove -- it
// arr.pop()  //method remove -- saylani

// arr.pop()
// arr.pop()
// arr.pop()

// console.log(  arr.length  ) //prop
// pop() //mehtod

// alert() //method
// prompt() //method

// pop , push ==>  last index
// shift , unShift  => first index

// var arr = ["jaffar", "aman", "saylani", "it"];
// // arr.shift() //first index remove

// arr.unshift("Pakistan" , "india")
// console.log(arr)

// pop ==> remove last index
// push ==> add value last index
// shift ==> remove first index
// unshift ==> add value first index

// Slice , splice

// Slice

// var arr = ["value1" , "value2" , "value3" , "value4"]

// "value2" , "value3"

// arr.slice(starting point , ending point)
// arr.slice(index number , length)
// arr.slice(1 , 3)

// slice ===> new array dehta
var arr = ["value1", "value2", "value3", "value4"];
var arrCopy = arr.slice(1, 3);

console.log("arr", arr);
console.log("arrCopy", arrCopy);
