// Variables Declaration 
// const, let, var


// const is use for constant value  means it can't be change modify or redeclare
// let is use for variable value  means it can be change modify or redeclare
//var -> dont use  var becouse of scoping problem
// is use for variable value  means it can be change modify or redeclare 

const accountId = 144553 
let accountEmial = "abc@gmail.com"
var accountPassword = "12345"
accountCity = "New Delhi"
let accoountState; // undefined

//accountId = 1 // not allowed  because of const
accountEmial = "bca@gmail.com"
accountPassword = "212121"
accountCity = "mumbai"
// console.log(accountId);
console.table([accountId,accountEmial,accountPassword,accountCity,accoountState]); // console.table is use for print the value in table format


// NOtes 
//prefer not to use var because of issue in scoping or functional scope