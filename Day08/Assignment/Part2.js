// Part 2: Comparison Operators


// 1. Create two variables and check ==, ===, !=, !==, >, <, >=, and <=.
let num1 = 20;
let num2 = "20";

console.log(num1 == num2)
console.log(num1 === num2)
console.log(num1 != num2)
console.log(num1 !== num2)

console.log("\n")


let num3 = 20;
let num4 = 10;

console.log(num3 > num4)
console.log(num3 < num4)
console.log(num3 >= num4)
console.log(num3 <= num4)

console.log("\n")


// 2. Predict the output of:       console.log(10 === '10')       console.log(10 == '10')
console.log(10 === '10')   // False
console.log(10 == '10')   // True

console.log("\n")


// 3. Predict the output of:    console.log(null == undefined)          console.log(null === undefined)
console.log(null == undefined)
console.log(null === undefined)

console.log("\n")


// 4. Write a program to compare the ages of two people and print who is older.
let age_Person1 = 39;
let age_Person2 = 18;

console.log("Person 1 is Older than Person 2", age_Person1 > age_Person2);
console.log("Person 2 is Older than Person 1", age_Person1 < age_Person2);