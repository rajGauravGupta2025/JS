//string concatenation........
let name = "Raj"
let repoCount= 47
// console.log(name + repoCount + "value");

//String Interpolation -> Always written inside the back-ticks(``)
//This is the modern day of programming in JS
//One of the main benefit os using this is that you can include the JS bulit-in keywords using dot notation
console.log(`Hello, my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

//String declaration----
//Note: This declaration work as object in JavaScript..........
const gameName = new String('Velorant')
console.log(gameName.toUpperCase())
console.log(typeof gameName)
console.log(gameName.length);
