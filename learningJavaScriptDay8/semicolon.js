/**
 * In JavaScript, semicolons serve the primary purpose of marking the end of a statement.
 * They are not always strictly required due to automatic semicolon insertion (ASI), 
 * which is a mechanism that tries to guess where semicolons should be inserted. 
 * However, understanding their usage is crucial for avoiding unexpected errors and 
 * ensuring your code behaves as intended.
 */

const person ={name:'alcie'}; // here without semilcon this code breaks
[1,2,3].forEach(i => {
    console.log('this is =',i)
});
