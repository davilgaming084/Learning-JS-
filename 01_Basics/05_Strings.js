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
// 4)include = > Find any word and  any latter in variable>string>value   
let d = "Satish abc ef"
// console.log(e.includes("Satish")); // find/search word / casesensetive
// console.log(d.includes("ef"));// true  //find/search latter / casesensetive
// console.log(d.includes("e")); // true // find/search latter / casesensetive
//-----------------------------------------------------------------------------------------------
// 5 )stratWith => find lettrs/word in the start of  starting   /only 1 starting word or letter / also it is casesensitive 
let e = "Satish saroj"
// console.log(e.startsWith("Satish"));// true
// console.log(e.startsWith("saroj"));// false
// console.log(e.startsWith("Sa"));// true
// console.log(e.startsWith("sa"));// false
//-----------------------------------------------------------------------------------------------
// 6) endsWith = > find/search word/letter in string in last of string / only 1 starting word or letter /  also it is casesensitive 
let f =  "Satish saroj"
// console.log(f.endsWith("saroj")); // true
// console.log(f.endsWith("oj")); // true
//-----------------------------------------------------------------------------------------------
// 7)  search => find/search ( only latters) and return index => work as include but is return index not true false like includes 
let g = "Satish saroj"
// console.log(g.search("Satish")) // 0 it not word on word 
// console.log(g.search("s")) // index 4 fron "Satish"  is find first s in word 
// console.log(g.search("s")) // index 4  i want from "saroj" but retuen from "Satish"  // higher posiblity find s who write on start first 
//String / inturpulation / methods