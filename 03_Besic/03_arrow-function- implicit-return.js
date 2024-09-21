let add = (num1, num2) => {
    console.log(num1 + num2);
}
add(2, 2)

///////////////////////////// explicit or implicit return


// Explicit Return: You use the 'return' keyword to return a value.
// Example:
let explicitPlus = (a, b) => {
    return a + b; // Must use 'return' keyword
}

// Implicit Return: You do not use the 'return' keyword, and the expression is on a single line.
// Example 1: Without parentheses
let implicitPlus1 = (a, b) => a + b; // No 'return' keyword needed

// Example 2: With parentheses
let implicitPlus2 = (a, b) => (a + b); // Still no 'return' keyword needed || but () use for add object ({username:"satish"})

// Important Note:
// - Use explicit return when you have multiple lines of code in the function body.
// - Use implicit return for simple, single-line expressions.


/// object return in implicit return
let abc  = ()=>({username:"satish"})
console.log(abc());