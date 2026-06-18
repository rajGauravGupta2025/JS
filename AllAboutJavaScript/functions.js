function sayMyName(){
    console.log('R');
    console.log('A');
    console.log(('J'));
}
// sayMyName()

function addTwoNumber(num1,num2){
    console.log(`The sum of two number is:  ${num1 + num2}`)
    console.log(`The difference of two number is:  ${num1 - num2}`);
    console.log(`The product of two number is:  ${num1 * num2}`);
    console.log(`The divison of two number is:  ${num1 / num2}`);
}
// addTwoNumber(10,2)

function addNumber(n1,n2){
    let res = n1+n2
    return res
}
// console.log(addNumber(3,4));

function loggedInUser(username='Himesh'){
    return `${username} just logged in!`
}
// console.log(loggedInUser());

let user = loggedInUser('Raj')
// console.log(user);

//-----------Rest operator----------------
function calculateCartPrice(...num){
    return num
}
// console.log(calculateCartPrice(200,400,200,505,200,788,789));

const userOne = {
    username: 'Raj',
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}
// handleObject(userOne)
handleObject({
    username: 'Raj',
    price: 199
})


