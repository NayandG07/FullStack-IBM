// Part F: Functions

// 1. Create a function that takes two numbers and prints their sum.
function sum(a, b){
    console.log(a + b);
}

sum(4, 60);

console.log("\n");


// 2. Create a function that takes a number and prints its square.
function square(num){
    console.log(num**2);
}

square(5);

console.log("\n");


// 3. Create an arrow function that takes three numbers and prints their average.
let average = (a, b, c) => {
    let sum = a + b + c;
    console.log(sum/3); 
}

average(3,4,5);

console.log("\n");


// 4. Create a function that takes a string and prints its length.
let myFunction = (str) => {
    console.log(str.length)
}

myFunction("Hello");

console.log("\n");


// 5. Create a function that takes two numbers and prints the greater number.
function greater(a, b){
    if(a>b){
        console.log(`a: ${a} is greater`);
    }else if(a<b){
        console.log(`b: ${b} is greater`);
    }else{
    console.log(`Both a: ${a} & b: ${b} are equal`);
    }
}

greater(7, 4);
greater(2, 4);
greater(3, 3);