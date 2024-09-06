// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1); // converts "2" into 2 (datatype conversion) // but it's not preferred; use same data type for comparison
// console.log("02" > 1); // converts "02" into 2 (datatype conversion) // but it's not preferred; use same data type for comparison

// console.log(null > 0);  // null is not converted; it's always null in comparisons
// console.log(null == 0); // null is not converted to 0 (== doesn't convert) // this is equality check
// console.log(null >= 0); // converts null to 0 for this comparison

// console.log(undefined == 0); // undefined is not converted to anything; it's always undefined, so returns false
// console.log(undefined > 0);
// console.log(undefined < 0);

// strict check
console.log("2" === 2); // checks datatype along with value