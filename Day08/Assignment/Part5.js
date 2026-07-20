// Part 5: Output Prediction


// 1. Predict the output:
//      let x = 10;
//      let y = '10';
//      console.log(x == y);
//      console.log(x === y);
let x = 10;
let y = '10';
console.log(x == y);   // True
console.log(x === y);  // False

console.log("\n");

// 2. Predict the output:
//      let arr = [1, 2, 3];
//      arr.push(4);
//      arr.pop();
//      console.log(arr);
let arr = [1, 2, 3];
arr.push(4);        // arr = [1, 2, 3, 4]
arr.pop();          // arr = [1, 2, 3]
console.log(arr);   // arr = [1, 2, 3]

console.log("\n");

// 3. Predict the output:
//      let arr = ['A', 'B', 'C'];
//      arr[1] = 'Z';
//      console.log(arr);
let arr1 = ['A', 'B', 'C'];
arr1[1] = 'Z';
console.log(arr1);  // arr1 = ["A", "Z", "C"]