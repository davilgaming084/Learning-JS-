// this => this  refer to  current context | jo use kare osko refer karo
// two tyoe of this =>  1 object function | globle this 
// this in node enverment or chrome
/// node enverment in js--- 
// 1) when you use this with object function then this refer object himself return object himself
// 2) when you use this as console.log(globle) then return empty obj 
/// Chrome Enverment ---
// when you log this in chrome console then return window object

/// you can not use this in only function || this use for object-function
function name() {
    let name = "satish"
    console.log(this); // return object there some things
    console.log(this.username); // undefind
}
name()


const user = {
    username:'satish',
    price:19,
    welcomeMsg:function() {
        console.log(`${this.username} , welcome to website `);
        console.log(this);// this refer obj | this reffer current object  // jo use kare osko refer karo this is work of this keyword
    }
}
// user.welcomeMsg() // log welcome msg from obj this.username reffer username of obj 
user.username = "same" // update user.name 
// user.welcomeMsg() // now username change then where you use username also change value 
// console.log(this); // in node enverment this on globle return empty {}
