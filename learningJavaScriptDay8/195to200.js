object1 = new Object(
   {name:'manish',age:34, class:12} 
)

Object.seal(object1);

object1.age =30; //is possible
object1.adress= 'chandigarh'; // this is not possible
console.log(object1);

object2 = new Object(
   {name:'RAMU',age:64, class:14} 
)

Object.freeze(object2)
object2.city = 'rampur';//not possible
object2.age = 34;//not possible

console.log(object2);
console.log('object one is sealed or not', Object.isSealed(object1));
console.log('object two is sealed or not', Object.isSealed(object2));

const keys = Object.keys(object1);
const enties = Object.entries(object1);

console.log("keys and enties in array", keys , enties)