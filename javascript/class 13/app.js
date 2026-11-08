// var str =
//   "HMypertext Markup Language is the standard markup language for HMypertext documents designed to  HMypertext  be displayed in a web browser. HMypertext It defines the content and structure of web content. It is often assisted by technologies such as standard Cascading Style Sheets and scripting languages such as JavaScript.";

// console.log(str);

// //   replace

// // var newStr = str.replace("HMypertext", "HYPERTEXT");
// var newStr = str.replaceAll("HMypertext", "HYPERTEXT");

// console.log(newStr);

// // // console.log(str.toLowerCase())
// // console.log(str.toUpperCase())

// // console.log(str[10])
// // console.log(str.length)

// // indexOf
// // var indexNumber = str.indexOf("M");
// // var indexNumber = str.indexOf("standard");
// // var indexNumber = str.lastIndexOf("standard");

// // console.log("indexNumber", indexNumber);

// // charAt

// 10540
// 10540.2020
// 5.9 ==> 6
// 4.2

// var num1 = 105.65982;
// var num1 = 9.4;

// var roundNum = Math.round(num1);
// console.log(num1);

// console.log("roundNum", roundNum);

// var per = prompt("Enter your percentage%");

// var per = 75.68;

// var perRoundOff = Math.round(per);
// console.log(per);
// document.write("<h1>" + perRoundOff + "</h1>");

// Math.round -- done
// Math.floor --> 45.4
// Math.ceil ==> 0.1 --> 1

// var num1 = 9.999999999999;
// var num1 = 0.111111;
// // var floorValue = Math.floor(num1);
// var ceilValue = Math.ceil(num1);
// console.log("num1", num1);
// console.log("ceilValue", ceilValue);

// var randomNum = Math.random();  // 0.111111  to 0.99999999
// console.log("randomNum", randomNum);

// 1 to 10

// // var num = Math.floor(Math.random() * 10 + 1);
// var num = Math.floor(Math.random() * 20 + 1);
// console.log(num);

// FORMULA
// 1 to 6
//  Math.floor(Math.random() * (6 - 1 + 1)) + 1;

//  Math.floor(Math.random() * (max - min + 1)) + min;

// 50 to 100
// max = 100
// min = 50

// var num = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
// console.log(num);
// 1 to 100
// var num = Math.floor(Math.random() * 100) + 1

// var userNumber = +prompt("Enter number 1 to 10");

// var randomNum = Math.floor(Math.random() * 10) + 1;
// console.log("randomNum", randomNum);

// if (userNumber === randomNum) {
//   console.log("Match");
// } else {
//   console.log("Not match");
// }

// var value1 = +"789";
// var value2 = Number("789");
// console.log(typeof value1);

// var str = "9.9"

// var num  = parseInt(str)

// console.log(typeof num)
// console.log(num)

// // var num = Number(str)
// // var num = +(str)

// console.log(typeof num)
// console.log(num)

// String to number
// parseInt
// Number() / +

// var val = "9.9"

// // var num  = parseInt(val)
// var num  = Number(val)
// // var num  = +(val)

// console.log(typeof num , num)

// Number convert string
// String()
// .toString

// var num = 100.4654

// // var str = String(num)
// var str = num.toString()
// console.log(typeof str , str)

// var num1 = "1.9999999";

// console.log(Number(num1));
// console.log(parseFloat(num1));

// var num1 = 12465.5444954621;

// console.log(typeof +num1.toFixed(10));
