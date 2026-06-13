const accountId = 12345
let accountName = 'John Doe'
var accountEmail = 'john.doe@example.com'
accountNumber = '576868980979' // Implicit global variable

console.log('Account ID:', accountId)
console.log('Account Name:', accountName)
console.log('Account Email:', accountEmail)
console.log('Account Number:', accountNumber)

//change the const value
// accountId = 54321 // This will throw an error because accountId is a constant
// console.log('Updated Account ID:', accountId)

accountName = 'Howard Johnson'
accountEmail = 'howard.johnson@example.com'
accountNumber = '1234567890'

console.log('Account ID:', accountId)
console.log('Account Name:', accountName)
console.log('Account Email:', accountEmail)
console.log('Account Number:', accountNumber)

/* Don't use var keyword to declare variables as it can lead to unexpected behavior due to its function scope and hoisting. Instead, use let or const for better readability and maintainability of your code. */


let accountType;
console.log('Account Type:', accountType) // undefined......