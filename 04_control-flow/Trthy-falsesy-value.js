// True value or false value 


// Falsey value

//   false,0,-0,BigInt-0n , null, undefined , "",Nan


// truthy value 
'0','false' , " "  // => becase  0 or false under string ""
// [],{},function (){}   => // empty obj  , empty array , empty function also true value


// check how array truethy value -  when array is empty
let arr = []
if (arr.length === 0) {
    console.log("yes this array is empty and empty array also consider as truthy value ");
}


// check how object truethy value -  when object is empty
let obj = {}

if (Object.keys(obj).length === 0 ) {
    console.log("this object is empty and emplty object consider as truthy value");
}


/// Nulish collision operator  => ?? dubble question mark
/// work when vale is null  or undifind then choose anther value 
// ex

let a ;
// a = 10??20 // 10 becouse 2 is not null or undefind ||  when 1 is undifind or nul then choose 2 nd value
// a = null ?? 20 // 20because of 1 st value is null and when 1 value kis nnulll or undind it chooose 2nd value
// a = undefined ?? 30 // 20 

// a = undefined ?? 20 ?? 30 // chose 20 chose 1st chossable value 
// a = null ?? 40 ?? 90 // 40

a = null?? undefined ?? 30 /// 30 alway choose choosable value 
console.log(a);


/// trnory operator  => a way to do like if else 
// contion ? true : folse

let price = 199 
price == 199 ? console.log("price is 199 now get it"): console.log("price is high");