// There are two types of datatypes:
// 1. Primitive 
// 2. Non-Primitive

// Primitive / Call by value -> means copy of value 
// - string
// - number
// - boolean
// - null
// - undefined
// - bigint
// - symbol

// Examples:
let bigNumber = 1234567812345n; // bigint
let id = Symbol('123');
let anotherId = Symbol("123");
// console.log(id === anotherId);

// Non-primitive / Reference type
// - array
// - object
// - function

// Examples:
// Array
let heroes = ['Shaktiman', "Nagraj", "Doga"];

// Object
let student = {
    name: "Shaktiman",
    class: 6
};

// Function
function myFunc(params) {
    console.log("Hello world");
}

function name(params) {
    // Function body
}

// Arrow function
() => {};

// JavaScript is a dynamically typed language
console.log(typeof bigNumber);
console.log(typeof null); // object