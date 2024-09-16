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

// console.log(Math.floor(Date.now() / 1000)); // secound 
// console.log(MyDate.getMonth() + 1); // get month strat from 0 
// console.log(MyDate.getDay()); // get dat // start from 0 


// localstring costomise  
let a = new Date()
// console.log(a.toLocaleString('default',{month:'long'}));

// methods 
//Date.getFullYear() => get the year (4 ditgit)
//Date.getMonth() => get month (0-11) 0-for jaunary,11-for december
//Date.getDate() => get the day of the month (1-31)
//Date.getDay() => get tha day of week (0-6) 0-for-sunday 7-for-saturday
//Date.getHours()=> get hours (0-23) 0-for 12
//Date.getMinutes()=> get minutes (0-59)
//Date.getSecoud()=> get secound (0-59)
//Date.getMilisecound() => get milisecound (0-999)
//Date.setFullYear(2024) =>  // set/update the year on your work
//Date.setMonth(11) => update/set month
//Date.setDate(21) => update/set day of month
//Date.setHours(10)=> update/set Hours
//Date.setMinutes(30) => update/set minutes
//Date.setSecound(30) => update/set secoound 
// console.log(MyDate.toString()); // Sun Sep 15 2024 21:25:50 GMT+0530 (India Standard Time)
// console.log(MyDate.toDateString());// Sun Sep 15 2024
// console.log(MyDate.toLocaleString());// 15/9/2024, 9:28:06 pm




