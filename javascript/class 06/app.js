// Data types
// 1. string ==> group of charc ==> "" ,''
// 2. number ==> 0 to 9
// 3.Boolean ==> true/false``
// 3.Array ==> true/false``


// var userIsActive  = true //boolean data type
// // var userIsActive  = false //boolean data type

// console.log(userIsActive);
// var userAge = +prompt("Enter your age");
// var userAge = prompt("Enter your age");

// if (userAge === 18) {  //fixed value condition
//   console.log("user Allow!");
// } else {
//   console.log("age not match");
// }

// ==
// ===
// >  greater than
// >=  greater than and equal
// if (userAge >= 18) { //range values
//   console.log("user Allow!");
// } else {
//   console.log("not allow");
// }

// var userGender = prompt("Enter user gender!");

// if (userGender === "male") {
//   console.log("Male Section's");
// } else if (userGender === "female") {
//   console.log("feMale Section's");
// } else {
//   console.log("invalid value");
// }

// || or
// && AND

// OR ||
//  true       ||   false
// condition1 || condition2 == true
// true  || true = true
// true  || false = true
// false  || true = true
// false  || false = false

// AND &&
//  true       &&  true
// condition1 || condition2 == true
// true  && true = true
// true  && false = false
// false  && true = false
// false  && false = false

//  false     && true
// true && false && true ==> false

//      false ||  true
// true && false || true ==> true

// var userAge = +prompt("Enter your age"); //10
// var userGender = prompt("Enter your gender"); //male

//  false &&   true       && male    //
//  false       && true    //
//  false        //
// if (userAge >= 18 && userAge <= 60 && userGender === "male") {
//   console.log("Allow");
// } else {
//   console.log("not allow");
// }

//     false           ||  true           && true
// true           && true
// if (userAge >= 18 || userAge <= 60 && userGender === "male") {
//   console.log("Allow");
// } else {
//   console.log("not allow");
// }

// var userAge = +prompt("Enter your age");
// var userGender = prompt("Enter your gender");

// if (
//   userAge >= 18 && // true
//   userAge <= 50 && // true
//   (userGender === "male" || userGender === "female") //true
// ) {
//   console.log("Allow");
// } else {
//   console.log("not allow");
// }

// != ==> not equal to
// nested condition

// var num1 = +prompt("Enter num1");
// var num2 = +prompt("Enter num2");
// var opt = prompt("Enter opt", "+,-,*,/");

// if (opt == "+") {
//   console.log("addition", num1 + num2);
// } else if (opt === "-") {
//   console.log("minus", num1 - num2);
// } else if (opt === "*") {
//   console.log("mul", num1 * num2);
// } else if (opt === "/") {
//   console.log("div", num1 / num2);
// } else {
//   console.log("invalid sign");
// }

// Array

// var userName1 = "Ali";
// var userName2 = "Jaffar";
// var userName3 = "Sufiyan";
// var userName4 = "Bilal";
// var userName5 = "ayan";


// var users = "Jaffar" , "Sufiyan" 



// Array
// collection of data


// var userArr = ["Jaffar"] //array



var userArr = ["Jaffar" , "sufiyan" , "bilal" , "ali"]
console.log(userArr)