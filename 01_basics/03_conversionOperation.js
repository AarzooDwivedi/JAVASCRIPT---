let score = 33
console.log(typeof score);


score = "33";
console.log(typeof(score));

//Now if we want to convert any string into number
//then we use inbuilt function

score = Number(score)  // We keep the data type in Pascal case

console.log(typeof(score));
console.log(score);

 
//  CONVERSIONS
/*
    "33"=>33
    "33ABC" => NaN
    true =1; false = 0
*/

let isLoggedIn1 = 1
let isLoggedIn2 = ""
let isLoggedIn3 = "AARZOO"


let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1);
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3);

// 1 => true ; 0=> false
// "" => false
// "Aarzoo" => true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

