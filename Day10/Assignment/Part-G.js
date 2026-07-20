// Part G: Variables (let, const, var)

// 1. Predict the output of using a variable before declaration with var.
console.log(str1) // undefined
var str1 = "Hello"

console.log("\n")


// 2. Predict the output of using a variable before declaration with let.
// console.log(str2) 
let str2 = "Greatings"  // error : ReferenceError

// 3. Predict the output when modifying a const variable.
console.log(str3)
const str3 = "Morning" 
str3 = "Good Morning" 

// console.log(str3);  
// TypeError: Assignment to constant variable.


// 4. Write the difference between var, let and const.

// var: We can access the variable before declaration with var but can reassinged.

// let: We can't access the variable before declaration with let but can reassinged..

// const: We can't We can't access the variable before declaration with const and can't modify the variable once assigned.