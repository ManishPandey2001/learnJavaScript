const cart = ['toy_car', 'toothbrush', 'rubber','jam','biscuit'];

function cartfull(a, rr, items) {
  rr();
  if (a > 3) {
    console.log('this cart is full', items);
    return true;
  } else {
    console.log('add more items to cart', items);
    return false;
  }
}

function orderdetails(a,b){
if(a){
  const d = b.length *20;
  console.log('your total is:',d);
  return d;
}else{
  return console.error('order canoot place items not found');
}
}

function bill(a){
if(a){
  const bill = a;
  console.log('this is your bill',bill);
  return bill;
}
else{
  return console.error('cannot getrate bill');
}
}


const hh = bill(orderdetails(cartfull(cart.length,(()=>console.log('welcome to our shop')),cart),cart));
console.log(hh);
// setTimeout(((hh)=>{
//    const a= hh()
//   if(a){
//     return a;
//   }else{
//     return console.log('not possible')
//   }
// }),5000);