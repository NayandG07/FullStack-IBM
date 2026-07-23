// Synchronus and Asynchronus, Single threaded language, single line execution at a time

// async function myFunc() {
//     console.log("Async execution in async function");
// }

// Asynchronous behavior

// console.log("Synchronous execution before setTimeout");

// setTimeout(() => {
//     console.log("Async task 1");
// }, 2000)

// setTimeout(() => {
//     console.log("Async task 2");
// }, 1000)

// setTimeout(() => {
//     console.log("Async task 3");
// }, 3000)

// setTimeout(() => {
//     console.log("Async task 4");
// }, 0)

// console.log("Synchronous execution after setTimeout");

// Promises (JS Objects) -> Pending (Default state), Fulfilled, Rejected

async function getData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
}
getData();

