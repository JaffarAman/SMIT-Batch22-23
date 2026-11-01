// var arr = ["karachi", "lahore", "pakistan",];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (var index = 0; index < 4; index++) {
//   console.log(arr[index]);
// }

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])

// var cities = ["lahore", "multan", "karachi", "islamabad"];

// for (var i = 0; i < cities.length; i++) {
//   console.log(cities[i]);

//   // karachi === "karachi"
//   if (cities[i] === "karachi") {
//     alert("welcome" + i);
//   }
// }

// if (cities[0] === "karachi") {
//   alert("Welcome!");
// } else if (cities[1] === "karachi") {
//   alert("Welcome!");
// } else if (cities[2] === "karachi") {
//   alert("Welcome!");
// } else if (cities[3] === "karachi") {
//   alert("Welcome!");
// }

// var arr = ["ali", "bilal", "sufiyan", "jaffar", "buraq"];

// var userName = prompt("Enter your name!");

// var isMatch = false;

// for (var i = 0; i < arr.length; i++) {
//   // jaffar  === jaffar
//   if (arr[i] === userName) {
//     isMatch = true;
//     alert("Welcome!");
//     break;
//   }
// }

// console.log("isMatch", isMatch);

// if (isMatch == false) {
//   alert("Not found!");
// }

for (var i = 1; i <= 5; i++) {
  console.log("outer loop", i);

  for (var j = 1; j <= 3; j++) {
    console.log("inner loop", j);
  }
  

}
