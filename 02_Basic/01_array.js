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
//slice(0,2) => grab element of aray  index 0 to 2 but not include index 2 
// splice(1,3) => used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the removed elements.
//include(2) => check element is exist or not return t/f
//indexof => find index if element
//join( '' ) => used to combine all elements of an array into a single string, with a specified separator between each element.
//sort() sort array into 2,1,6,5 =>1,2,5,6 org 


// spread operator -- 
let abc = [1,2,3,4,5]
let def = [6,7,8,9,10]
let ghi = [...abc , ...def]
// console.log(abc);
// console.log(def);
// console.log(ghi);

// shellow copy =>  means stack /// primitive datatype
// deep copy menas => means heap // non primetive datatype

// shello copy  or deep copy
// if you copy obj and array like that => let a = obj/arr then it not coppy it only reffer
let objj = {
    name:"satish",
    id:{
        schoolId:"1309013",
        studentId:"2016000745"
    }
}
// let New = objj // assign org obj in new var | it not copy it only reffer/point on org obj
// New.name = "new name " // update new var property 
// console.log(objj); // logic vais org obj stil "satish"|| but it also change effet by New becouse New also point in org obj
// console.log(New); // and new obj change proprty  || but obj and New both change 


// Create an object with nested properties
let obj = {
    name: "satish",
    id: {
        schoolId: "1309013",
        studentId: "2016000745"
    }
};
// there are two type create shellow copy object,assign or {...}[...] spread  operator and both work same 
// i
// Create a shallow copy of 'obj' using Object.assign
// let New1 = Object.assign({}, obj); // New1 is a new object with the same top-level properties as obj

// Modify the copied object's properties
// New1.name = "change"; // Change the name in the copied object
// New1.id.schoolId = "000000000"; // Change the schoolId in the copied object

// Log the original and copied objects to see the effects
// console.log(obj); // Output: { name: "satish", id: { schoolId: "000000000", studentId: "2016000745" } }
// The original object is affected because 'id' is a nested object (reference type)

// console.log(New1); // Output: { name: "change", id: { schoolId: "000000000", studentId: "2016000745" } }
// The copied object reflects the changes made

// Important Note:
// Object.assign creates a shallow copy. This means:
// - Top-level properties are copied by value.
// - Nested objects are copied by reference, so changes to nested objects affect both the original and copied objects.
// shellow copy by object.assign()

// ii
// [...],{...} shallow copy by spread operator
// Create a shallow copy of 'obj' using the spread operator
let new2 = { ...obj }; // Creates a new object with the same top-level properties as 'obj'

// Modify the nested property 'schoolId' in the copied object
new2.id.schoolId = "1234567ui"; // This change also affects the original object because 'id' is a nested object

// Log both objects to see the effects of the modification
// console.log(obj); // Original object is affected: { name: "satish", id: { schoolId: "1234567ui", studentId: "2016000745" } }
// console.log(new2); // Copied object reflects the change: { name: "satish", id: { schoolId: "1234567ui", studentId: "2016000745" } }


// shellow copy array
let arr = [1,2,[3,4],5,6]
let Newarr = [...arr]
Newarr[2] = [10]
console.log(arr);
console.log(Newarr);