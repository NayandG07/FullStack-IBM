// Challenge Questions

// 1. Create an array of 10 elements and replace every even index with 'JavaScript'.
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let i = 0; i < arr.length; i++){
    if(i%2 == 0){
        arr[i] = "JavaScript";
    }
}

console.log(arr)

console.log("\n");

// 2. Create three variables: name, age, and city, and print a complete sentence using them.
let name = "Bikash";
let age = 22;
let city = "Guwahati";

console.log("Hello I am"+" "+name+" "+"and I'm"+" "+age+" "+"years old. I'm from"+" "+city+".");

console.log("\n");

// 3. Create an array with mixed data types and count the number of elements without using length.
let data = [ "Arrays", 10, true, false, null, undefined, "New", 2 ];

let count = 0;

for(let i = 0; i < data.length; i++){
    count++;
}

console.log("Length of the Array:",count)