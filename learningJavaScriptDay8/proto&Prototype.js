/**
 * In JavaScript, both `__proto__` and `prototype` are closely tied to the concept of inheritance, but they serve distinct roles and have different characteristics.

**`prototype`**

* **Property of functions (constructor functions):** It's a property that exists on constructor functions (functions used with the `new` keyword to create objects).
* **Template for objects:**  The `prototype` property acts as a blueprint for the objects created by the constructor. It holds properties and methods that will be shared by all instances of that object type.
* **Accessed through the constructor:** You can access and modify the `prototype` property directly on the constructor function itself (e.g., `MyConstructor.prototype.myMethod = ...`).

**`__proto__`**

* **Property of objects:** It's an internal property (often called "dunder proto") that exists on every object created in JavaScript.
* **Reference to the prototype:** The `__proto__` property of an object points to the `prototype` object of its constructor function. This establishes the inheritance chain, allowing objects to access properties and methods defined on their prototype.
* **Accessed through the object:** You can access (but not directly modify) the `__proto__` property of an object (e.g., `myObject.__proto__`).

**Key Differences Summarized:**

| Feature        | `prototype`                                                                                                                                                             | `__proto__`                                                                                                    |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------|
| **Type**       | Property of constructor functions                                                                                                                                       | Internal property of objects                                                                                    |
| **Purpose**     | Defines the shared properties and methods of objects created by the constructor function.                                                                               | Provides a link to the prototype object of the object's constructor, enabling inheritance.                   |
| **Access**     | Accessed directly on the constructor function (e.g., `MyConstructor.prototype`).                                                                                        | Accessed through the object itself (e.g., `myObject.__proto__`).                                              |
| **Modification** | Can be directly modified to add, remove, or change properties and methods on the prototype.                                                                          | Should not be directly modified. Use `Object.getPrototypeOf()` and `Object.setPrototypeOf()` for manipulation. |
| **Usage**       | Primarily used when defining constructor functions and setting up inheritance relationships.                                                                          | Used internally by the JavaScript engine to resolve property lookups and implement inheritance.            |


**Example:**

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log("Hello, my name is " + this.name);
};

const john = new Person("John");
john.sayHello(); // Output: "Hello, my name is John" 
console.log(john.__proto__ === Person.prototype); // Output: true
```

In this example:

* `Person.prototype` is the prototype object of the `Person` constructor, containing the `sayHello` method.
* `john.__proto__` is the `__proto__` property of the `john` object, which references `Person.prototype`, allowing `john` to access the `sayHello` method.

**Note:** Although `__proto__` is widely supported, it's not part of the official ECMAScript standard. The recommended way to interact with prototypes is using `Object.getPrototypeOf()` and `Object.setPrototypeOf()`.

Let me know if you have any further questions!

 */


object1 = {
    name:'Manish',
    Class:15,
    Rollno:34,
    Address: 'chandigarh'
}


object1.prototype = function thisIsSsn(ssn){
    this.ssn = ssn;
}

object1.prototype(2243253)

console.log('This is object one',object1)
console.log('This is object one prototype',object1.prototype)



function newConst(name, class1 , Rollno, age){
    this.name = name;
    this.age = age;
    this.class = class1;
    this.Rollno =Rollno;
}

//new prototype
newConst.prototype.hello121 = function(arg1){
    this.phone = arg1;
}
const object2 = new newConst('Satu',23,5,32 )
object2.hello121(232323)

console.log('This is object two',object2)
console.log('This is object two prototpye',object2.hello121)
console.log('This is object two __proto',object2.__proto)

