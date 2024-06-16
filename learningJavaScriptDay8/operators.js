let a = [1,2,3,4,5,5,5,6,55,46];

const b ={
    name:'rja'
}
console.log(++a);

Object.defineProperty(b,'year',{
    value: 2003,
    writable:true,
    enumerable:true,
    configurable:true,
})
b.year = 303
console.log(b);

let x = 5;
let y = 10;

console.log(x + y);   // Addition: 15
console.log(y / x);   // Division: 2
console.log(x ** 3);  // Exponentiation: 125
console.log(x > 3 && y < 20); // Logical AND: true
console.log(typeof x); // Output: "number"