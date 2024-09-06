// There are two types of Memory:
// Stack => Primitive
// Heap => Non-primitive

// Stack is used for primitive data types (it returns a copy)
// Heap is used for non-primitive data types (it returns the original reference)

// Stack Memory Notes:
// 1. Used for primitive data types (e.g., strings, numbers, booleans)
// 2. Creates a copy of the value when assigning to a new variable
// 3. Changes to the copy don't affect the original value

let myYoutubeName = "dfghjk";
let anotherName = myYoutubeName;  // Creates a copy of the value
anotherName = "satish";  // Modifies only 'anotherName', not 'myYoutubeName'

console.log(anotherName);  // Output: "satish"
console.log(myYoutubeName);  // Output: "dfghjk" (unchanged)

// Example of Heap Memory (non-primitive data type)
let user = {
    email: "abc@gmail.com",
    upi: "user123@upi"
};

let user2 = user;  // Both variables reference the same object in memory
user.email = "newemail@gmail.com";

console.log(user);  // Output: { email: "newemail@gmail.com", upi: "user123@upi" }
console.log(user2);  // Output: { email: "newemail@gmail.com", upi: "user123@upi" }

