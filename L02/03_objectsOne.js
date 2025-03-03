// singleton

// object literals 
Object.create

const isSym = Symbol("Key01");

const JsUser = {
    name : "Java",
    "full name" : "JavaScript",
    [isSym] : "ourKey01",
    location : "Asus",
    email : "javascript@hotmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Saturday", "Sunday"]

} 
console.log(JsUser.email); // 
console.log(JsUser["email"]);
console.log(JsUser[isSym]);
console.log(typeof JsUser[isSym]);

JsUser.email = "JS@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email = "JS@Mircrosoft.com";
console.log(JsUser.email);

JsUser.greetings = function(){
    console.log(`Hello JSuser, Welcome back !`);
    
}

JsUser.greetingsBravo = function(){
    console.log(`Hello ${this["full name"]}, Welcome back !`);
    
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsBravo());

console.log(JsUser.greetings); //[Function (anonymous)]








