// hoisting
// Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope (either the global scope or function scope) during the compilation phase. This means you can call functions or reference variables before they are actually declared in the code.
// console.log(greet('Alice')); // Works due to hoisting

// function greet(name) {
//     return `Hello, ${name}!`;
// }

// function expression
// A function expression is a way to define a function where the function is assigned to a variable. 
const greet = function(name) {
    return `Hello, ${name}!`;
};

