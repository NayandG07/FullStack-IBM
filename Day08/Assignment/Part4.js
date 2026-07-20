// Part 4: Arrays


// 1. Create an array containing a string, number, boolean, null, and undefined.
let arr = ["Arrays", 10, true, false, null, undefined];
console.log("Array:", arr);

console.log("\n");

// 2. Print the first element, last element, and length of the array.
console.log("First element:", arr[0]);
console.log("Last element:", arr[arr.length]);
console.log("Length of the Array:", arr.length);

console.log("\n");

// 3. Add two elements using push().
arr.push("New", 2);
console.log("After adding two more element using push():",arr);

console.log("\n");


// 4. Remove the last element using pop().
arr.pop();
console.log("After removing the last element using pop():",arr);

console.log("\n");

// 5. Replace the third element with your city name.
arr[2] = "Guwahati";
console.log("After replace the third element:", arr);

console.log("\n");

// 6. Create the array [10, 20, 30, 40, 50] and perform the following operations:
// - Print the length
// - Add 60
// - Remove the last element
// - Change 30 to 100
// - Print the final array

let arr1 = [10, 20, 30, 40, 50];

console.log("Length of the Array:", arr.length);
arr1.push(60);
console.log(arr1,"\n");
arr1.pop();
console.log(arr1,"\n");
arr1[2] = 100;
console.log("Final Array:", arr1);

console.log("\n");

// 7. Create a nested array:
//      let data = [1, 2, [3, 4, 5], 6]
//      Print 3, 5, and the length of the nested array.
let data = [1, 2, [3, 4, 5], 6]
console.log(data[2][0]);
console.log(data[2][2]);
console.log("Length of the Array:", data.length)