const clickFunc=()=>{
    console.log("Button Clicked");
}

btn.addEventListener("click", clickFunc); // Adding event listener to button

btn.addEventListener("click", ()=>{ // Using Anonymous function to add event listener to button
    console.log("Button Clicked inside event listener");
})

let form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
    let fullName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        fullName,
        email,
        password
    }
    e.defaultbehavior();

    // localStorage.setItem("userData", user); // Storing user data in local storage
    localStorage.setItem("userData", JSON.stringify(user)); // Storing user data in local storage as string

})


