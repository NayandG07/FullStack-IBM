const regForm = document.getElementById('registerForm');

regForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const phoneNumber = document.getElementById("registerPhone").value;

    const userData = {
        fullName, email, password, phoneNumber
    }

    const response = await fetch("http://localhost:8000/api/registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const res = await response.json();

    if (response.ok) {
        Toastify({
            text: res.message,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    } else {
        Toastify({
            text: res.message,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ff5f6d, #ffc371)",
            },
        }).showToast();
    }
})

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const userData = {
        email, password
    }

    const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const res = await response.json();

    if (response.ok) {
        localStorage.setItem("token", res.user.token);
        localStorage.setItem("user", JSON.stringify(res.user.user));
        window.location.href = "user.html";
    } else {
        Toastify({
            text: res.message,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ff5f6d, #ffc371)",
            },
        }).showToast();
    }
})