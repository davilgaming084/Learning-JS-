// for of loop is use for array 
// but you can use  for of in string

 // importent => for of loop itreat on value => for (const key of arr)  => in key  is value , not index 
 // importent  => for of use in obj => show error -> not itratble

[1, 2], [{}, {}]

let arr = [1, 2, 3, 4, 5]
for (const key of arr) {
    // console.log(key); // Acssesing value of array element
    // console.log(arr.indexOf(Number(key)));  // accsessing index of array element
    console.log(` index is ${arr.indexOf(key)} Value is  ${key}`);  // combine and get index or value at same time
}
let str = "satish"
for (const charactor of str) {
    // console.log(charactor); // Acssesing value of array element
    // console.log(str.search(`${charactor}`));// accsessing index of array element
    // console.log(`index is ${str.search(`${charactor}`)} value is ${charactor}`);// combine and get index or value at same time
}

/// for of loop  in  obj => show error not itratable  
let obj = {
    name:"satish",
    age:20
}
for (const key of obj) {
    console.log(key); // error not itreatable
}
