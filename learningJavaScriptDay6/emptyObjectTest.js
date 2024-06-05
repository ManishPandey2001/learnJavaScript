const testObject = {
  a: "Manish",
  b: "It is object",
  c: 45,
  d: "hello",
};

const testObject1 = {};
function toTestObjectIsempty(abc) {
    if (Object.keys(abc).length === 0 && Object.values(abc).length === 0 ) {
        return false;
    } else {
      console.log(abc);
      return true
    }
}
   

console.log('case true',toTestObjectIsempty(testObject))

console.log('case false',toTestObjectIsempty(testObject1))


// const length =  Object.keys(testObject1).length;
// console.log(length);