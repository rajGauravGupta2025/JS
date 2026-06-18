//Object literals.........

const mySym = Symbol('key1')

const JSUser = {
    name: 'Raj',
    "full name": "Raj Gaurav Gupta",
    age: 25,
    email: 'raj@google.com',
    isActive: true,
    location: 'Melbourne',
    [mySym]: "mykey1"
}

// console.log(JSUser.name);
// console.log(JSUser.email);
// console.log(JSUser.location);
// console.log(JSUser["full name"]);
// console.log(JSUser[mySym]);

JSUser.email = 'raj@xyz.com'
// console.log(JSUser.email);

//Freeze object...
// Object.freeze(JSUser)
JSUser.email = 'aplha@xyz.com'
// console.log(JSUser.email);

JSUser.greeting = function(){
    console.log(`Hello JS User, my name is ${this.name}`);
}
// console.log(JSUser.greeting);
// console.log(JSUser.greeting());

//singleton
// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "abc123"
tinderUser.name = "Alpha"
tinderUser.phone = 69777868977
// console.log(tinderUser);

const regularUser = {
    email: "alpha@google.com",
    fullname: {
        userfullname: {
            firstname: 'Raj',
            lastname: 'Gupta'
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'c'}
const obj3 = {5:'a',6:'c'}

//Assign and spread operator work as same..
// const mainObj = Object.assign({},obj1,obj2,obj3)
const mainObj = {...obj1,...obj2,...obj3}
// console.log(mainObj);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log((Object.entries(tinderUser)));

//----------------------Object Destructuring..............................
const course = {
    coursename: "JS IN Hindi",
    price: 999,
    courseInstructor: "Harish Chaudhary"
}
// console.log(course.courseInstructor);
const {courseInstructor: Instructor} = course
console.log(Instructor);


