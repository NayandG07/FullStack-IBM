// cart.js - Reads cart from localStorage and renders items

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cartBadge").innerText = cart.length;
}

// Remove single item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart(); // Re-render after removal
}

// Clear the entire cart
function clearCart() {
    if (confirm("Are you sure you want to clear the cart?")) {
        localStorage.setItem("cart", JSON.stringify([]));
        renderCart();
    }
}

function renderCart() {
    updateCartBadge();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cartItems");
    const summaryDiv = document.getElementById("cartSummary");
    container.innerHTML = "";

    if (cart.length === 0) {
        // Empty state
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🛒</span>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything yet.</p>
                <a href="products.html" class="btn btn-primary">Browse Products</a>
            </div>
        `;
        summaryDiv.style.display = "none";
        return;
    }

    // Show summary
    summaryDiv.style.display = "block";

    let total = 0;

    cart.forEach((product, index) => {
        total += product.price;

        const item = document.createElement("div");
        item.className = "cart-item";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;

        const info = document.createElement("div");
        info.className = "cart-item-info";

        const category = document.createElement("p");
        category.className = "item-category";
        category.innerText = product.category;

        const title = document.createElement("p");
        title.className = "item-title";
        title.innerText = product.title;

        const price = document.createElement("p");
        price.className = "item-price";
        price.innerText = "$" + product.price;

        info.append(category, title, price);

        const removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.innerText = "Remove";
        removeBtn.addEventListener("click", () => removeFromCart(index));

        item.append(img, info, removeBtn);
        container.append(item);
    });

    // Update summary numbers
    document.getElementById("itemCount").innerText = cart.length;
    document.getElementById("subtotal").innerText = "$" + total.toFixed(2);
    document.getElementById("totalPrice").innerText = "$" + total.toFixed(2);
}

// Init
renderCart();
