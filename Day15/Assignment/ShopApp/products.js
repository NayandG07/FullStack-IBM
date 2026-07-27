// products.js - Fetch, filter, sort and render products

// Update cart badge from localStorage
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartBadge").innerText = cart.length;
}

// Add to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
    alert(`"${product.title.slice(0, 30)}..." added to cart!`);
}

// Add to wishlist (no duplicates)
function addToWishlist(product) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.find(item => item.id === product.id);
    if (exists) {
        alert("Already in your wishlist!");
        return;
    }
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(`"${product.title.slice(0, 30)}..." added to wishlist!`);
}

async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    const filter = document.getElementById("filterByCategory");
    const sort = document.getElementById("sortByPrice");

    // Render initial data
    renderData(data);

    // Tab buttons
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const category = btn.dataset.category;
            if (category !== "all") {
                filter.value = category;
            } else {
                filter.value = "all";
            }
            updateProducts();
        });
    });

    // Filter & Sort dropdowns
    function updateProducts() {
        let result = data.slice();

        // Category filter
        if (filter.value !== "all") {
            result = result.filter(p => p.category === filter.value);
        }

        // Sort
        if (sort.value === "low-high") {
            result.sort((a, b) => a.price - b.price);
        } else if (sort.value === "high-low") {
            result.sort((a, b) => b.price - a.price);
        } else if (sort.value === "rating") {
            result.sort((a, b) => b.rating.rate - a.rating.rate);
        }

        document.getElementById("productContainer").innerHTML = "";
        renderData(result);
    }

    filter.addEventListener("change", updateProducts);
    sort.addEventListener("change", updateProducts);

    // Search input (live filter)
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        const filtered = data.filter(p => p.title.toLowerCase().includes(query));
        document.getElementById("productContainer").innerHTML = "";
        renderData(filtered);
    });
}

function renderData(data) {
    const loader = document.getElementById("loader");
    loader.style.display = "none";

    const container = document.getElementById("productContainer");

    data.forEach((product) => {
        const card = document.createElement("div");
        card.className = "product-card";

        const catTag = document.createElement("p");
        catTag.className = "cat-tag";
        catTag.innerText = product.category;

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;

        const title = document.createElement("p");
        title.className = "product-title";
        title.innerText = product.title;

        const price = document.createElement("p");
        price.className = "product-price";
        price.innerText = "$" + product.price;

        // Buttons
        const btnRow = document.createElement("div");
        btnRow.className = "card-buttons";

        const buyBtn = document.createElement("button");
        buyBtn.className = "btn-buy";
        buyBtn.innerText = "Buy Now";

        const cartBtn = document.createElement("button");
        cartBtn.className = "btn-cart";
        cartBtn.innerText = "Add to Cart";
        cartBtn.addEventListener("click", () => addToCart(product));

        const wishBtn = document.createElement("button");
        wishBtn.className = "btn-wish";
        wishBtn.innerText = "♡ Wishlist";
        wishBtn.addEventListener("click", () => addToWishlist(product));

        btnRow.append(buyBtn, cartBtn, wishBtn);
        card.append(catTag, img, title, price, btnRow);
        container.append(card);
    });
}

// Init
updateCartBadge();
fetchData();
