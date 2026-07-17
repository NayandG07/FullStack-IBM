// You have to take one input as num, if that n umber is multiple of 3 then print "Humpty", if the num is multiple of 5 the print "dumpty", if num is multiple of both 3 and 5 then print "Humpty Dumpty"

let num = parseInt(prompt("Enter a num:"));

if (num % 3 === 0 && num % 5 === 0) {
    console.log("Humpty Dumpty");
} else if (num % 3 === 0) {
    console.log("Humpty");
} else if (num % 5 === 0) {
    console.log("Dumpty");
} else {
    console.log("Not a multiple of 3 or 5");
}


// You have one string which is str = "We are in full stack batch", in this string you need to get all vowels and make one word out of it. then print it.
// output = eaeiuaa

let str = "We are in full stack batch";
let vowels = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        vowels += str[i];
    }
}
console.log(vowels);