async function fetchData() {
    const response = await fetch('https://fakestoreapi.com/products');

    const data = await response.json();

    renderData(data);
}

async function renderData(data) {
    const loader = document.getElementById('loader');
    loader.style.display = "none";

    const parentContainer = document.getElementById('productContainer');

    data.forEach((e, i) => {
        console.log(e);
        const cartDiv = document.createElement('div');

        cartDiv.style.border = "1px solid black";
        cartDiv.style.textAlign = "center";
        cartDiv.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";


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
        button.style.backgroundColor = "#f0c14b";
        button.style.border = "1px solid none";
        button.style.padding = "5px";
        button.style.borderRadius = "5px";
        button.style.width = "100px";
        button.style.color = "white";

        cartDiv.append(cat, img, price, title, button);
        parentContainer.append(cartDiv);

        const filter = document.getElementById('filterByCategory');
        filter.addEventListener('change', (event) => {
            const selectedCategory = event.target.value;
            if (selectedCategory === "all") {
                cartDiv.style.display = "block";
            } else if (selectedCategory === e.category) {
                cartDiv.style.display = "block";
            } else {
                cartDiv.style.display = "none";
            }
        })

        

    })
}

fetchData();




