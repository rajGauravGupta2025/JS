const myArr = [0,4,8,2,6,9,'RAj',true,"Gupta"]
// console.log(myArr);

const myArr2 = new Array(3,6,67,3,7,7,3)
// console.log(myArr2);

myArr.push(9)
// console.log(myArr);
myArr.pop()
// console.log(myArr);
// console.log(myArr.length);
myArr.sort()
// console.log(myArr);

//It shifts the element , which may be time consuming if array size is very big like 10000...
// Adds the 1 element at beginning....
myArr.unshift(4)
// console.log(myArr);

//Removes 1 element from the beginning....
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(287));
// console.log(myArr.indexOf(4));
myArr.reverse()
// console.log(myArr);

//Join binds the array but converts its type to string.......
const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//Splice include the last index element also and it updates the original array by removing the slice elemnts
const arr = myArr.slice(1,4)
// console.log(myArr);
console.log(arr);
const newarr = myArr.splice(1,4)
console.log(myArr);

console.log(newarr);











