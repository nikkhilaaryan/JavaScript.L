function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("V");
    console.log("A");
}
// sayMyName()


// function addTwoNumbers(num01, num02){
//     console.log(num01 + num02);
// }

function addTwoNumbers(num01, num02){

    // let result = num01 + num02
    // return result
    return num01 + num02
}

const result = addTwoNumbers(3, 5)

// console.log(result);



function loginUserMessage(username = "user"){
    if(!username){
        console.log("PLease enter the username");
        return
    }
    return `${username} logged in succesfully`
}

// console.log(loginUserMessage("admin"))
// console.log(loginUserMessage("engineer"))


function calculateCartPrice(...num01) {
        return num01;
}

// console.log(calculateCartPrice(175, 657, 848, 343));  // [ 175, 657, 848, 343 ]


const user = {
    userName: "java%script",
    userID: 7853758
}
//username is java%script and userID is 7853758
function handleObject(anyObject){
        console.log(`username is ${anyObject.userName} and userID is ${anyObject.userID}`);
        
}
// handleObject(user);
// handleObject({
//     userName: "script%java",
//     userID: 9847583
// })
//username is script%java and userID is 9847583

const isArray = [3, 6, 7, 8, 6, 4];
function returnSecondValue(outputArray) {
        return outputArray[1]
}
// console.log(returnSecondValue(isArray));
console.log(returnSecondValue([5, 6, 3, 7 ,8 ,2, 1]));


