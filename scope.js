/// they are three types of scopes
/// Global Scope
// Function Scope
// Block Scope (introduced in ES6)

// GLOBAL SCOPE
// Variables declared outside of any function or block have global scope. They can be accessed from anywhere within the script, including inside functions and blocks.

// example 1

// Global scope variable
const globalVar = 'I am in global scope';

function fool() {
    console.log(globalVar); // Accessing globalVar from inside the function
}

fool(); // Output: I am in global scope

// In this example, globalVar is accessible both inside and outside the foo function because it's declared in the global scope.

// Function Scope

/// Variables declared inside a function have function scope. They are accessible only within the function in which they are defined.

function outerFunction() {
    const localVar = 'I am in function scope';

    function innerFunction() {
        console.log(localVar); // Accessing localVar from inside the inner function
    }

    innerFunction();
}


outerFunction(); // Output: I am in function  n scope

let zey = 'abdi'

function zeytun() {
  
}

console.log(zey)