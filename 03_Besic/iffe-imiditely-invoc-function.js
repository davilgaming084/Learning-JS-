// iffe is use fro => need to start databse filr fun at strat app
// iffi  =>  no need to call autometic call = syntex => (function(){})()  // ()() ||  first () is need 2nd () is exiciution
// ifii => 
//    (function(name){ // parameter ()

//      })("satish")  // () argument
// normal funcion
function fun1() {
    console.log("db conect");
}
fun1();


// ifii function 
// ifii with named ifii/frunction declearation\annynimus
(function name() {
    console.log("hi");
})();

//work iffi with recivinng parameter argument
(function name(name) {
    console.log(`name is ${name}`);
})("satish");

// ifii with arraow func
(()=>{
    console.log("arrow func");
})();