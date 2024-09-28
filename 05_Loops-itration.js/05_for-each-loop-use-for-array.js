/// for each loop => use for array
//1) forEach normaly use when work is  print element,index,whole array 
//1) for each have 3 parameters 1->element , 2->index ,3->whole Array
//2) for each doesn't Work Return keyword 
//3) for each need callback function  as parameters, means fun.. without name  => foreach(function(){})

let code = ["js", 'cpp', 'python', 'ruby', 'swift']
code.forEach(function (element) { // foreach(callback-function) // means need a function without name || noe callbac.fun.. foreach(function( accsess of element wich is on array becouse you use array_name.foreach){}) 
    // console.log(element); // ["js", 'cpp', 'python', 'ruby', 'swift']
})

/// for each with arraow function 
code.forEach((element) => {
    // console.log(element);// ["js", 'cpp', 'python', 'ruby', 'swift']
})


// callback function declearing out side  |  Work
function printMe(element) {
    console.log(element);
}
// code.forEach(printMe)


///////// for each all perameters => element-value,index,whole-array
code.forEach((element, index, wholearray) => {
    // console.log(`index is ${index} value is ${element} `);
    // console.log(wholearray); // whole array // ["js", 'cpp', 'python', 'ruby', 'swift']
})


////// for each use in array-obj 
let coding = [
    {
        langName: "java-Script",
        langFileName: "js"
    },
    {
        langName: "C++",
        langFileName: "cpp"
    },
    {
        langName: "Python",
        langFileName: "python"
    },
    {
        langName: "Ruby",
        langFileName: "ruby"
    },
    {
        langName: "Swift",
        langFileName: "swift"
    },
]
coding.forEach((obj) => {
    // console.log(obj.langName);
    // console.log(obj.langFileName);
    // console.log(`LangName is ${obj.langName} And FilName IS ${obj.langFileName} `);
})

let str = "Satish"
for (const key in str) {
    console.log(key);
}

