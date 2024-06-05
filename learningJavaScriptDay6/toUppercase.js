/**
 * toUpper case donot updates orinial string.
 */

const manish = 'manish';
const jj = manish.toUpperCase();

 console.log(manish);
  console.log(jj);

function toFirstUpperCase(str){
return str[0].toUpperCase() + str.slice(1);    
}

console.log(toFirstUpperCase('mannn'));

function capitalizeFirstLetter(str) {
  return str.replace(/^\w/, c => c.toUpperCase());
}
 
console.log('this is function of regex',capitalizeFirstLetter('pandey'));