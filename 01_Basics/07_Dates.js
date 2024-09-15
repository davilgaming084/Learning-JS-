// date is an obj that contain date method => getdate,gethours
// typeof Date() => object
let MyDate =new Date() // Date.now()
// console.log(MyDate.toString()); // Sun Sep 15 2024 21:25:50 GMT+0530 (India Standard Time)
// console.log(MyDate.toDateString());// Sun Sep 15 2024
// console.log(MyDate.toLocaleString());// 15/9/2024, 9:28:06 pm

// declear specific date/  (year,month,date)
let myCraetedDate = new Date(2023,0,23) // declear date as  your wish // 0january , 1 february  months start from 0 
// console.log(myCraetedDate.toDateString());


                       //  (year,month,date,hours,minuts)
let myCraetedDate2 = new Date(2023,0,23,4,3) // declear date as  your wish // 0january , 1 february  months start from 0 
// console.log(myCraetedDate2.toLocaleString());
////////////////////////////////////////

     // formet =>  // mm/dd/yy
let myCraetedDate3 = new Date("12-01-10") // declear date as  your wish // if dd,mm,yy formet month strat from 1  
// console.log(myCraetedDate3.toLocaleString());

let mytimestemp = Date.now(); 
// console.log(mytimestemp);// milisecound 

console.log(Math.floor(Date.now() / 1000)); // secound 
console.log(MyDate.getMonth() + 1); // get month strat from 0 
console.log(MyDate.getDay()); // get dat // start from 0 


// localstring cosmonise 
let a = Date.now()
console.log(a.toLocaleString("default",{
    
}));

