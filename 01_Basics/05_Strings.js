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
//-----------------------------------------------------------------------------------------------
//8) match => find/search word and create array 
let h = "Satish saroj"
// console.log(h.match(/a/g)); //  find all a in h and add in 1 array // use regular expression /type here you want search/g
//-----------------------------------------------------------------------------------------------
// 9) indexof = find index of latters 
let i = "Satish saroh"
// console.log(i.indexOf("a"));// index 1  // search from begining 
//-----------------------------------------------------------------------------------------------
// 10 lastIndexOf => find index of latters form last 
let j = "Satish saroj";
// console.log(j.lastIndexOf("a")); // Output: 8 from "saroj" from last 
// console.log(j.lastIndexOf("s")); // Output: 7 from "saroj" from last 
// console.log(j.lastIndexOf("z")); // Output: -1 (not found)
// You can also specify a starting position for the search
// console.log(j.lastIndexOf("a", 5)); // Output: 1 (searches from index 5 towards the beginning)
//-----------------------------------------------------------------------------------------------
// replace 11  => replace word 
let k = "Satish saroj";
// console.log(k.replace('saroj',"Kumar")); // replace saraoj into kumar
//-----------------------------------------------------------------------------------------------
// 12 trim => remove whatereverfrom start or end 
let l = " Satish "
console.log(l.trim());
//String / inturpulation / methods
