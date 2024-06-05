let Object1 = {
    a:'manish',
    b:3,
    c:4,
    d:'pandey'
}

const Object1Keys = Object.keys(Object1);
console.log('These are kyes of Object1',Object1Keys);
const Object1Valus = Object.values(Object1);
console.log('These are the values of Object1',Object1Valus);

const Object1Entries = Object.entries(Object1);
console.log("This is Object1 in array",Object1Entries);







for (let i in Object1){
    // if (Object.hasOwnProperty.call(Object1, i)) { // Optional, but recommended to filter out prototype properties
    console.log('this is Object loop',i, Object1[i]);
//}
}




// const arr1 = [1,2,3,4,5]
// arr1.forEach(element => {
//     console.log('hello',element,arr1[element])
// });