// const userEmail = "script@java";

// if (userEmail) {
//     console.log("UserEmail Confirmed");
    
// }else {
//     console.log("Unauthorized Access");
    
// }

//falsy values;
//false, 0, -0, BigInt 0n, " ", null, undefined, Nan(Not a number).

//truthy value;
//"0", 'faslse', " ", [], {}, function(){},

// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// }


// const emptyObject = {}

// if (Object.keys(emptyObject).length === 0) {
//     console.log("Object Empty");
    
// }


//Nullish Coalescing Operator (??): null and undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1  = undefined ?? 10; 
val1 = null??10??23;
console.log(val1);
 

//Terinary Operator
//syntax: condition ? true : false
const itemPrice = 145;
itemPrice >= 125 ? console.log("Expensive") : console.log("Feasible"); // Output : Expensive
