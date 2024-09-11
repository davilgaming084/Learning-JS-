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
// 1) length => Get length of value. It counts spaces also. Length is a property of string
let a = "abc "
// console.log(a.length); // is 4 it also counts space 
//-----------------------------------------------------------------------------------------------
// 2) toUpperCase => Convert variable>string>value into uppercase
let b = "abc "
// console.log(b.toUpperCase()); // "ABC " converts to uppercase
//-----------------------------------------------------------------------------------------------
// 3) toLowerCase => Convert variable>string>value into lowercase
let c = "ABC  "
// console.log(c.toLowerCase()); // "abc " converts to lowercase
//-----------------------------------------------------------------------------------------------
// 4) includes => Find any word or any letter in variable>string>value   
let d = "Satish abc ef"
// console.log(d.includes("Satish")); // find/search word / case-sensitive
// console.log(d.includes("ef")); // true  //find/search letter / case-sensitive
// console.log(d.includes("e")); // true // find/search letter / case-sensitive
//-----------------------------------------------------------------------------------------------
// 5) startsWith => find letters/word at the start of string / only 1 starting word or letter / also it is case-sensitive 
let e = "Satish saroj"
// console.log(e.startsWith("Satish")); // true
// console.log(e.startsWith("saroj")); // false
// console.log(e.startsWith("Sa")); // true
// console.log(e.startsWith("sa")); // false
//-----------------------------------------------------------------------------------------------
// 6) endsWith => find/search word/letter in string at the end of string / only 1 ending word or letter / also it is case-sensitive 
let f =  "Satish saroj"
// console.log(f.endsWith("saroj")); // true
// console.log(f.endsWith("oj")); // true
//-----------------------------------------------------------------------------------------------
// 7) search => find/search (only letters) and return index => works like includes but returns index not true/false 
let g = "Satish saroj"
// console.log(g.search("Satish")) // 0 it does not work on whole word
// console.log(g.search("s")) // index 4 from "Satish" it finds first 's' in word 
// console.log(g.search("s")) // index 4 I want from "saroj" but returns from "Satish" // higher probability to find 's' which is written first 
//-----------------------------------------------------------------------------------------------
// 8) match => find/search word and create array 
let h = "Satish saroj"
// console.log(h.match(/a/g)); //  find all 'a' in h and add in 1 array // use regular expression /type here what you want to search/g
//-----------------------------------------------------------------------------------------------
// 9) indexOf = find index of letters 
let i = "Satish saroj"
// console.log(i.indexOf("a")); // index 1  // search from beginning 
//-----------------------------------------------------------------------------------------------
// 10) lastIndexOf => find index of letters from last 
let j = "Satish saroj";
// console.log(j.lastIndexOf("a")); // Output: 8 from "saroj" from last 
// console.log(j.lastIndexOf("s")); // Output: 7 from "saroj" from last 
// console.log(j.lastIndexOf("z")); // Output: -1 (not found)
// You can also specify a starting position for the search
// console.log(j.lastIndexOf("a", 5)); // Output: 1 (searches from index 5 towards the beginning)
//-----------------------------------------------------------------------------------------------
// 11) replace => replace word 
let k = "Satish saroj";
// console.log(k.replace('saroj', "Kumar")); // replace 'saroj' with 'Kumar'
//-----------------------------------------------------------------------------------------------
// 12) trim => remove whitespace from start or end 
let l = " Satish "
console.log(l.trim());
// String / interpolation / methods
