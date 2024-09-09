// Comparison operators
console.log("Basic comparisons:");
console.log(2 > 1);  // true
console.log(2 >= 1); // true
console.log(2 < 1);  // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// Type coercion in comparisons (not recommended)
console.log("\nType coercion (avoid this):");
console.log("2" > 1);  // true (string "2" is converted to number 2)
console.log("02" > 1); // true (string "02" is converted to number 2)

// Comparisons with null
console.log("\nComparisons with null:");
console.log(null > 0);  // false (null is not converted in this comparison)
console.log(null == 0); // false (null is not equal to 0)
console.log(null >= 0); // true (null is converted to 0 for this comparison)

// Comparisons with undefined
console.log("\nComparisons with undefined:");
console.log(undefined == 0); // false (undefined is not equal to 0)
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// Strict equality (recommended)
console.log("\nStrict equality (===):");
console.log("2" === 2); // false (checks both value and type)
console.log(2 === 2);   // true