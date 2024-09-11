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
// length => Get Length Of value it count (_)space  also / length is property os string
let a = "abc "
// console.log(a.length); // is 4 it also count space 
// toUpperCase = > Convert variable>string>value  into uppercase
let b = "abc "
// console.log(b.toUpperCase()); // "ABC "  convert uppercase
// toLowerCase = > Convert variable>string>value into Lowercase
let c = "ABC  "
// console.log(c.toLowerCase()); // "abc " convert lowercase
// include = > Find word and latter in variable>string>value  
let e = "Satish abc ef"
// console.log(e.includes("Satish")); // find/search word / casesensetive
// console.log(e.includes("ef")); find/search latter / casesensetive



//String / inturpulation / methods