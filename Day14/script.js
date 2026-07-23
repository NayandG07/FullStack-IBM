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
    
    appendData(data);
}

function appendData(data) {
    const parentDiv = document.getElementById("parent");
    parentDiv.style.display = "grid";
    parentDiv.style.gridTemplateColumns = "repeat(4, 1fr)";
    parentDiv.style.gap = "10px";
    

    data.forEach((e, i)=> {
        const childDiv = document.createElement("div");
        childDiv.style.border = "1px solid black";
        // childDiv.style.width = "40%";
        childDiv.style.textAlign = "center";
        childDiv.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
        

        const cat = document.createElement("p");
        cat.innerText = e.category;

        const img = document.createElement("img");
        img.src = e.image;
        img.style.width = "200px";
        img.style.height = "200px";

        const price = document.createElement("p");
        price.innerText = e.price;

        const title = document.createElement("p");
        title.innerText = e.title;

        const description = document.createElement("p");
        description.innerText = e.description;

        const button = document.createElement("button");
        button.innerText = "Buy Now";
        button.style.backgroundColor = "yellowgreen";
        button.style.border = "1px solid none";
        button.style.padding = "5px";
        button.style.borderRadius = "5px";
        button.style.width = "100px";
        button.style.color = "black";

        childDiv.append(cat, img, price, title, description, button);
        parentDiv.append(childDiv);
    })
}

getData();

