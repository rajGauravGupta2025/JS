//if statement
const userLoggedIn = true
if(userLoggedIn){
    console.log('User logged in successfully!')
}

//if-else statement
let age = 18
if(age>=18){
    console.log("Eligible for vote!");
}else{
    console.log("Not eligible, better luck next time");
}

//switch statement....
let grade = 'C'
switch(grade){
    case 'A': 
            console.log('You scored 95 marks')
            break;
    case 'B':
            console.log('You scored 85 marks');
            break;
    case 'C': 
            console.log('Yoy scored 75 marks');
            break;
    case 'D': 
            console.log('You scored 50 marks');
            break;
    default: 
            console.log('You are fail, better luck next time');
            break;
}



//Falsy value
// false, 0, -0, "", NaN, undefined, null, 0n

//Truthy value
// "0", 'false', " ", [], {}, function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish coalescing opeartor(??): null defined
let val1 
val1= 5??10
val1 = null?? 10
val1 = undefined??20
val1 = null?? undefined
console.log(val1);

