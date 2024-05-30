// Store data
localStorage.setItem('username', 'john_doe');

// Retrieve data
let username = localStorage.getItem('username');
console.log(username); // Output: john_doe

// Remove data
localStorage.removeItem('username');


// Store data
sessionStorage.setItem('product', 'laptop');

// Retrieve data
let product = sessionStorage.getItem('product');
console.log(product); // Output: laptop

// Remove data
sessionStorage.removeItem('product');
