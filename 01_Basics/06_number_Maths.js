let score = 100.293// normal diclayer
// console.log(score);

// number object diclear
let score1 = new Number(50)
// console.log(score1); // 50 
// console.log(score1); // 50.0


// Number method
// tostring = > convert into string => console.log(score.toString());
// Number => convert into nu ber => console.log(Number(score))
// tofix => add .00 in the end 10.00 => console.log(score.tofix(100.00))
// tolocalString() => convert into understandable value currancy seprate by comma , => log(score.tolocalstring("en-IN")) => 100,00

//++++++++++++++++++++++++++ maths++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));// convert neg value into positive val
// console.log(Math.round(4.3)); // if 5.4 then chose 5 / if 5.6 it chose 6 
// console.log(Math.ceil(4.2)); // convert 5 choose top value 
// console.log(Math.floorl(4.9)); // convert 4 choose lowers value 
// console.log(Math.min(4,5,2,7)); // convert 4 choose lowers value 
// console.log(Math.max(4,5,2,7)); // convert 4 choose lowers value 
// console.log(Math.floor(Math.random() * 10+ 1)) ;


// console.log(Math); // is object containe methods 
// abs => convert neg value innto positive but does not swap posi into neg 
// round => ex => 4.5 if value is grater then .5 or equal then convert to top value 5 if value is lower then .5 then convert to lowest 
// ceil => choose top  value => 4.5 => convert into 5
// flooe => choose lower value => 4.5 convert into 4
// Math.min => choose min value => Math.min(1,2,3,4,) 1
// Math.max => choose max value => Math.min(1,2,3,4,) 4
// math.random() => give valie between 0.1 => 0.95,0.82

let min = 10
let max = 20
// console.log(Math.floor((Math.random() * 10) + 1))
// console.log(Math.floor(Math.random() * (max - min + 1) + min))

console.log(Math.floor(Math.random() * (max - min + 1) + min));

