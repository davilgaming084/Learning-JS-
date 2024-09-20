// Creating an object can be done in two ways:
// 1. Literal way
// 2. Constructor way (always single use)

const mySymbol = Symbol("key1"); // Create a unique symbol

// Object literal way
let obj = {
    name: "Satish", // Property: name
    age: '18',      // Property: age
    location: "Delhi", // Property: location
    email: 'dbssc@gmail.com', // Property: email
    logDays: ['Mon', "Sat"], // Property: logDays (corrected spelling)
    [mySymbol]: "Hello Symbol" // Property with symbol as key
};

// Accessing object properties in two ways:
// 1) Dot notation: console.log(obj.name);
// 2) Bracket notation: console.log(obj["email"]); // Important: keys are strings behind the scenes

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj[mySymbol]); // accswssing symbol in obj
// obj.name = "mohit" // updateing 

///// add function in obj =>
obj.greeting = function() {
    console.log("helo func");
}
// add function on obj use obj prop
obj.greeting2 = function () {
    console.log(`name of this obj ${this.name}`);
}

// Adding a symbol to the object:
// Step 1: Create a variable like this: let mySymbol = Symbol("key1");
// Step 2: Create a property in the object like this: [mySymbol]: "Hello Symbol";
// Step 3: Access the symbol in the object: console.log(obj[mySymbol]); // Symbols are only accessible using bracket notation


// obj method 
Object.keys()// credate array and put all key as elemnet of array
Object.values()// craete array and put all value as element of array
Object.entries()// create array and put [key-value] pair as element
Object.freeze(obj) // now freez obj you canot change anything
Object.assign()// concat two or more obj /






















// Notes:
// Behind the scenes, object properties are added like this:
// {
//   "name": "Satish",
//   "age": "18",
//   "location": "Delhi",
//   "email": "dbssc@gmail.com",
//   "logDays": ["Mon", "Sat"],
//   "key1": "Hello Symbol" // Symbol keys are not shown in normal object iteration
// }

// Adding a symbol to the object:
// Step 1: Create a variable like this: let mySymbol = Symbol("key1");
// Step 2: Create a property in the object like this: [mySymbol]: "Hello Symbol";
// Step 3: Access the symbol in the object: console.log(obj[mySymbol]); // Symbols are only accessible using bracket notation

console.log(obj.greeting());
console.log(obj.greeting2());