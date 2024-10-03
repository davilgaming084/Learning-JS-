// OBJECT LITREAL BEASE UNIT OF OBJ
let USER = {
    USERNAME: "SATISH", // property
    loginCount: 8,// // property

    getuserdetails: function () { /// THGIS IS METHPOD
        console.log("GET IUSER DETAIL FROM DADABASEW " + this.USERNAME);
        console.log(this);  // refer this obj 
    }

}
// console.log((USER.USERNAME));
// console.log((USER.getuserdetails()));



////// constructor function  with obj  | where use new keyword when it will be constrtctor func  
// constructur function is  => new keyword 
// let data = new Date() 


function User(username, logCOunt, islogin) {
    this.username = username
    this.logCount = logCOunt
    this.islogin = islogin
    return this
}
let userOne = new User("hitesh", 6, true)
let userTwo = new User("satish", 6, true)
console.log(userOne);
console.log(userTwo);

// new 
// 1) when you use new create empty object 
//2) call constructur fuction by using new  
// 3) add on this of parent/cunstructur 
// 3 output 