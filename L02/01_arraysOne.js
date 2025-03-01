//  arrays
//In JavaScript arrays can be resizable and can contain different data types.
//
//
const isArr = [1, 4, 2, 6, 7, 8,];

// const isArrTwo = new Array(1, 2, 3, 4, 5,)

console.log(isArr);

// console.log(isArrTwo);

// console.log(isArr[0]); // arrays can be accessed by this syntax.
// // In JavaScript while using array-copy-operations it create shallow operations.

// //Arrays Method

// isArrTwo.push(9); // 9 is added in the array using this method.
// console.log(isArrTwo);

// isArrTwo.pop(); // to remove the last value in the array.
// console.log(isArrTwo);

// isArrTwo.unshift(5); // to insert value in the staring.
// console.log(isArrTwo);

// console.log(isArrTwo.includes(10)); // OutPut is : false (boolean)
// console.log(isArrTwo);

// const newArray = isArr.join();
// console.log(newArray);
// console.log(typeof newArray);


// slice OR splice

//Part 01 : slice
console.log("A ", isArr);
const isn1 = isArr.slice(1, 3);
console.log(isn1);

//Part 02 : splice
console.log("B ", isArr);
const isn2 = isArr.splice(1, 3);
console.log("C ", isArr);

console.log(isn2);

// The main difference between slice and splice.
// [ 1, 4, 2, 6, 7, 8 ]
// A  [ 1, 4, 2, 6, 7, 8 ]
// [ 4, 2 ]
// B  [ 1, 4, 2, 6, 7, 8 ]
// C  [ 1, 7, 8 ]
// [ 4, 2, 6 ]