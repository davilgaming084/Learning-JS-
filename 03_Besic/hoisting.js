console.log(one("Satish")); // This works because function declarations are hoisted.
function one(name) {
    return name;
}

// console.log(name("satish")); // Uncommenting this will cause an error because function expressions are not hoisted.
let name = function (name) {
    return name;
}

// Important Notes on Hoisting:
// 1. **Function Declarations** (like 'one') are fully hoisted. You can call them before they are defined.
// 2. **Function Expressions** (like 'name') are not fully hoisted. You cannot call them before their definition.
// 3. **Variables** declared with 'let' and 'const' are hoisted but cannot be used until they are declared (they are in a "dead zone").