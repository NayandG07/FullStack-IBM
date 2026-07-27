const singleProductData = JSON.parse(localStorage.getItem("singleProduct"));

function appendData() {
    let leftChild = document.getElementById("leftChild");
    let rightChild = document.getElementById("rightChild");

    let img = document.createElement("img");
    img.src = singleProductData.image;
    img.style.width = "400px";
    img.style.height = "400px";

    let id = document.createElement("p");
    id.innerText = singleProductData.id;

    leftChild.appendChild(img, id);

    let cat = document.createElement("h3");
    cat.innerText = singleProductData.category;

    let price = document.createElement("p");
    price.innerText = `${singleProductData.price}`;

    let title = document.createElement("p");
    title.innerText = singleProductData.title;

    let ratingDiv = document.createElement("div");
    // ratingDiv.style.border = "1px solid yellow";
    ratingDiv.style.display = "flex";
    ratingDiv.style.justifyContent = "space-around";
    
    let count = document.createElement("p");
    count.innerText = `${singleProductData.rating.count}`;
    let rate = document.createElement("p");
    rate.innerText = singleProductData.rating.rate;

    ratingDiv.append(count, rate);

    let description = document.createElement("p");
    description.innerText = singleProductData.description;

    rightChild.append(cat, price, title, ratingDiv, description);



}

appendData();