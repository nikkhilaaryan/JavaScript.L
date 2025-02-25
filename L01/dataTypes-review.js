// 1. Primitive 
        //There are seven types of Primitive Data Types 
            // String, number, boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 85.45;

const isLoggedIn = false;
const outSideTemp = null;

const id = Symbol('456782');
const anotherId = Symbol('456782');
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber = 343890849574985789475n
console.log(bigNumber);



// 2. Refrence 
        //There are three types of Refrence Data Types
            // Arrays, Objects, Functions

            const alphabet = ["a", "b", "d", "f"];
            let myObj = {
                name: "Java",
                age: 56,
            }
            
            const myFunction = function(){
                console.log("Hello world");
            }
            
            console.log(typeof anotherId);

            //                                    --Memory--
            // There are two types of Memory 
            // 1. Stack Memory (Primitive)
            let languageName = "JavaSrcipt";
            let newLanguageName = languageName;
             newLanguageName = "Python";

             console.log(languageName);
            console.log(newLanguageName);

            //Example 02
            let userAlpha = {
                email : "alpha@hotmail.com"
                // upi  : "alpha@oksbi"
            }
             let userBeta = userAlpha;

             userBeta.email = "user@hotmail.com"

             console.log(userAlpha.email);
             console.log(userBeta.email);
             
            
            

            // 2. Heap Memory  (Non-Primitive OR Refrence Type)

            
            