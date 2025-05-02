//for in loop 
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

const isObject = {
        js: "javascript",
        cpp: "C++",
        rb: "ruby"
}

for (const key in isObject) {
    // console.log(`${key} shortcut is for ${isObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


const map = new Map();
map.set('IN', "India")
map.set('US', "United States of America")
map.set('AFG', "Afghanistan")


for (const key in map) {
    console.log(key);
}
//output : map is not iteratable