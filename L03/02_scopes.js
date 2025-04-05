//  var n = 304;
let l = 405;
if (true) {
    let l = 45;
    const m = 67;
    var n = 34;
    // console.log("inside: ", l);
    
}

// console.log(l);
// console.log(m);
// console.log(n);

function one() {
    const username = "java$script"
    function two() {
        const website = "YouTube"
        console.log(username);
        
    }
    // console.log(website); // This will not be executed as this is outside the two function.
    two(); //java$script
    
}
// one();

if (true) {
    const username = "java@script"
    if (username === "java@script") {
        const website = " YouTube"
        // console.log(username + website);
        
    }
    // console.log(website); error: cannot be acceded because it is outside the inner scope.
    
}
// console.log(username); error: cannot be acceded because it is outside the inner scope.


// interesting concept
function addOne(num) {
    return num + 1
}
// addOne(5)  this can be accessed before initialization.

const addTwo = function(num) {
    return num + 2
}
// addTwo(5)  this can not be accessed before intialization.



