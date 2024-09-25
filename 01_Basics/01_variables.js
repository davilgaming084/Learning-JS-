// Variables Declaration 
// const, let, var


// const is used for constant values; it can't be changed, modified, or redeclared
// let is used for variable values; it can be changed, modified, or redeclared
// var -> don't use var because of scoping problems
// var is used for variable values; it can be changed, modified, or redeclared 

const accountId = 144553;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
let accountCity = "New Delhi";
let accountState; // undefined

// accountId = 1; // not allowed because of const
accountEmail = "bca@gmail.com";
accountPassword = "212121";
accountCity = "Mumbai";

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); // console.table is used to print the values in table format

// Notes 
// Prefer not to use var because of issues in block scoping and function scoping
