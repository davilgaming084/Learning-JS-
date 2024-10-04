function milti(num) {
    return num * 5
}
milti.power = 2 // making var in function 
// console.log(milti(5)); // 25
// console.log(milti.power); //  accsessing power 
// console.log(milti.prototype); // empty {}


// constructur function with craeteing methods 

function createUser(username, score) {
    this.username = username
    this.score = score
}
createUser.prototype.increment =  function () { // contructor func methods
    this.score++
}
createUser.prototype.print =  function () { // contructor func methods
    console.log(`${this.score}`);
}

let user = new createUser("satish",20)
console.log(user.print());