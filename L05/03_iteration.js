//for of loop
// const isArray = [3, 5, 6, 3, 8, 9];
// for (const value of isArray) {
//     console.log(value);
    
// }

const car = "ferrari"
for (const vehicle of car) {
    //console.log(`each char is ${vehicle}`);
    
}
//output: 
// each char is f
// each char is e
// each char is r
// each char is r
// each char is a
// each char is r
// each char is i


//Maps
const map = new Map();
map.set('IN', "India")
map.set('US', "United States of America")
map.set('AFG', "Afghanistan")

//console.log(map);  //output: Map(3) { 'IN' => 'India', 'US' => 'USA', 'AFG' => 'Afghanistan' }

for (const key of map) {
    //console.log(key);
    
}

// destructuring of an array : 
for (const [key, value] of map) {
    //console.log(key, ':-' ,value);
    
}
//output: 
// IN :- India
// US :- United States of America
// AFG :- Afghanistan


const isObject = {
    game1: 'NFS',
    game2: 'RDR'
}

for (const [key, value] of isObject) {
    //console.log(key, ':-', value);
    
}

//output: TypeError: isObject is not iterable