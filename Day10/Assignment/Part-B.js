// Part B: Strings

// 1. Print all vowels from the string 'JavaScript is awesome'.
let str1 = "JavaScript is awesome";
let output = "";

for(let i = 0; i < str1.length; i++){
    if(str1[i] == "a" || str1[i] == "e" || str1[i] == "i" || str1[i] == "o" || str1[i] == "u"){
        output = output + str1[i];
    }
}
console.log(output);

console.log("\n");


// 2. Count the number of vowels in 'Masai School'.
let str2 = "Masai School";
let count = 0;

for(let i = 0; i < str2.length; i++){
    if(str2[i] == "a" || str2[i] == "e" || str2[i] == "i" || str2[i] == "o" || str2[i] == "u"){
        count+=1;
    } 
}

console.log(count);

console.log("\n");


// 3. Print every character of 'Full Stack Development' using a loop.
let str3 = "Full Stack Development";
let result = "";

for(let i in str3){
    console.log(str3[i]);
    result = result + str3[i];
}
console.log(result);

console.log("\n");



// 4. Count the number of spaces in 'We are learning JavaScript'.
let str4 = "We are learning JavaScript";
let spaces = 0;

for(let i in str4){
    if(str4[i] == " "){
        spaces+=1;
    }
}
console.log(spaces);

console.log("\n");


// 5. Reverse the string 'Hello'.
let str5 = "Hello";
let Reverse = "";

for(let i = str5.length - 1; i >= 0; i--){
    Reverse+=str5[i];
}
console.log(Reverse)