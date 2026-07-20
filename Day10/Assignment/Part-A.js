// Conditions and operators

// 1. Take a number as input. If the number is divisible by 2, print 'Even'; otherwise print 'Odd'.
let num_1 = 10;

if(num_1 % 2 == 0){
    console.log("Even")
}else{
    console.log("Odd")
}

console.log("\n");


// 2. Take a number as input. If it is divisible by 3, print 'Fizz'. If it is divisible by 7, print 'Buzz'. If it is divisible by both 3 and 7, print 'FizzBuzz'.
let num1 = 21;

if(num1 % 3 == 0 && num1 % 7 == 0){
    console.log("FizzBuzz");
}else if(num1 % 3 == 0){
    console.log("Fizz");
}else if(num1 % 7 == 0){
    console.log("Buzz");
}else{
    console.log("Neither a multiple of 3 nor 7.")
}

console.log("\n");


// 3. Take three numbers and print the greatest number among them.
let a = 10;
let b = 30;
let c = 40;

if(a>b && a>c){
    console.log("a:", a, "is Largest")
}else if(b>a && b>c){
    console.log("b:", b, "is Largest")
}else{
    console.log("c:", c, "is Largest")
}

console.log("\n")


// 4. Check whether a student has passed or failed. Marks greater than or equal to 40 means Pass
let marks = 50;

if(marks >= 40){
    console.log("Passed")
}else{
    console.log("Failed")
}

console.log("\n")


// 5. Predict the output of logical operators (&& and ||).
console.log(true&&true);    //true
console.log(true&&false);   //false
console.log(true||true);    //true
console.log(true||false);   //true