/**
 * Using the equality operators `==` or `===` to compare `Date` objects in JavaScript will not directly check if the dates 
 * and times represented by the objects are equal. 
 * Instead, it will check whether the two `Date` objects refer to the exact same object in memory.
 * Since each `Date` object is created as a separate instance, even if they represent the same point in time, 
 * they won't be considered equal using `==` or `===`.

This is because in JavaScript, objects (including `Date` objects) are compared by reference, not by value. 
Comparing by reference means that JavaScript checks whether two variables point to the same location in memory rather
than checking if the content of those locations (in this case, the date and time values) is the same.

To accurately compare the date and time values of `Date` objects, you need to use methods that convert the dates into 
a comparable format, such as numerical timestamps using `.getTime()` or `.valueOf()`,
 or by comparing their ISO string representations using `.toISOString()`. Alternatively, you can use libraries designed 
 to handle date comparisons like `date-fns` or `moment.js`.

 */

const date = new Date();
const date1 = new Date();
// wrong
if(date == date1){
    console.log('Hi the dates are same',date);
}else{
    console.log('Hi the dates are not same', date, date1);
}

//right
if(date.getTime() == date1.getTime()){
    console.log('Hi the dates are same',date);
}else{
    console.log('Hi the dates are not same', date, date1);
}

if(date.getDate() == date1.getDate()){
    console.log('Hi the dates are same',date);
}else{
    console.log('Hi the dates are not same', date, date1);
}

if(date.valueOf() == date1.valueOf() ){
    console.log('Hi the dates are same',date);
}else{
    console.log('Hi the dates are not same', date, date1);
}


console.log((Math.ceil(Math.random()*10)));