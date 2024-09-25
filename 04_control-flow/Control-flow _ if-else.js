// control flow => control flow  when code run contitional =>  if,else

// if =>  check  condition under  breaket () if true then code run
if (true) {   // if (condition) true then run 
}
else{} // run when codition false

if (2 == "2") {//  "2" convert as nimber 2 then check 2 ia equal 2 the return true then code exicute
    console.log("run");
}
else{
    console.log("not equal");
}
// condition checking ass comparrision operator 
// >,<,=>,<= ,==,!=,===,!==     


/////// IMplicite scope inplicit if 
// if (2==2) console.log("yes 2 is equal 2 ");


// multipule condition check if- else if - else if
// let score = 10000
// if (score > 10000) {
//     console.log("grater then 10000");
// }
// else if (score < 10000) {
//     console.log("score less 10000");
// }
// else{
//     console.log(" score equal to 10000");
// }

// logical operator with if else
let isloggedin = true
let debitCard =true
let logbyGoogle = true;
let logByfacbook = false
if (isloggedin && debitCard) {  /// && and operator check both(left - right ) condition must be true
    console.log(" you have both of them ");
}
if (logbyGoogle || logByfacbook) { // => || it check 1 condition must be true of both 
    console.log("logged");
}