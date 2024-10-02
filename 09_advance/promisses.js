// making promisess
// promisses is  object
// let promisOne = new Promise(function (resolve,reject) => Promise take callback function , and fun have 2 parameter resolve or rejec


// promise handle 2 ways
//1 then. .catch .fainly
//2 asynk await try catch
let promisOne = new Promise(function (resolve, reject) {
    //  do asynce task
    // databse task
    // network base
    setTimeout(() => {
        // console.log("Asynk task is complete");
        resolve() // connect with .then
    }, 1000)
})
// after finsh work of promise then write resolve keyword || resolve connect with .then 
// .then is direct connection with resole =>  when promisse done then promise return somthing and .then receve as parameter of callbak function
promisOne.then(function () {
    // console.log("primise consume");
})


//--------------
new Promise(function (resole, reject) {
    setTimeout(function () {
        // console.log("Asynk task");
        resole()
    })
}).then(function () {
    // console.log("Asynk 2 resolve");
})




// =================== recive data from resolve to then as para,meter
let promiseThree = new Promise(function (resole, reject) {
    setTimeout(function () {
        resole({ username: "Satish", email: "jgsv2wgy@123" }) // this obj send to .then
    }, 1000)
})
promiseThree.then(function (user) { // user is =>  resolve value || resove return to .then
    // console.log(user);
})

//===========================  handle .then .catch . finaily ||chaining or if promise fail show error 
let promiseFour = new Promise(function (resole, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resole({ user: "abc", pass: "52" })
        }
        else {
            reject("error")
        }
    }, 1000)
}).then(function (user) { // chaining   => user heve whole obj by resole
    // console.log(user);
    // return user.user          // return user.username
}).then(function (username) { // recive username
    // console.log(username);
}).catch(function (error) {
    // console.log(error);
}).finally(function () {
    // console.log("promis if resolve or fail wither of them done");
})



///////////======================= use asynce await insted of .then .catch .fainly
let promisFive = new Promise(function (resole, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resole({ username: "javsScript", pass: "123" }) // this obj send to .then
        } else {
            reject("errror : js went worng")
        }

    }, 1000)
})

async function consumePromiseFive() {
    try {
        let response = await promisFive
        // console.log(response);
    }
    catch {
        // console.log("error");
    }

}
consumePromiseFive()



///////// ---------------------------------- 
// async with dummy api data 

async function GetAlluser() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        let convertINtoJson = await response.json()
        console.log(convertINtoJson);
    }
    catch {
        console.log("error");
    }

}

// GetAlluser()


fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function name(response) {
        return response.json()
    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.log(error);
    })





