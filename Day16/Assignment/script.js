async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    const filter = document.getElementById("filterByCategory");
    const sort = document.getElementById("sortByPrice");

    function updateProducts() {
        let result = data.slice();
        // Filter
        if (filter.value !== "all") {
            result = result.filter((product) => {
                return product.category === filter.value;
            });
        }

        // Sort
        if (sort.value === "low-high") {
            result.sort((a, b) => a.price - b.price);
        }
        else if (sort.value === "high-low") {
            result.sort((a, b) => b.price - a.price);
        }
        else if (sort.value === "rating") {
            result.sort((a, b) => b.rating.rate - a.rating.rate);
        }
        document.getElementById("productContainer").innerHTML = "";
        renderData(result);
    }
    filter.addEventListener("change", updateProducts);
    sort.addEventListener("change", updateProducts);

    renderData(data);
}

fetchData();

async function renderData(data) {
    const parentContainer = document.getElementById('productContainer');

    data.forEach((e, i) => {
        console.log(e);
        const loader = document.getElementById('loader');
        loader.style.display = "none";
        const cardDiv = document.createElement('div');

        // cardDiv.style.border = "1px solid black";
        cardDiv.style.textAlign = "center";
        cardDiv.style.boxShadow = "#0f62fe 5px 5px, rgba(45, 25, 155, 0.3) 10px 10px, rgba(82, 56, 155, 0.2) 15px 15px, rgba(124, 112, 181, 0.1) 20px 20px, rgba(135, 129, 205, 0.05) 25px 25px"


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

        // const description = document.createElement("p");
        // description.innerText = e.description;

        const button = document.createElement("button");
        button.innerText = "Buy Now";
        button.style.backgroundColor = "#4a2fe4";
        button.style.border = "1px solid none";
        button.style.padding = "5px";
        button.style.borderRadius = "5px";
        button.style.width = "100px";
        button.style.color = "white";

        const button1 = document.createElement("button");
        button1.innerText = "Details";
        button1.style.backgroundColor = "#2f59e4";
        button1.style.border = "1px solid none";
        button1.style.padding = "5px";
        button1.style.borderRadius = "5px";
        button1.style.width = "100px";
        button1.style.color = "white";
        button1.style.marginTop = "10px";
        
        button1.addEventListener("click", () => {
            singleProduct(e);
        });

        const button3 = document.createElement("button");
        button3.innerText = "Add to Cart";
        button3.style.backgroundColor = "#2f59e4";
        button3.style.border = "1px solid none";
        button3.style.padding = "5px";
        button3.style.borderRadius = "5px";
        button3.style.width = "100px";
        button3.style.color = "white";
        button3.style.marginTop = "10px";

        button3.addEventListener("click", () => {
            addtoCart(e, i);
        });


        cardDiv.append(cat, img, price, title, button, button1, button3);
        parentContainer.append(cardDiv);
    })
}

singleProduct = (e) => {
    localStorage.setItem("singleProduct", JSON.stringify(e));
    window.location.href = "singleProduct.html";
}

addtoCart = (e, i) => {
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    cartData.push(e);
    localStorage.setItem("cartData", JSON.stringify(cartData));
    alert("Product added to cart");
}

fetchData();


