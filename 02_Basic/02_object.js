// createing obj way are 2 
//1 litreal way 
//2 constructor - always single tun 

const mysymbol =  Symbol("key1")

// litrels way
let obj = {
    name:"satish", // behind the scene "name":"satish"
    age:'18',      // ,,
    location:"delhi", // ,, 
    email:'dbssc@gmailcom',
    logday:['mon',"set"],
    [mysymbol]:"sym"
}
// accsessing obj 2 ways
//1) console.log(obj.name) - don notation accsessing
//2)console.log(obj["email"]) - squear breaket notation[""] give it in string is importent becous obj key are also consider as string behind the scene//
//  add symbol in obj 
// step 1 => craete one var like this => let mySymbol = Symbol("key1")
// step 2 => craete property in obj like that => [mysymbol]:"helo sym"
// step 3 => accsessing symbol in obj => console.log(obj[mysymbol]) // symbol accsesybal only on squere notation 


// notes
// bethind the scenece obj property add like this => 
    //  {
    //    "name":"satish", // also key are string 
    //    "age":"19"
//      }

//  add symbol in obj 
// step 1 => craete one var like this => let mySymbol = Symbol("key1")
// step 2 => craete property in obj like that => [mysymbol]:"helo sym"
// step 3 => accsessing symbol in obj => console.log(obj[mysymbol]) // symbol accsesybal only on squere notation 
