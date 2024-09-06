// There are two type of Memory
// stack => primativ
// heap => non primatiev

// stack is use for primitive datatype // it return copy 
// heap is use for non primitive datatype // it retuen orignal refrance

// Stack Memory Notes:
// 1. Used for primitive data types (e.g., strings, numbers, booleans)
// 2. Creates a copy of the value when assigning to a new variable
// 3. Changes to the copy don't affect the original value

let myyoutubeName = "dfghjk";
let anothername = myyoutubeName;  // Creates a copy of the value
anothername = "satish";  // Modifies only 'anothername', not 'myyoutubeName'

// console.log(anothername);  // Output: "satish"
// console.log(myyoutubeName);  // Output: "dfghjk" (unchanged)

let user = {
    email : "abc@gnankd",
    upi : "qwghdvqwh@abl"

}
let user2 = user
user.email = "newemail"
console.log(user);
console.log(user2);

