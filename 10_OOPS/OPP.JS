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
     this.username = username // this.variable_of_obj = username
     this.logCount = logCOunt // this.variable_of_obj = logCOunt
     this.islogin = islogin    // this.variable_of_obj = islogin
    return this
}
// let userOne = new User() // User { username: undefined, logCount: undefined, islogin: undefined }
// let userTwo = new User("satish",7,true) // User { username: 'satish', logCount: 7, islogin: true }
// console.log(userOne);
// console.log(userTwo);

// new 
// 1) when you use new create empty object 
//2) call constructur fuction by using new  
// 3) add on this of parent/cunstructur 
// 3 output 


///// using class constructor 
class UserINfo {
    constructor(username, logCOunt, pass) {
        this.username = username
        this.logCount = logCOunt
        this.pass = pass
    }
    encreptPassword() {
        return `${this.pass}`
    }
}
let UserInfo1 =  new UserINfo("satish",6,123)
let UserInfo2 =  new UserINfo("satish",6,123)


console.log(UserInfo1.encreptPassword()); // 123
console.log(UserInfo2); // whole obj created by UserINfo instance 