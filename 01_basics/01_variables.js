const accountId = 125698
let accountEmail = "employee@gmail.com"
var accountPassword = "587463"
accountCity = "Vadodara"
let accountAddress;  // If any variable is declared without any value ---> undefined

// we can't change the value of const
//accountId = 5968965


console.log(accountId);

// changing the other values
accountEmail = "user@gmail.com"
accountPassword = "452282"
accountCity = "Ahemdabad"

console.table([accountId , accountEmail , accountPassword , accountCity , accountAddress])
/*  
prefer not to use var
becase of issue in block scope and functional scope
*/

