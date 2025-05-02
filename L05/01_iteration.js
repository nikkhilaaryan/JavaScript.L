//for loop
//syntax : 
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// example 
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

let isArray = ["hydrogen", "helium", "carbon", "oxygen"]

for (let index = 0; index < isArray.length; index++) {
    const element = isArray[index];
    console.log(element);
    
}

//break && continue
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}