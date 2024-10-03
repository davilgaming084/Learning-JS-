// // asynce await
// // asynce await  => help to make asynceonus code to syncvronus

// // datacall by asynce function
// //1 ) call data by fetch api ->  [ fetch(//demolo/link) ] || when data recive by fetch api then  go to next line need to do  [ await fetch(//demolo/link) ]  || only if data recive then go to next line  
// //2) data recive/resopnse from fetch then convert into json by json() by using await  response 

// //ex -> 
async function GetData() {
    // get request is asynce -> make it synce use await 
    let response = await fetch("https://api.github.com/users/davilgaming084")
    // parse json is also asynce => make ity synce 
    // let data = await JSON.parse(response)
    let data = await response.json()
    console.log(data);


    // show data in web 
    document.querySelector("h1").innerText = data.login
    document.querySelector("img").src = data.avatar_url
}
// GetData()

// console.log(GetData()); // log pending promise
// when you work with fetch api only use .json() becouse fetch return object 

//////////////////////////////////////////////////////////
async function GETDATA() {
    try {
        let resopnse = await fetch("https://api.github.com/users/davilgaming084");
        let data = await resopnse.json()
        document.querySelector("h1").innerText = data.login;
        document.querySelector("img").src = data.avatar_url;


    }
    catch {
        console.log("ero");
    }

}
// GETDATA()



// /////////////////// json.parse()  -> when you didnt use fetch 
// // Parsing JSON Strings: Use JSON.parse() when you have a JSON string that you want to convert into a JavaScript object. For example:
// let jsonString = '{"name": "John", "age": 30}';
// let data = JSON.parse(jsonString); // Correct usage




//////////////////////////////////////// without asynce await function   fetch().then.catch
//////////  get call requet without asynce awai function 

let response = fetch("https://api.github.com/users/davilgaming084"); // Valid URL for comparison
response.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`); // THIS WILL ASSIGN IN .CATCH BLOCK => ERROR.MESSAGE
    }
    console.log(response.ok); // for cheking response sucsess =>  RETURN T/F WHEN RESPONSE BETWEEN 200 TO 299 RETURNS TRUE
    console.log(response.status); // RETURN HTTP CODE 200 
    return response.json();
}).then((data) => {
    document.querySelector("h1").innerText = data.login;
    document.querySelector("img").src = data.avatar_url;

}).catch((error) => {
    console.error("Error occurred:", error.message); // ERROR MESSAGE IS DIRECTLY CONNECTED WITH throw new Error(`HTTP error! status: ${response.status}`)
    document.querySelector("h1").innerText = "Error fetching data"; // Display error message
}).finally(() => {
    console.log("work done");
});




