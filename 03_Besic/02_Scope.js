//globle scope=> everything in code is globle scope exept code of curly breket.function-curly-breket ,if,while etx
// inner code of {} block scope
// outer code of {} is => globalscop
// functionol scope => code for only function

// ex --> 
// Global Scope
let globalVar = "I am a global variable";

console.log(globalVar); // Accessible anywhere

// Functional Scope
function exampleFunction() {
    let funcVar = "I am a function variable";
    console.log(funcVar); // Accessible here

    // Block Scope
    if (true) {
        let blockVar = "I am a block variable";
        console.log(blockVar); // Accessible here
    }

    // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
}

// exampleFunction();

// console.log(funcVar); // Uncaught ReferenceError: funcVar is not defined



/// nested scope / closer scope
// parent does not accsess child but child accsess parent -->
function one() {
    const username = "satish"

    function two(){
        const website = "youtubr"
        console.log(username);
    }
    // console.log(website); // eror not defind
    two()
}
// one()

if (true) {
    let username = "satish"
    if (username === "satish") {
        const website = "yt"
        console.log(username + website);
    }
    // console.log(website); error not drfind
}
//console.log(username);// error not defind

/// =========== intresting ============ hoisting of function 
console.log(addOne(5));// accsessable becouse fun crated by function keyword 
function addOne(num) {
    return num +1
}
console.log(addtwo()); // 
let addtwo = function (num) { // it is expression function 
    return num + 1
}




////// key point
/// in block scope function if, for, while, etc where use {} block code it mean under of curly breket{} will never pass outside
// curly breket{} will never pass outside 
