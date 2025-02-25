const name = "alpha";
const repoCount = 43;
console.log(name + repoCount + " Value");  // This syntax is outdated

// Latest syntax 
console.log(`My name is ${name} and my repo count is ${repoCount}.`); // This is called String interpolation. 

// Alternate way to declare a string is : 
const userName = new String('beta-gamma-proton');
console.log(userName[0]);
// console.log(userName[1]);
// console.log(userName[2]);
// console.log(userName[3]);

console.log(userName.__proto__); // syntax to access method but methods can be directly accessed.

console.log(userName.toLowerCase());
console.log(userName.length);
console.log(userName.charAt('3'));

const newString = userName.substring(0, 2);
console.log(newString);

const anotherString = userName.slice(-3, 2);
console.log(anotherString);

const latestString = "   JavaScript   ";
console.log(latestString);
console.log(latestString.trim()); // To remove extra space .trim() method is used.

//Replace Method ;
const url = "https://Java.com/Java%20Script/";
console.log(url.replace('%20', '-'));

console.log(url.includes('Script')); // Output : true

console.log(userName.split('-')); //Expected Output : [ 'beta', 'gamma', 'proton' ]










