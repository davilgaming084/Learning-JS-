// let score = "33abc"
// let score = null 
let score = true 


// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)// converting string into number
// console.log(typeof valueInNumber); // convert in number 
// console.log(valueInNumber); //Nan because of 33abs

// convert null in number => 0
// convert undifind in number => Nan
// convert boolean in number => true => 1 / false => 0

//notes convert all datatype in number
// "33" => 33
// "33abc"=> Nan
// true => 1 
//false => 0 
// null => 0
// undifind => Nan



//////////  convert in bollean
// let isloggedin = 1
let isLoggedIn = null

let convertNumberToBoolean = Boolean(isLoggedIn)
// console.log(typeof isLoggedIn);
// console.log(convertNumberToBoolean);
// console.log(typeof convertNumberToBoolean);

// 1 => true
// "abc" => true
// ''=> false
// null => false

////////////  convert in string
let someNumber = 33
let strNumber = String(someNumber)
console.log(strNumber);
console.log( typeof strNumber);


