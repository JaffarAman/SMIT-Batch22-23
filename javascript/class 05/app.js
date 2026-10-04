// var firstName = prompt("Enter your firstName");
// var lastName = prompt("Enter your lastName");

// var fullName = firstName + lastName; //concate

// document.write("<h1>" + fullName + "</h1>");

// // prompt => bydefault data type string
// var num1 = +prompt("Enter your num1");
// var num2 = +prompt("Enter your num2");

// // addition
// var res = num1 + num2

// document.write("<p> Addition: " +  res + "</p>")

// console.log("allow")
// console.log("not allow")

// condition /

// if statement

// var userAge = 25

// if(condition){
//     // block of statement
// }
// else{

// }

// if =>> condition true
// else ==> condition false

// if(condition){ //block of statement

// }else{

// }

// var userAge = 18;

// // console.log("condition ys pehly" , userAge)

// if (userAge == 18) {
//   console.log("Allow");
// } else {
//   console.log("not Allow");
// }

// console.log("condition ys bad" , userAge)

// // admin@gmail.com
// var email = prompt("Enter your email address");

// if (email == "admin@gmail.com") {
//   console.log("admin Allow");
// } else {
//   console.log("not admin");
// }

// var userAge = prompt("Enter your age");

// if (userAge < 18) {
//   console.log("Allow");
// } else {
//   console.log("Not Allow");
// }

// if (userAge >= 18) {
//   console.log("Allow");
// } else {
//   console.log("not Allow");
// }

// if() ==> condition true
// else if()
// else ==> condition false

// var gender = prompt("Enter your gender"); //asdasd

// if (gender == "male") {
//   console.log("Allow male");
// } else if (gender == "female") {
//   console.log("Allow female");
// } else if (gender == "other") {
//   console.log("Alllow other");
// } else {
//   console.log("not Allow");
// }

// var num1 = "200"; //string

// // === ---> check value & data type
// if (num1 === 200) { //number
//   console.log("Correct Value!");
// } else {
//   console.log("wrong value!");
// }

// Gates
// AND GATE  => &&
//      true   &&  true ===> true
//      false   &&  true ===> false
//      true   &&  false ===> false
//      false   &&  false ===> false
// condition1 && condition2

// OR GATE  ==> ||
// true || true  ---> true
// false || true  ---> true
// condition1 || condition2

// var age = 100;

// //  100  >= 18   && 100 <=60
// //  true   && false == false
// if (age >= 18 && age <= 60) {
//   console.log("Allow");
// } else {
//   console.log("not allow");
// }

// var gender = "maasdasdle"

//     //  true        ||      false == true
// if(gender == "male" ||  gender === "female" ){
//         console.log("Allow")
// }else{
//     console.log("not Allow")
// }

// condition1 && condition2
// true && false ===> false
// true && true ===> true

// // condition1 && condition2 && condition3
//     true     &&    true &&  false --->   false
//     true &&  false --->   false

// userPer == 80 > 100 ==> A+
// userPer == 70 < 80 ==> A
// userPer == 60 < 70 ==> B
// userPer == 50 < 60 ==> C
// userPer == 0 < 50 ==> FAIL

var userPer = +prompt("Enter your percentage%");

if (userPer >= 80 && userPer <= 100) {
  console.log("A+");
} else if (userPer >= 70 && userPer <= 80) {
  console.log("A");
} else if (userPer >= 60 && userPer <= 70) {
  console.log("B");
} else if (userPer >= 50 && userPer <= 60) {
  console.log("C");
} else if (userPer >= 0 && userPer <= 50) {
  console.log("FAIL, Try again");
} else {
  console.log("Invalid Percentage");
}


