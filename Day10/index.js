// // You have to take one input as num, if that n umber is multiple of 3 then print "Humpty", if the num is multiple of 5 the print "dumpty", if num is multiple of both 3 and 5 then print "Humpty Dumpty"

// let num = parseInt(prompt("Enter a num:"));

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("Humpty Dumpty");
// } else if (num % 3 === 0) {
//     console.log("Humpty");
// } else if (num % 5 === 0) {
//     console.log("Dumpty");
// } else {
//     console.log("Not a multiple of 3 or 5");
// }


// // You have one string which is str = "We are in full stack batch", in this string you need to get all vowels and make one word out of it. then print it.
// // output = eaeiuaa

// let str = "We are in full stack batch";
// let vowels = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
//         vowels += str[i];
//     }
// }
// console.log(vowels);

// let num = 10;

// while(num<10) {
//     console.log("While loop is running");
//     num++;
// }

// for of loop is specially used to iterate over iterable objects like arrays, strings, maps, sets etc.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i of arr) {
//     console.log(i)
// }
// let arr1 = ["Asif", "Bikash", "D Man", "Suraj"];

// for(let i of arr1) {
//     if(i == "Bikash") {
//         console.log("AdtU")
//     } else {
//         console.log("Unemployed")
//     }
// }

// let obj = {
//     name: "John",
//     uni: "Harvard",
//     course: "Computer Science",
//     year: 3,
//     isAlumn: false,
//     sub: ["FS", "AI", "DL", "ML"],
//     hobies: {
//         sports: ["Football", "Cricket"],
//         listening: "Sapphire",
//     },
//     100: "Test"
// }

// for (let i in obj) {
//     console.log(obj[i])
//     console.log(typeof obj[i])
// }

// let obj1 = {
//     maths: 100,
//     science: 90,
//     english: 80,
//     hindi: 70,
// }

// let max = 0;
// let sub = "";
// for (let i in obj1) {
//     if (obj1[i] > max) {
//         max = obj1[i];
//         sub = i;
//     }
// }
// console.log(`Subject with max marks: ${sub}, ${max}`);

// Functions 

add(1, 2, 3);
function add(a, b, c) {
    let ans = a+b+c;
    console.log(ans)
}
add(10,20,30)

// ES6 - EcmaScript 6, commonJS
// let, const, arrow functions, template literals, destructuring, spread operator, rest operator, default parameters, classes, modules etc.

// Arrow Function - can't be invoked before declaration, doesn't have its own 'this' keyword, can't be used as constructor, can't use 'arguments' object, can't use 'yield' keyword

const arrowFunc = (a, b, c) => {
    let ans = a+b+c;
    console.log(ans)
}
arrowFunc(10,20,30)

console.log(batch)

var batch = "FS"