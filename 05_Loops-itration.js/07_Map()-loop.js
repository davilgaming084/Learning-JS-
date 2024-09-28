/// map() => 
//  use for (eathmetic/methmetic ,updating,string-methods ) operation  like add ,remove 
//1) not update org array || do work as copy element and do modification on that and return modifaid value
//2) also have 3 parameters => 1 element , 2 index , 3 whole array
// 3) rtuen keyword work 
//4) does not modify org array 

let str = ["satish","sajn"]
let upper = str.map((element)=>{
    return element.toUpperCase() // return all element with uppacasee
})
console.log(upper);

// map().map() => chaining means using multiple methods 
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map((element) => { 
    return element * 10; // This is the first map use, multiplying all elements by 10
}) // Now arr2 is [10, 20, 30, 40, 50]
.map((element) => { 
    return element + 1; // Now add 1 to all elements
}); // Now arr2 is [11, 21, 31, 41, 51]

// Output the final result
console.log(arr2); // Outputs: [11, 21, 31, 41, 51]