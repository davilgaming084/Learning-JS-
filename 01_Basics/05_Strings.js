// String declaration and manipulation
let name = "Satish";
let repoCount = 15;

// Old way of string concatenation (not recommended)
// console.log(name + ' ' + repoCount);

// Modern string interpolation (template literals)
console.log(`Hello, my name is ${name.toUpperCase()} and I have ${repoCount} repositories.`);

// Creating a string using the String constructor
let gameName = new String('Halo');
// console.log(gameName[0]); // Accessing characters using index

// String methods
// console.log(`Length of gameName: ${gameName.length}`);
// console.log(`Uppercase gameName: ${gameName.toUpperCase()}`);

//String methods
// 1) length => Get Length Of value it count (_)space  also / length is property os string
let a = "abc "
// console.log(a.length); // is 4 it also count space 
//-----------------------------------------------------------------------------------------------
// 2) toUpperCase = > Convert variable>string>value  into uppercase
let b = "abc "
// console.log(b.toUpperCase()); // "ABC "  convert uppercase
//-----------------------------------------------------------------------------------------------
// 3) toLowerCase = > Convert variable>string>value into Lowercase
let c = "ABC  "
// console.log(c.toLowerCase()); // "abc " convert lowercase
//-----------------------------------------------------------------------------------------------
// 4)include = > Find word and latter in variable>string>value  
let d = "Satish abc ef"
// console.log(e.includes("Satish")); // find/search word / casesensetive
// console.log(e.includes("ef")); find/search latter / casesensetive
//-----------------------------------------------------------------------------------------------
// 5 )stratWith => find lettrs/word in the starting only 1 starting word or letter
let e = "Satish saroj"
// console.log(e.startsWith("Satish"));// true
// console.log(e.startsWith("saroj"));// false
// console.log(e.startsWith("Sa"));// true
// console.log(e.startsWith("sa"));// false
//-----------------------------------------------------------------------------------------------


//String / inturpulation / methods