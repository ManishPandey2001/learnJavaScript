//Class

class Mobiles{
    constructor(brand,ram, storage){
        this.Brand= brand,
        this.Ram = ram,
        this.Storage =storage
    }
  price(r) {
return r+(this.Ram*200)+(this.Storage*100);    
  }
}

const vivo = new Mobiles('Y29',4,128);
const priceofvivo=vivo.price(4000);
console.log('this is a phone',vivo,priceofvivo)

//  closures function

function factorial1(n){
    if(n === 0 || n===1){
        return 1;
    }
 let cache ={};
  if(cache[n]){
    return cache[n];
  }
  else{
   let result;
    result = n * factorial1(n -1);
   cache[n] = result
 return result;
  }
}
 
console.log('this is closser function of factoiral',factorial1(7));

// module here i have used a class form day1 practise questions

import { Nation } from "../learningWithShardeDay1/Q3.mjs";

const INDIA = new Nation('Inida','Hindi english','brown');

console.log(INDIA.sumofTwo(23,45));

//