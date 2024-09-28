// fillter loop => use forr array
//1) Use case => return new array with all filter element besed on a condition (comparison-operator | logical-operators) work < ,> ==, ===,<= , >=(ex - grater then,less then , string methods work  )
//2) filter also have 3 parameters like foreach => 1->element , 2->index ,3-> whole array
//3) filter can do return , return in filter works

// the only diffrance between foreach or filter is return keyword and | foreach work only print | filter work/usecase do some conditionol base work 

let code = ["js", 'cpp', 'python', 'ruby', 'swift']
let arr = code.filter((element, index, wholeArr) => {
   return element // return filters things 
})
// console.log(arr);


let number = [1,2,3,4,5]
let arr2 = number.filter((element)=> element > 2) // implicit return |which element is grater then 2 return it
// console.log(arr2);


// ex => 
   let books  = [
      {
         title:"book One",genra:"fiction",publish:1981,edition:2004
      },
      {
         title:"book Two",genra:"non-fiction",publish:1990,edition:2010
      },
      {
         title:"book Three",genra:"romance",publish:2000,edition:2015
      },
      {
         title:"book Four",genra:"thriller",publish:2005,edition:2020
      },
      {
         title:"book Five",genra:"sci-fi",publish:2010,edition:2025
      },
      {
         title:"book Six",genra:"mystery",publish:2015,edition:2030
      }, 
      
   ]

   let userbook = books.filter((book)=>{
      //   return book.genra === "thriller" 
      return book.genra === "thriller" && book.publish === 2005 // with logical operators 
   })
   console.log(userbook);