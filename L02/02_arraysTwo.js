//Arrays Part : 02
//console.log("JavaScript")
const isParticle = ["electron", "hadrons", "protons", "quarks"];
const isElements = ["hydrogen", "helium", "lithium", "boron", "carbon"];

// isElements.push(isParticle);
// console.log(isElements);
//  isElements.push(...isParticle); //spreads each element into isElements
// console.log(isElements);

const isChemisrtry = (isElements.concat(...isParticle)); // another way to merge two string
// in one by using concat
console.log(isChemisrtry);

const allChemistry = [...isElements,...isChemisrtry];
console.log(allChemistry);

const numberArray = [1, 2, 3, [6, 7, 9,], 4, [3, 7, 8 ]];
const realNumberArray = numberArray.flat(Infinity);
console.log(realNumberArray);

console.log(Array.isArray("JavaScript"));
console.log(Array.from("JavaScript"));
console.log(Array.from({name : "JavaScript"})); // Output : []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //OutPut : [ 100, 200, 300 ]