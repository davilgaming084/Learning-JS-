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

function plus(num1,num2) {
    return num1 + num2 // return ans on function itself  as function value then console.log(plus(2,2)) => 4
}
// plus(2,2)/// only exicute // not useable in return function
console.log(plus(2,2)); // plus value is 4 now // useable in return function
let funresult = plus(3,3) // plue value assign in variable 
// console.log(funresult);


/// default argument of fun
function sayname(name =  "satish") {
    return name // return ans on function itself  as function value then console.log(plus(2,2)) => 4
}
console.log(sayname());
