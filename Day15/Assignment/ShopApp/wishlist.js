// wishlist.js - Reads wishlist from localStorage and renders items

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartBadge").innerText = cart.length;
}

// Move item from wishlist to cart
function moveToCart(product, index) {
    // Add to cart
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Remove from wishlist
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert(`"${product.title.slice(0, 30)}..." moved to cart!`);
    renderWishlist(); // Re-render
}

// Remove from wishlist
function removeFromWishlist(index) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderWishlist();
}

// Clear entire wishlist
function clearWishlist() {
    if (confirm("Are you sure you want to clear your wishlist?")) {
        localStorage.setItem("wishlist", JSON.stringify([]));
        renderWishlist();
    }
}

function renderWishlist() {
    updateCartBadge();

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const container = document.getElementById("wishlistItems");
    const clearWrapper = document.getElementById("clearWishlistWrapper");
    container.innerHTML = "";

    if (wishlist.length === 0) {
        // Empty state
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">♡</span>
                <h2>Your wishlist is empty</h2>
                <p>Save products you love and come back to them later.</p>
                <a href="products.html" class="btn btn-primary">Browse Products</a>
            </div>
        `;
        clearWrapper.style.display = "none";
        return;
    }

    clearWrapper.style.display = "block";

    wishlist.forEach((product, index) => {
        const card = document.createElement("div");
        card.className = "wishlist-card";

        const catTag = document.createElement("p");
        catTag.className = "item-category";
        catTag.innerText = product.category;

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;

        const title = document.createElement("p");
        title.className = "item-title";
        title.innerText = product.title;

        const price = document.createElement("p");
        price.className = "item-price";
        price.innerText = "$" + product.price;

        // Buttons
        const btnRow = document.createElement("div");
        btnRow.className = "card-buttons";

        const cartBtn = document.createElement("button");
        cartBtn.className = "btn-add-cart";
        cartBtn.innerText = "Move to Cart";
        cartBtn.addEventListener("click", () => moveToCart(product, index));

        const removeBtn = document.createElement("button");
        removeBtn.className = "btn-remove";
        removeBtn.innerText = "Remove";
        removeBtn.addEventListener("click", () => removeFromWishlist(index));

        btnRow.append(cartBtn, removeBtn);
        card.append(catTag, img, title, price, btnRow);
        container.append(card);
    });
}

// Init
renderWishlist();
