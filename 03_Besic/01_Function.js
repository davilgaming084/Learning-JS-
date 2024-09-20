// funnction -> reusable block of code perform spesifoc task
// declearing function => 


// fun-keywod|fun-name|parameter(a,b)| code/work{log("hi")}
function saymyname() {
    console.log("S");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("S");
    console.log("H");
}
// saymyname // refrance of fun 
// saymyname() // fun run/call


// let create some workfulll fun 
// sum - add
function add(number1, number2) { // number1,number2 are parameters   
    console.log(number1 + number2);
}
// add(2,2)     // () argument where you give value which is number1,number2 
// add(2,"2")   // 22 of string convert 2 into string 
// add(2,"a")   // 2a  do need to clerify both argument are same datatype


/// Return key word --------------
// return use for return value ans work function itself as function value
// if you use return the also use console.log(function_name(1,1))
// when you use  return key word in fun then it tereat as variable which hold some value/ans 
// if you use return the in next line of return nevwer exicute 

function plus(num1, num2) {
    return num1 + num2 // return ans on function itself  as function value then console.log(plus(2,2)) => 4
}
// plus(2,2)/// only exicute // not useable in return function
// console.log(plus(2, 2)); // plus value is 4 now // useable in return function
let funresult = plus(3, 3) // plue value assign in variable 
// console.log(funresult);


/// default parameter of fun
function sayname(name = "satish") {
    return name // return ans on function itself  as function value then console.log(plus(2,2)) => 4
}
// console.log(sayname());

// function type

// 1. Function Declaration
//    function myFunction() {
//        // code
//    }

// 2. Function Expression
//    - Anonymous Function Expression:
//      const myFunction = function() {
//          // code
//      };

// 3. Arrow Function
//    const myFunction = () => {
//        // code
//    };

// 4. Immediately Invoked Function Expression (IIFE)
//    (function() {
//        // code
//    })();

// --------------------------------------------


// Rest operator---
// The rest operator allows you to handle multiple arguments as a single array.

function CalculatePrice(num) { // Non-rest operator
    return num; // Returns the single argument
}
// console.log(CalculatePrice(2)); // Example with one argument
// console.log(CalculatePrice(220, 300, 700)); // Example with multiple arguments

// Using the Rest operator to handle multiple arguments
function CalculatePrice(...nums) { // '...nums' collects all arguments into an array
    return nums; // Returns the array of arguments
}
// console.log(CalculatePrice(200, 300)); // Returns [200, 300]

/////// use obj/array in function
// array
// way -1 
let arr = [1,2]
function useArr(arr) {
    console.log(arr);
}
useArr(arr)
// way -2
function useArr(arr) {
    console.log(arr);
} 
console.log([1,2]);

// obj--------

// way -1 
let obj = {
    name:"satish"
}
function onjget(obj) {
    console.log(`${obj.name}`);
}
onjget(obj)

// way-2
function getobj(obj) {
    console.log(`${obj.name}`);
}
getobj({name:'satish'})