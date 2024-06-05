/*
there are various ways to create a Object in JS:
1.Using simple object literls or curved breces {} this is the basic and most common method for simple problems.
*/

const firstObject = {
    Name:'manish',
    age: 28,
    number: 3434223
};

console.log('this is first object',firstObject);

// 2. using a function to create a Object
function createObject(name,age){
  return {
    Name:name,
    Age:age
  }
};

console.log('this is createObject',createObject('Manish', 34));

//3. using a class

class CreateObjectOne{
  constructor(name,age){
    this.name= name,
    this.age = age
  }
}

const classObject = new CreateObjectOne('Ravi',21);
console.log('this is classObject',classObject);

//4. using constructor functions which are specialy made to create objects

function cars(name,brand,model){
    this.Name=name,
    this.Brand=brand,
    this.Model=model
}

const carOne = new cars('swift','swzuki',2023);
console.log('this is carOne',carOne);

//5.Using the new Keyword with Built-in Constructors:

const newBooks = new Object();
newBooks.Name = 'Maths' ;
newBooks.Pages = 34;
newBooks.Name ="science";
console.log('this is newbooks',newBooks);


//there are two more properties which we can use like:

const mixObject1 = Object.assign(newBooks,carOne);
console.log('this is mixObject1',mixObject1);
const mixObject2 = { ...classObject,...carOne};
console.log('this is mixObject2',mixObject2);
