// cart logic

const cartData = JSON.parse(localStorage.getItem("cartData")) || [];

const cartContainer = document.getElementById("cartContainer");

async function displayCartData() {
    cartContainer.innerHTML = "";
    cartData.forEach((item, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.style.border = "1px solid #ccc";
        cardDiv.style.padding = "10px";
        cardDiv.style.marginBottom = "10px";
        cardDiv.style.display = "flex";
        cardDiv.style.alignItems = "center";
    });
}