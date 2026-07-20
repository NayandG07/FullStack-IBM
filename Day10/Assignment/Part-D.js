// Part D: Arrays

// 1. Create an array [10, 20, 30, 40, 50] and perform array operations such as push, pop, length and update values.
let arr1 = [10, 20, 30, 40, 50];

arr1.push(60);
console.log(arr1,"\n");
arr1.pop();
console.log(arr1,"\n");
console.log("Length of the Array:", arr1.length);
arr1[2] = 100;
console.log("Final Array:", arr1);

console.log("\n");


// 2. Using a for...of loop, print all elements of ['Apple', 'Mango', 'Banana', 'Orange'].
let fruits = ['Apple', 'Mango', 'Banana', 'Orange'];

for(let fruit of fruits){
    console.log(fruit);
}

console.log("\n");



// 3. Find the largest number in [23, 56, 89, 12, 100, 45].
let arr2 = [23, 56, 89, 12, 100, 45];
let max = 0;

for(let i in arr2){
    if(arr2[i] > max){
        max = arr2[i];
    }
}

console.log(max);

console.log("\n");


// 4. Find the sum of all elements in [5, 10, 15, 20, 25].
let arr3 = [5, 10, 15, 20, 25];
let sum = 0;

for(let i in arr3){
    sum+=arr3[i]
}
console.log(sum);

console.log("\n");


// 5. Count the number of even numbers in [2, 5, 8, 11, 14, 17, 20].
let arr4 = [2, 5, 8, 11, 14, 17, 20];
let count = 0;

for(let i in arr4){
    if(arr4[i] % 2 == 0){
        count+=1;
    }
}

console.log(count);