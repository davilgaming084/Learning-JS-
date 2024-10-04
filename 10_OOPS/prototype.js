// prototype => methods making of str,obj,srsy etc
let myname = "satish    "
// console.log(myname.length); // return 10 it is counting space || made trulent that does not count space 

String.prototype.trueLength = function () {
   return this.trim().length
}
// console.log(myname.trueLength());

// 
let name2 = "mohit             "
// console.log(name2.trueLength());



///////////////////////////////////////////////////////////////////////////////////////
// making method of array it avlilable on any array 

let heroarr = ["thor", "spiderman"]
Array.prototype.hi = function (params) { // methods making for array | its avialble only on arrray 
    console.log("hi array");
}
// console.log(heroarr.hi());


////////////////////////////////////////////////////////////////////////////////////////////
// meking methods of obj ita avelable on string obj anywhere || becouse obj > string , arr
let heroobj = {
    thor: 'hamer',
    spiderman: "sling",
    gtespidermanpoer: function () {
        console.log(`spidy power is  ${this.spiderman}`);
    }
}

Object.prototype.satish = function (params) { // // methods making for Object | its avialble anywhere array,strin , becouse of object is parent and sring,array is child   
    console.log("satish is here ");
}
// console.log(heroobj.satish());  //satish is here


// object is head =>>> Object>string,array
//string parent is obj
//array parent is obj

// if you craete method of object.pro.sat => then this mehod is avialable for array,string object everywhere 
// if you crate method of string aray then it is not avilable anywhare its only for array,string


/////// inheritance  => linkj obj-to-obj [[ shere imformation to onether arr,obj ]] || arr-to-arr || string-to-string
let teacher = {
    makevideo: true
}
let TeacherSupport = {
    isavliavle: true
}
let work = {
    makeassigment: "js assinment",
    fulltime: true
}

// now make link of them 
// old syntex
// TeacherSupport.__proto__ = work // now TeacherSupport can accses work
// console.log(TeacherSupport.isavliavle);


// new syntex 
Object.setPrototypeOf(teacher, TeacherSupport) // now teacher can accsess TeacherSupport
// console.log(teacher.isavliavle);