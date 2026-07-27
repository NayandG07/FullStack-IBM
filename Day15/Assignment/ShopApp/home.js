// home.js - Fetch and display featured products, update cart badge

// Update cart badge from localStorage
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartBadge").innerText = cart.length;
}

// Add to cart - stores product in localStorage array
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
    alert(`"${product.title.slice(0, 30)}..." added to cart!`);
}

// Add to wishlist - stores product in localStorage array (no duplicates)
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

// Fetch featured products (first 8 from API)
async function fetchFeaturedProducts() {
    const response = await fetch("https://fakestoreapi.com/products?limit=8");
    const data = await response.json();
    renderFeatured(data);
}

function renderFeatured(data) {
    const loader = document.getElementById("featuredLoader");
    loader.style.display = "none";

    const container = document.getElementById("featuredProducts");

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

        // Buttons row
        const btnRow = document.createElement("div");
        btnRow.className = "product-card-buttons";

        const cartBtn = document.createElement("button");
        cartBtn.className = "btn-add-cart";
        cartBtn.innerText = "Add to Cart";
        cartBtn.addEventListener("click", () => addToCart(product));

        const wishBtn = document.createElement("button");
        wishBtn.className = "btn-wishlist";
        wishBtn.innerText = "♡ Wishlist";
        wishBtn.addEventListener("click", () => addToWishlist(product));

        btnRow.append(cartBtn, wishBtn);
        card.append(catTag, img, title, price, btnRow);
        container.append(card);
    });
}

// Init
updateCartBadge();
fetchFeaturedProducts();
