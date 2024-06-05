/*
slice and splice both are array mehtods and are used to create a new array.

Array.slice()

Functionality: This method extracts a section of an array and returns a new array containing that portion,
 without modifying the original array.
Arguments: It takes two optional arguments (start index, end index):
start index (inclusive): Specifies the index at which the extraction should begin.
end index (exclusive): Specifies the index up to, but not including, where the extraction should end.
Key points about splice:

It directly modifies the original array.
You can use it to remove elements, insert elements, or both simultaneously.
If you omit the deleteCount argument, it removes all elements from the start index to the end of the array.
If you don't provide any new elements to insert, it simply removes elements from the specified index.
Choosing the Right Method:

Use slice when you want to extract a portion of the array without modifying the original one.
Use splice when you need to modify the original array by removing, replacing, or inserting elements. 
*/

const array1 =[2,3,4,24,234,344,2,34,44,43,4];

const array2 = array1.slice(2,5);

console.log('This is Orignal array',array1);

console.log('This is array created after slice',array2);

const arr3 = ['raja', 'raghu', 'rajan','ramu', 'ranjan', 'ravi', 'karan'];

console.log('This is Orignal Name array',arr3);

const arr4 = arr3.splice(3,3)

console.log('This is Orignal Name array after splice',arr3);

console.log('This is New Name array after splice',arr4);

