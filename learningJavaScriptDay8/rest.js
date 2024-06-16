//What is a rest parameter
// In JavaScript, a rest parameter (denoted by ... before a variable name) allows a function to accept an 
// indefinite number of arguments as an array. 
// It simplifies the process of gathering all remaining arguments into a single, easily manageable data structure.
// What happens if you do not use rest parameter as a last argument?
// we will get syntexerror

function sum(...nums){
    let sum = 0;
    for (let num of nums){
        sum += num; // is same as sum = sum + num; 
    }
    return sum;
}

console.log(sum(2,3,4,5,6,7,8));