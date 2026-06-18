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

//Splice include the last index element also and it updates the original array by removing the slice ////elements
const arr = myArr.slice(1,4)
// console.log(myArr);
// console.log(arr);
const newarr = myArr.splice(1,4)
// console.log(myArr);

// console.log(newarr);

const marvel_heros = ['thor','spiderman','ironman']
const dc_heros = ['superman','flash','batman']
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const newMarvel = marvel_heros.concat(dc_heros)
// console.log(newMarvel);

//Spread operator....
const all_heros = [...marvel_heros,...dc_heros]
// console.log(all_heros);

const another_array = [1,2,4,[5,3,5],8,[2,7,9,4,0,[2,5,8,6]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);














