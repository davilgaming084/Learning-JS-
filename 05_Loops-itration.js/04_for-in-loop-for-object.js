// for in loop use for object 
// for of loop retun only index for obj /key for array 
let myObj = {
    js: "for java script",
    cpp: "for c++",
    python: "for python",
    ruby: "for ruby",
    swift: "for swift"
}
for (const key in myObj) {
    // console.log(key); // get keys of obj 
    // console.log(myObj[key]); // get value of obj 
    // console.log(`key is ${key.toUpperCase()} value is ${myObj[key]}`);
}


// does for in work on array ?
let arr = [1, 2, 3,4]
for (const index in arr) {
    // console.log(index); // return index because for in loop return index for array ||  key for obj
    // console.log(arr[index]); // get value by simple accsessing array element | index have index of element  |||| and arr[index] is arr[0]=1 , arr[1]2 etc
    console.log(`key is ${index} value is ${arr[index]}`); // combine index or value 

}// it works for in work with array but no preffer 