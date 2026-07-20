// Part 3: Conditional Statements


// 1. Write a program to check whether a number is positive or negative.
let num = 10;

if(num > 0){
    console.log("Number "+ num +" is Positive")
}else if(num < 0){
    console.log("Number "+ num +" is Negative")

}else{
    console.log("Number "+ num +" is Zero")
}

console.log("\n")


// 2. Write a program to check whether a student has passed or failed. Passing marks are 40.
let marks = 50;

if(marks >= 40){
    console.log("Passed")
}else{
    console.log("Failed")
}

console.log("\n")


// 3. Write a program to find the larger number between two numbers.
let num1 = 40;
let num2 = 50;

if(num1 > num2){
    console.log(num1, "is Larger than", num2)
}else if(num1 < num2){
    console.log(num2, "is Larger than", num1)

}else{
    console.log("Both are Equal")
}

console.log("\n")


// 4. Write a program to find the largest among three numbers.
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


// 5. Write a program to check whether a number is even or odd.
let num_1 = 10;

if(num_1 % 2 == 0){
    console.log("Number", num_1, "is Even")
}else{
    console.log("Number", num_1, "is Odd")
}

console.log("\n")


// 6. Write a program that prints:      Excellent (marks above 90)      Good (75–90)      Average (50–74)   Fail (below 50)
let marks_get = 88;

if(marks_get > 90){
    console.log("Exellent");
}else if(marks_get >= 75 && marks_get <= 90){
    console.log("Good");
}else if(marks_get >= 50 && marks_get <= 74){
    console.log("Avarage");
}else{
    console.log("Failed");
}