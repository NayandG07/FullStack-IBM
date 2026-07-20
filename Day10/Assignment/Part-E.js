// Part E: Objects and for...in

// 1. Print all keys from a student object using for...in.
let student = {
    name : "Dhiman",
    roll_no : 62,
    course : "BTECH",
    university : "ADTU"
}

for(let i in student){
    console.log(i);
}

console.log("\n")


// 2. Print all values from the object.
for(let i in student){
    console.log(student[i]);
}

console.log("\n")


// 3. Find the subject with the minimum marks from a marks object.
let marks = {
    maths : 100,
    english: 88,
    physics: 50,
    chemistry: 10
}

let min = 100;
let sub = "";

for(let i in marks){
    if(marks[i] < min){
        min = marks[i];
        sub = i;
    }
}
console.log(sub + ": " + min);

console.log("\n")


// 4. Count the total number of properties in an object.
let count = 0;
for(let i in student){
    count+=1;
}
console.log(count);

console.log("\n")


// 5. Predict the output of iterating through an object using for...in.
for(let i in student){
    // console.log(i);
    console.log(student[i]);

}