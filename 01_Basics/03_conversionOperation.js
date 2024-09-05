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
// "33abs"=> Nan
// ture => 1 
//false => 0 
// null => 0
// undifind => Nan



//////////  convert in bollean
// let isloggedin = 1
let isloggedin = null

let ConverNumberTOBOllen =  Boolean(isloggedin)
// console.log(typeof isloggedin);
// console.log(ConverNumberTOBOllen);
// console.log(typeof ConverNumberTOBOllen);

// l=> true
// "abc" => true
// ''=> false
// null => false

////////////  convert in string
let somenumber = 33
let strNumber = String(somenumber)
console.log(strNumber);
console.log( typeof strNumber);
