// Slice OR Splice

// var citiesArr = [
//   "karachi",
//   "pakistan",
//   "lahore",
//   "multan",
//   "jaffar",
//   "saad",
//   "ali",
//   "sufiyan",
//   "bilal",
//   "india",
// ];

// 4. slice(-1)
// var arrCopy = citiesArr.slice(-5);
// console.log("arrCopy", arrCopy);

//3.  negative ending point

// var copyArr = citiesArr.slice(2 , -1)
// console.log("copyArr" , copyArr)

// var copyArr = citiesArr.slice(0, -2);
// console.log("copyArr", copyArr);

// var arrCopy = citiesArr.slice(1, 7);
// var arrCopy = citiesArr.slice(1);
// console.log("arrCopy", arrCopy);

// var copyArr = citiesArr.slice(4);
// console.log("copyArr", copyArr);

// 2. one value -- only starting point
// var arrCopy = citiesArr.slice(1);
// console.log("arrCopy", arrCopy);

// //1.  two values
// var arrCopy = citiesArr.slice(2, 4);
// console.log("arrCopy", arrCopy);
// console.log("citiesArr", citiesArr);

// var citiesArr = [
//   "karachi",
//   "pakistan",
//   "lahore",
//   "multan",
//   "jaffar",
//   "saad",
//   "ali",
//   "sufiyan",
//   "bilal",
//   "india",
// ];
// citiesArr.splice(4 , 6 ,  "Islamabad" , 123 , 5546  )

// // citiesArr.splice(1, 3);
// console.log("citiesArr", citiesArr);
// // splice

var cities = ["karachi", "lahore", "Islamabad"];

// cities.splice(1, 1);
// cities.splice(1, 1, "multan");

// cities.splice(1,1)
// cities.splice(0 , 1  , "multan")
// cities.splice(0 , 1  )
// console.log(cities);

// loop

// console.log("Hello world");

// for loop
// initialization, condition, increment

// initialization => var create krna
// condition ==> true
// increment ==> a++ , ++a , a-- , --a

// for( initialization; condition; increment ){
//     //block of statement
// }

for (var num = 1; num <= 10; num++) {
    console.log(num)
}
