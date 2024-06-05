console.log(isNaN(NaN));        // true
console.log(isNaN(10));         // false
console.log(isNaN('hello'));    // true (due to type coercion)
console.log(isNaN(undefined));  // true (due to type coercion)

console.log(Number.isNaN(NaN));       // true
console.log(Number.isNaN('hello')); 

function isReallyNaN(value) {
    return typeof value === 'number' && isNaN(value);
  }

const myButton1 = document.getElementById('myButton');
myButton1.addEventListener('click',()=>{
    console.log('hello everyone'); alert('button clicked')
  })