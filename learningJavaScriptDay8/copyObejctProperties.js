const obj1 = { name: "raja", number: 34 };
let obj2 = { adress: "Ramnagar", age: 24 };


const obj3 ={}

// 1
obj2 = {...obj1, ...obj2};
console.log(obj2)
// 2
const person2 = Object.assign(obj3,obj2);
console.log(obj3)
