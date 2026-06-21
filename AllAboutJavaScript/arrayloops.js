const arr = [3,7,3,78,54,3,3,6,7,7,6,4,3,3]

//for-of loop....
for (const ele of arr) {
    // console.log(ele);
}

const words = "Hello world"
for(const word of words){
    // console.log(word);
}

//Maps....
const map = new Map()
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('USA',"United States of America")
map.set('UAE',"United Arab Emirates")
map.set('IN',"India")
// console.log(map);

//It gives me all entries....
for(const key of map){
    // console.log(key);
}

//To get the key and values sepeartely , you have to destructure....
for(const [key,value] of map){
    // console.log(key);
    // console.log(value);
    // console.log(key , '->', value);
}

//Object.....
const obj = {
    1:"One",
    2:"Two",
    3:"Three",
    4:"Four",
    5:"Five"
}

// for(const [key,value] of obj){
//     console.log(key,':',value);
// }

//Note: for-of loop not works with object, it shows Object is not iterable...

// for-in loop....
for(const key in obj){
    // console.log(key);              //It prints the key of object....
    //console.log(obj[key]);            //It prints the value of each key....
    // console.log(`${key} : ${obj[key]}`);  //It prints the both key and value of the object means every single entries
}

//It prints the indices of the array when we are using the for-in loop....
const languages = ['c++','java','js','python','ruby']
for(const l in languages){
    // console.log(languages[l]);
}

//for-each loop....
const name =['Purnima','Shivam','Saluja','Mota','Chopra']
name.forEach(function(item){
    // console.log(item);
})

function printMe(item){
    // console.log('name :',item);
}
name.forEach(printMe)

const lang = [
    {
        langName:'C++',
        langFileName: 'c++'
    },
    {
        langName:'Java',
        langFileName:'java'
    },
    {
        langName:'Javascript',
        langFileName:'js'
    }
]
lang.forEach((item) =>{
    // console.log(item.langName);
})

const world = ['Japan',"India","USA","UK","Malasiya",'Britain']
const worlds = world.forEach((item)=>{
    // console.log(item);
})
// console.log(worlds);

//Note: For-Each loop never returns the value, it only prints the value....

const myNums = [1,3,5,7,5,9,5]
// const result = myNums.filter((num) => num>4)
const result = myNums.filter((num)=>{
    return num>4
})
// console.log(result);

//Same code using for-each loop....
const newNum = []
myNums.forEach((num)=>{
    if(num>4){
        newNum.push(num)
    }
})
// console.log(newNum);


const books = [
    {title:'Book One',genre:'Fiction',publish:1981,edition:2004},
    {title:'Book Two',genre:'Non-Fiction',publish:1983,edition:2006},
    {title:'Book Three',genre:'Science',publish:1971,edition:2044},
    {title:'Book Four',genre:'History',publish:1901,edition:2304},
    {title:'Book Five',genre:'Fiction',publish:1381,edition:2003},
    {title:'Book Six',genre:'Non-Fiction',publish:1948,edition:2006},
    {title:'Book Seven',genre:'Fiction',publish:1911,edition:2044},
    {title:'Book Eight',genre:'History',publish:1980,edition:2404},
    {title:'Book Nine',genre:'Non-Fiction',publish:1931,edition:2044},
    {title:'Book Ten',genre:'Science',publish:1881,edition:2404}
]

// console.log(books);
// console.log(books.length);

const userBook = books.filter((book) => book.genre ==='History')
// console.log(userBook);

const publishedBookAfter1950 = books.filter((book) => book.publish >1950)
// console.log(publishedBookAfter1950);


//Adding '10' to each number.........
const nums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = nums.map((num)=> num+10)
const newNums = nums.map((num)=> num*10).map((num)=> num+1)
// console.log(newNums);


//Reduce method.....
const myNumber = [1,2,3]

//Using normal function....
const res = myNumber.reduce(function(acc,currVal){   
    console.log(`Acc: ${acc} and currVal: ${currVal}`);
              //It takes two parameter: Accumulator and current value
    return acc + currVal
},0)

//Using arrow function....
const ans = myNumber.reduce((acc,currVal) => {
    return acc+currVal
},0)
console.log('Final ans:',ans);
















