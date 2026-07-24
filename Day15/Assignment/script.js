async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    const filter = document.getElementById("filterByCategory");
    filter.addEventListener("change", (event) => {
        const selectedCategory = event.target.value;
        let filteredData;
        if (selectedCategory === "all") {
            filteredData = data;
        } else {
            filteredData = data.filter((product) => {
                return product.category === selectedCategory;
            });
        }
        document.getElementById("productContainer").innerHTML = "";
        renderData(filteredData);
    });

    // const sort = document.getElementById("sortByPrice");
    // sort.addEventListener("change", (event) => {
    //     const selectedSort = event.target.value;
    //     let sortedData = data.slice(); // Copy
    //     if (selectedSort === "low-high") {
    //         sortedData.sort((a, b) => a.price - b.price);
    //     }
    //     else if (selectedSort === "high-low") {
    //         sortedData.sort((a, b) => b.price - a.price);
    //     }
    //     else if (selectedSort === "rating") {
    //         sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
    //     }
    //     document.getElementById("productContainer").innerHTML = "";
    //     renderData(sortedData);
    // });

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

        cardDiv.append(cat, img, price, title, button);
        parentContainer.append(cardDiv);


        // filter.addEventListener('change', (event) => {
        //     const selectedCategory = event.target.value;
        //     if (selectedCategory === "all") {
        //         cardDiv.style.display = "block";
        //     } else if (selectedCategory === e.category) {
        //         cardDiv.style.display = "block";
        //     } else {
        //         cardDiv.style.display = "none";
        //     }
        // })

    })
}

fetchData();




