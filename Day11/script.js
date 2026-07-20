const myFunc=(a,b,c)=>{
    return a+b+c;
}

let out = myFunc(7, 18, 45);
console.log(out);

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

