// DOM Manipulation
// console.log(window.alert("Success"))

para = document.getElementById("para");

para.innerHTML = "I am para text from JS file";
console.log(para);

para.style.border = "2px solid violet";
para.style.backgroundColor = "lavender";
para.style.color="black";

const btn = document.createElement("button");
const btnDiv = document.getElementById("btn");
btn.innerHTML = "Click Me";
btn.style.padding = "10px";
btn.style.border="none";
btn.style.borderRadius = "5px";
btn.style.backgroundColor = "aquamarine";
btnDiv.appendChild(btn); // Appending button to div because we cannot append button directly to body as it is not a block element


const clickFunc=()=>{
    console.log("Button Clicked");
}

btn.addEventListener("click", clickFunc); // Adding event listener to button

btn.addEventListener("click", ()=>{ // Using Anonymous function to add event listener to button
    console.log("Button Clicked inside event listener");
})

