//if statement
// const isLoggedIn = true;

// const temperature = 52;
// if (temperature < 40) {
//     console.log("The temperature is less then 40 degrees.");
    
// } else {
//     console.log("The tempreature is greater then 40 degrees.");
    
// }

// const score = 234;
// if (score > 100) {
//     const power = "fly";
//     console.log(`user power: ${power}`);
    
// }

//Shorthand notation
// const balance = 5473; 
// if(balance < 9999) console.log("test"), console.log("test two");

// const balance = 1000;
// if (balance < 500) {
//     console.log("less then 500");
    
// }else if(balance < 750) {
//     console.log("less then 750");
    
// }else if(balance < 900) {
//     console.log("less then 900");
    
// }else {
//     console.log("less then 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("User Verified");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}