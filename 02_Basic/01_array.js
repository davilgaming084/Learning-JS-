// array are also obj in depth learning
let myArray = [1,2,"satish"] // 1,2,"satish",t/f ->  these all are elements in array  
// console.log(myArray[0,1,2]); // accsessing array element by [] / array index strat from 0 base indexing


let myname = ["p","e","o"]
let newarr = new Array(1,2,3,4,)
newarr.push(5) // // adding 6 in th end
// console.log(newarr); [1,2,3,4,5,6]


//// heap memory  word in array
let m = newarr
m.push(6)
// console.log(m); [1,2,3,4,5,6]
// console.log(newarr); // newarr also impecfull by m [1,2,3,4,5,6]


// Array Methods 
//push(6) = >> add element at the end of array
//pop()     =>> remove last element of array
//unshift(9)   => add element at the starting/o-index // nou usabele
//shift()    => remove element at the starting/0-index

let a = [1,2,3,4]
let b = a.splice(0,2)
console.log(b);