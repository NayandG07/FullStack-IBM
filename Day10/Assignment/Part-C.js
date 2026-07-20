// Part C: Loops

// 1. Using a for loop, print numbers from 1 to 20.
for(let i = 1; i <=20; i++){
    console.log(i)
}

console.log("\n");


// 2. Using a while loop, print numbers from 20 to 1.
let a = 20;

while(a>=1){
    console.log(a);
    a--;
}

console.log("\n");


// 3. Print the multiplication table of 7.
let num = 7;

for(let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num*i}`);
}


console.log("\n");


// 4. Print all even numbers from 1 to 50.
for(let i = 1; i <= 50; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}


console.log("\n")


// 5. Find the sum of all numbers from 1 to 100.
let result = 0;

for(let i = 1; i <= 100; i++){
    result = result + i;
}
console.log(result)