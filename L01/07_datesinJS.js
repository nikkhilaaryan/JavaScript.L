//Dates
let isDate = new Date();
console.log(isDate); // Expected Output : 2025-02-25T19:04:12.654Z
console.log(isDate.toString()); // Expected Output : Tue Feb 25 2025 19:05:17 GMT+0000 (Coordinated Universal Time)
console.log(isDate.toLocaleString()); // Expected Output : 2/25/2025, 7:08:25 PM
console.log(isDate.toDateString()); // Expected Output : Tue Feb 25 2025
console.log(typeof isDate); // Object

// let createdDate = new Date(2005, 1, 23, 5, 3);
let createDate = new Date("2004-01-23");

console.log(createDate.toLocaleDateString());
// console.log(createdDate.toDateString());

// console.log(typeof createdDate);
// console.log(createdDate.toLocaleDateString());

//Time Stamps : 
let timeStamp = Date.now();
console.log(timeStamp);
console.log(createDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long"
})
    










