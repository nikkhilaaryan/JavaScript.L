const user = {
    userName: "java*script",
    userID: 894793,

    verificationMessage: function() {
        console.log(`${this.userName}, with user id ${this.userID} has been verified.`);
        // console.log(this);  //{
        //     userName: 'java*script',
        //     userID: 894793,
        //     verificationMessage: [Function: verificationMessage]
        //   }
        //   {}
        
        
    }
}


// user.verificationMessage() // java*script, with user id 894793 has been verified.
// console.log(user.verificationMessage()); // java*script, with user id 894793 has been verified.

//Now changing the default username.
// user.userName = "Python";
// user.verificationMessage(); //Python, with user id 894793 has been verified.
// console.log(this); {
//     userName: 'Python',
//     userID: 894793,
//     verificationMessage: [Function: verificationMessage]
//   }
//   {}



// function programmer() {
//     let username = "java#script"
//     // console.log(this.username); // undefined
    
// }
// programmer();


// const programmer = function() {
//     let username = "java/script"
//     console.log(this.username);
    
// }
// programmer(); //undefined


const programmer = () => {                       //This is arrow function by removing the function keyword.
    let userName = "java!script"
    console.log(this.username); //undefined
    console.log(this); // empty parenthesis
    
    
}
// programmer();

// arrow function basic syntax : () => {}

    // const addTwo = (num01, num02) => {
    //     return num01 + num02
    // }
    // addTwo(3, 4);
    // console.log(addTwo(3, 4));  //7

    //implicit return 
    const addTwo = (num01, num02) => num01 + num02;
    //OR this can also be written
    // const addTwo = (num01, num02) => num01 + num02;
    console.log(addTwo(4, 6));

    
    // const addTwo = (num1, num2) => ({username: "java"})

    // const isArray = [2, 5, 3, 7, 8]

// isArray.forEach()
    





