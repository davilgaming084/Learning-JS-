// String declaration and manipulation
let name = "Satish";
let repoCount = 15;

// Old way of string concatenation (not recommended)
// console.log(name + ' ' + repoCount);

// Modern string interpolation (template literals)
// console.log(`Hello, my name is ${name.toUpperCase()} and I have ${repoCount} repositories.`);

// Creating a string using the String constructor
let gameName = new String('Halo');
// console.log(gameName[0]); // Accessing characters using index

// String methods
// console.log(`Length of gameName: ${gameName.length}`);
// console.log(`Uppercase gameName: ${gameName.toUpperCase()}`);

// String methods
// 1) length => Get length of value. It counts spaces also. Length is a property of string
let a = "abc "
// console.log(a.length); // is 4 it also counts space 

// 2) toUpperCase => Convert variable>string>value into uppercase
let b = "abc "
// console.log(b.toUpperCase()); // "ABC " converts to uppercase

// 3) toLowerCase => Convert variable>string>value into lowercase
let c = "ABC  "
// console.log(c.toLowerCase()); // "abc " converts to lowercase

// 4) includes => Find any word or any letter in variable>string>value   
let d = "Satish abc ef"
// console.log(d.includes("Satish")); // find/search word / case-sensitive
// console.log(d.includes("ef")); // true  //find/search letter / case-sensitive
// console.log(d.includes("e")); // true // find/search letter / case-sensitive

// 5) startsWith => find letters/word at the start of string / only 1 starting word or letter / also it is case-sensitive 
let e = "Satish saroj"
// console.log(e.startsWith("Satish")); // true
// console.log(e.startsWith("saroj")); // false
// console.log(e.startsWith("Sa")); // true
// console.log(e.startsWith("sa")); // false

// 6) endsWith => find/search word/letter in string at the end of string / only 1 ending word or letter / also it is case-sensitive 
let f = "Satish saroj"
// console.log(f.endsWith("saroj")); // true
// console.log(f.endsWith("oj")); // true

// 7) search => find letters and if they exist, return the index of the first occurrence
let g = "Satish saroj"
// console.log(g.search("Satish")); // 0
// console.log(g.search("s")); // 4 (index of first 's' in "Satish")
// console.log(g.search("z")); // -1 (not found)

// 8) match => find words and letters, and if they exist, grab them and put them in an array
let h = "Satish saroj"
// console.log(h.match(/a/g)); // ['a', 'a']
// console.log(h.match(/Satish/)); // ['Satish']
// console.log(h.match(/[a-z]/g)); // ['a', 't', 'i', 's', 'h', 's', 'a', 'r', 'o', 'j']

// 9) indexOf => find index of letters 
let i = "Satish saroj"
// console.log(i.indexOf("a")); // index 1  // search from beginning 

// 10) lastIndexOf => find index of letters from last 
let j = "Satish saroj";
// console.log(j.lastIndexOf("a")); // Output: 8 from "saroj" from last 
// console.log(j.lastIndexOf("s")); // Output: 7 from "saroj" from last 
// console.log(j.lastIndexOf("z")); // Output: -1 (not found)
// You can also specify a starting position for the search
// console.log(j.lastIndexOf("a", 5)); // Output: 1 (searches from index 5 towards the beginning)

// 11) replace => replace word 
let k = "Satish saroj";
// console.log(k.replace('saroj', "Kumar")); // replace 'saroj' with 'Kumar'

// 12) trim => remove whitespace from start or end 
let l = " Satish "
// console.log(l.trim());

// 13) charAt => find letters by indexing
let m = "Satish"
// console.log(m.charAt(1)); 

// 14) concat => merge two or more variables and turn into 1 variable 
let abc = "satish"
let def = "saroj"
let concating = abc.concat(def)
// console.log(concating);

// 15) split => create array based on parameter in split(" ")
let n = "Satish Play game everyday"
// console.log(n.split(" ")); // [ 'Satish', 'Play', 'game', 'everyday' ]

// 16) slice => extract a portion of a string
let o = "satish"
console.log(o.slice(1, 5)); // "atis"

// 17) substring => extract a portion of a string
let p = "satish"
console.log(p.substring(1, 5)); // "atis"

// 18) toString => convert into string 
let q = 20
console.log(q.toString()); // convert number into string 