//Promise creation....
const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //Network call, DB call, cryptography
    //Note: After calling method resolve() then it connected to the then()
    setTimeout(function () {
        console.log('Async task is completed')
        resolve()
    }, 1000)
})

//promise consumption....
//It takes a callback function and this function automatically receives an argument
promiseOne.then(function () {
    console.log('Promise consumed')
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2')
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async task 2 is resolved')
})

//How to pass the data from resolve and how it consumes the data....
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Raj", email: "raj@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Raj", password: "12345" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
//This is called chaining....
promiseFour.then(function (user) {
    console.log(user);
    return user.username
}).then(function (username) {
    console.log(username);
}).catch(function (err) {
    console.log(err)
}).finally(() => console.log('The promise is either resolved or rejected'))

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "JavaScript", password: "12345" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

//Note: The main problem aysnc await is that it cannot handle the error gracefully.....
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
// try {
// const response = await fetch('https://jsonplaceholder.typicode.com/users')
// const data = await response.json()
// console.log(data);
// } catch (error) {
// console.log("E: ",error);
// }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.log(error);
})