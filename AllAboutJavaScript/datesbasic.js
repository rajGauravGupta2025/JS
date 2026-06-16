console.log('Dates & times')

let myDates = new Date()
// console.log('Normal Dates: ',myDates);
// console.log('String: ',myDates.toString());
// console.log('Date String: ',myDates.toDateString());
// console.log('ISO String: ',myDates.toISOString());
// console.log('JSON: ',myDates.toJSON());
// console.log('Locale Date String: ',myDates.toLocaleDateString());
// console.log('Locale String: ',myDates.toLocaleString());

// console.log('Type of: ', typeof myDates);

const myDate = new Date(2023, 0, 23)         // Here month start from 0 bcz its taking as array...
// console.log(myDate);
// console.log(myDate.toDateString());

const myCustomeDate = new Date("2033-01-24")
// console.log(myCustomeDate.toLocaleString());

const myTimeStamp = Date.now()
// console.log(myTimeStamp);

const currentDate = new Date()
// console.log(currentDate);
// console.log(currentDate.getMonth());
// console.log(currentDate.getFullYear());

currentDate.toLocaleString('default',{
    weekday: "long"
})





