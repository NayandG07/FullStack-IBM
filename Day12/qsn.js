

let products = {
    laptop: 45000,
    iphone: 67000,
    mobileCover: 1200,
    tablet: 58999
}

// discount is 15 % on each product
// Find out final price of each product after discount in the certain relevant data structure using higher order functions

let ans = Object.values(products).map((e)=>{
    return e - (e * 0.15)
})
console.log(ans)

