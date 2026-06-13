"use strict"   // Enabling strict mode to catch common coding mistakes and unsafe actions

//data types in JavaScript
let name = 'John Doe' // String
let age = 30 // Number
let isActive = true // Boolean
let hobbies = ['reading', 'traveling', 'coding'] // Array
null; // Null (standalone value representing the intentional absence of any object value)
undefined; // Undefined
let person = { // Object
    name: 'John Doe',
    age: 30,
    isActive: true
}
let uniqueId = Symbol('id') // Symbol (a unique and immutable primitive value)

console.log('Name:', name)
console.log('Age:', age)
console.log('Is Active:', isActive)
console.log('Hobbies:', hobbies)
console.log('Person:', person)
console.log('Unique ID:', uniqueId)

//typeof operator
console.log('Printing the type of each variables: ')
console.log(typeof name) //string
console.log(typeof age) //number
console.log(typeof isActive) //boolean
console.log(typeof hobbies) //object (arrays are a type of object in JavaScript)
console.log(typeof person) //object
console.log(typeof uniqueId) //symbol
console.log(typeof null) //object (this is a known quirk in JavaScript)
console.log(typeof undefined) //undefined