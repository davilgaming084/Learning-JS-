// String declaration and manipulation
let name = "Satish";
let repoCount = 15;

// Old way of string concatenation (not recommended)
// console.log(name + ' ' + repoCount);

// Modern string interpolation (template literals)
console.log(`Hello, my name is ${name.toUpperCase()} and I have ${repoCount} repositories.`);

// Creating a string using the String constructor
let gameName = new String('Halo');
console.log(gameName[0]); // Accessing characters using index

// String methods
console.log(`Length of gameName: ${gameName.length}`);
console.log(`Uppercase gameName: ${gameName.toUpperCase()}`);

// Additional useful string methods
console.log(`Lowercase gameName: ${gameName.toLowerCase()}`);
console.log(`First index of 'a' in gameName: ${gameName.indexOf('a')}`);
console.log(`Last character of gameName: ${gameName.charAt(gameName.length - 1)}`);
console.log(`Substring of gameName: ${gameName.substring(1, 3)}`);
console.log(`Trimmed name: ${name.trim()}`);
