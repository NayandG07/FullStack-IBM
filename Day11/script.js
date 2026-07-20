const myFunc=(a,b,c)=>{
    return a+b+c;
}

// let out = myFunc(7, 18, 45);
// console.log(out);

function f() {
    let sum = 7
    console.log(sum)
}
// console.log(sum) // ReferenceError: sum is not defined because sum is defined inside the function f and cannot be accessed outside of it. 
f()

console.log(name)
var name = "Thala"

// Var vs Let vs Const
// var is function scoped, let and const are block scoped
// var can be re-declared and updated, let can be updated but not re-declared, const cannot be updated or re-declared
// var is hoisted to the top of its scope and initialized with undefined, let and const are hoisted to the top of their scope but not initialized

var myName = "Test"
console.log(myName)
myName = "Test2"
console.log(myName)

// Hoisting - JS Property --> All traditional functions, var

// Execution Context - JS Property --> All functions, var, let, const

// IIFE (Immediately Invoked Function Expression) --> They are functions that are executed immediately after they are defined. They are used to create a new scope and avoid polluting the global scope.

// (()=>{
//     console.log("IIFE")
// })()

// Higher Ordder Functions - A function that takes another function as an argument or returns a function as a result.
// They all will have arrays as input
// For each, Map, Filter, Reduce

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// For Each
arr.forEach((e, i)=>{
    // console.log(e, i)
    console.log(e*4) // Single output
})

// let forEachOut = arr.forEach((e, i)=>{
//     // console.log(e, i)
//     return e // Undefined because forEach does not return anything
// })
// console.log(forEachOut) 

console.log("-------------------------")
// Map
arr.map((e, i)=>{
    // console.log(e, i)
    console.log(e*4) // Returns a new array with the values multiplied by 2
})

// let mapOut = arr.map((e, i)=>{
//     // console.log(e, i)
//     return e*2 // Returns a new array with the values multiplied by 2
// })
// console.log(mapOut)

console.log("-------------------------")

// filter
// arr.filter((e, i)=>{
//     console.log(e % 2 === 0) // Returns a new array with the values that pass the test as true and false
// })
let filterOut = arr.filter((e, i)=>{
    return e % 2 === 0 // Returns a new array with the values that pass the test
})
console.log(filterOut)

console.log("-------------------------")

// Reduce
// let reduceOut = arr.reduce((acc, e, i)=>{
//     return acc + e*2 // Returns a single value that is the result of the reduction
// }, 0) // 0 is the initial value of the accumulator
let reduceOut = arr.reduce((e, i)=>{
    return acc = e*2
})

console.log(reduceOut)

console.log("-------------------------")

let arr1 = [2, 4, 6, 8, 10, 3, 5, 7, 9]

let out = arr.map((e, i)=>{
    return e*3
}).filter((e, i)=>{
    return e % 5 === 0
}).forEach((e, i)=>{
    console.log(e*200)
})

console.log("-------------------------")

let arr2 = [2, 3, 1, 6, 7]

let ans = arr.reduce((acc, e)=>{
    return acc + e
})
console.log(ans)

