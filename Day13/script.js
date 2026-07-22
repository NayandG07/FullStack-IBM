const clickFunc = () => {
    console.log("Submitted");
}
btn.addEventListener("click", clickFunc);

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    let fullName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        fullName,
        email,
        password
    }
    e.preventDefault();

    // localStorage.setItem("userData", user); // Storing user data in local storage
    // localStorage.setItem("userData", JSON.stringify(user)); // Storing user data in local storage as string

    // Multiple user data storage in local storage
    let arr = JSON.parse(localStorage.getItem("users")) || [];
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].email === user.email) {
            return alert("User already exists");
        }
    }
    
    arr.push(user);
    localStorage.setItem("users", JSON.stringify(arr));
})

// let dataFromLocalStorage = localStorage.getItem("userData");

// // console.log(dataFromLocalStorage); // Inaccessible data because it is stored as string in local storage, we need to parse it to access the data

// console.log(JSON.parse(dataFromLocalStorage));
// console.log(JSON.parse(dataFromLocalStorage).fullName); // Accessing fullName from local storage data

let dataFromLocalStorage = JSON.parse(localStorage.getItem("users"));
console.log(dataFromLocalStorage);


const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", () => {
    window.location.href = "login.html";
});

