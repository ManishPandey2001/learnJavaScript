/*
 == is loose equality donot checks the type
 === strict equality checks for types


*/

const abc = 123;
const bcd = 123;

if(abc == bcd){
    console.log(`value1: ${abc} is equal to ${bcd} `)
} 

if(abc === bcd){
    console.log(`value1: ${abc} is equal to ${bcd} in === `)
}

const bccc = 123;
const bcde = 123;

if(bccc == bcde){
    console.log(`value12: ${bccc} is equal to ${bcde} `)
} 

if(bccc === bcde){
    console.log(`value12: ${bccc} is equal to ${bcde} in === `)
}


console.log(1 === "1");  // Output: false (different data types)
console.log(false === 0); // Output: false (different data types)
console.log(null === undefined); // Output: false (different data types)
console.log("1" === 1);   // Output: false (same value, different data types)
console.log(NaN === NaN);  

console.log(1 == "1");  // Output: true (different data types)
console.log(false == 0); // Output: true (different data types)
console.log(null == undefined); // true: false (different data types)
console.log("1" == 1);   // Output: true (same value, different data types)
console.log(NaN == NaN);  
