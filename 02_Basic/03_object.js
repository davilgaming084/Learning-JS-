// Object literal way
// let obj = {
//     name: "Satish", // Property: name
//     age: '18',      // Property: age
//     location: "Delhi", // Property: location
//     email: 'dbssc@gmail.com', // Property: email
//     logDays: ['Mon', "Sat"], // Property: logDays (corrected spelling)
//     [mySymbol]: "Hello Symbol" // Property with symbol as key
// };



/// object constructor // singleton obj  
// let myappUser = new Object() //This is called object instantiation using the Object constructor. It creates a new, empty object. This method is less commonly used compared to object literals, but it is still valid.

let myApp = {}
myApp.id = "123abc"
myApp.name = "sam"
myApp.login = false
// console.log(myApp);


let otherApp = {
    email: "abc@gmail.com",
    fullname: {
        userFullName: {
            fName: "satish",
            lName: "saroj"

        }
    }
}
// console.log(otherApp.fullname.userFullName); // Accsessing nested array 

//combain obj by spread/ object.assign
let a = { a: "a", b: "b" }
let b = { b: "b", c: "c" }

// object.assign 
let newCombineByOBJdotASSIGN = Object.assign({}, a, b)
// Spread Operator
let newCombineBySpread = { ...a, ...b }

console.log(newCombineByOBJdotASSIGN);
console.log(newCombineBySpread);

// data from database arrayObj
let user = [
    {
        id: "obj1",
        name: "obj1"
    },
    {
        id: "obj2",
        name: "obj2"
    },
    {
        id: "obj3",
        name: "obj3"
    },
    {
        id: "obj4",
        name: "obj4"
    },
]
// Acssesing array obj from data base
console.log(user[0]);
console.log(user[0].name);

// Obj Methods

// Object.keys(obj) - Returns an array of a given object's own property/key names.
let keys = Object.keys(myApp); // ['id', 'name', 'login']

// Object.values(obj) - Returns an array of a given object's own property values.
let values = Object.values(myApp); // ['123abc', 'sam', false]

// Object.entries(obj) - Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
let entries = Object.entries(myApp); // [['id', '123abc'], ['name', 'sam'], ['login', false]]

// Object.assign(target, ...sources) - Copies all enumerable own properties from one or more source objects to a target object.
let combined = Object.assign({}, myApp, otherApp); // Combines properties of myApp and otherApp

// Object.freeze(obj) - Freezes an object, preventing new properties from being added and existing properties from being removed or modified.
Object.freeze(myApp); // myApp is now immutable

// Object.seal(obj) - Seals an object, preventing new properties from being added but allowing existing properties to be modified.
Object.seal(myApp); // myApp can still be modified but not extended

// Object.getOwnPropertyDescriptor(obj, prop) - Returns a property descriptor for an own property (data descriptor or accessor descriptor).
let descriptor = Object.getOwnPropertyDescriptor(myApp, 'name'); // { value: 'sam', writable: true, enumerable: true, configurable: true }

// Object.hasOwnProperty(prop) - Returns a boolean indicating whether the object has the specified property as its own property.
let hasId = myApp.hasOwnProperty('id'); // true
