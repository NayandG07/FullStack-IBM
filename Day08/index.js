// Data Structures
// console.log(null = undefined); 

let arr = [1, "Name", 3.6, true, null, undefined, [2,4,5]];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

let last = arr.length - 1;
console.log(arr[last]);

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);
console.log(arr[arr.length - 1]);

arr[0] = "New Name";
console.log(arr);