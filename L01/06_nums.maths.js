//Part 01 : Nums
const score = 1000;
console.log(score);

const balance = new Number(1000);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anotherScore = 34.97856;
console.log(anotherScore.toPrecision(4));

const standard = 100000000;
console.log(standard.toLocaleString()); //Default US standards numbering system---
console.log(standard.toLocaleString('en-IN')); // Indian standards numbering system ---

//Part 02: Maths

 console.log(Math);
 console.log(Math.abs(-4)); //Absoulte function
console.log(Math.round(4.6)); // Round off
console.log(Math.ceil(4.2)); // Ceiling Function
console.log(Math.floor(4.9)); // Floor Function
console.log(Math.min(4, 3, 6, 8)); // Minimum 
console.log(Math.max(4, 3, 6, 8)); // Maximum

console.log(Math.random()); // Random number between 0 and 1
console.log(Math.floor(Math.random()*10) + 1); // Random number between  

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);






