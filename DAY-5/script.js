// ARRAY METHODS

// Array Constructor
const arr = Array();
console.log(arr);

const eightEmptyValue = Array(8);
console.log(eightEmptyValue);

// Creating static values with fill
const eight5values = Array(8).fill(5);
console.log(eight5values);

// Concatenating array using concat
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList);

// Getting array length
const flat = ["flatmap", "setmap", "harshmap"];
console.log(flat.length);

// IndexOf
const fruits = ["banana", "orange", "mango", "lemon"];
console.log(fruits.indexOf("banana"));

// lastIndexOf
const numbers = [1, 2, 3, 4, 5, 3, 1, 2];

console.log(numbers.lastIndexOf(2));
console.log(numbers.lastIndexOf(0));

// Includes
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(webTechs.includes("React"));

// Checking array
const number = [1, 2, 3, 4, 5];
console.log(Array.isArray(number)); //true

// Converting array to string
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

// joining array elements
const webTech = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs.join());
console.log(webTechs.join(" # "));

// Slice array elements
const num = [1, 2, 3, 4, 5];
console.log(num.slice(1));

// Splice method in array
const nums = [1, 2, 3, 4, 5, 6, 7];
nums.splice(1, 5, 3, 8, 9);
console.log(nums);

// Adding item to an array using push
const fruit = ["banana", "orange", "mango", "lemon", "apple"];
fruit.push("grapes");
console.log(fruit);

// Removing the end element using pop
console.log(fruit.pop());

// Removing an element from the beginning
console.log(fruit.unshift("pearl"));

// Add an element from the beginning
console.log(fruit.shift("pearl"));

// Reversing array order
const numb = [1, 2, 3, 4, 5];
numb.reverse();
console.log(numb);

// Sorting elements in array
const webTechnology = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTechnology.sort();
console.log(webTechnology);

//================================*************EXERCISE**************====================================== //

// EXERCISE LEVEL-1

// Declare an empty array;
const empty = [];
console.log(empty);

// Declare an array with more than 5 number of elements
const element = ["iron", "lithium", "sodium", "graphite", "venadium"];
console.log(element);

// Find the length of your array
console.log(element.length);

// Get the first item, the middle item and the last item of the array
console.log(element[0], element[2], element[4]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [2, 5, [1, 3], [9], 8];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "facebook",
  "google",
  "microsoft",
  "apple",
  "IBM",
  "oracle",
  "amazon",
];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);
console.log(itCompanies[itCompanies.length - 1]);

// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString());

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// const exist = prompt("Enter a company");
// const company = itCompanies.includes(exist);

// if (company) {
//   console.log(`the company is ${exist}`);
// } else {
//   console.log(`company not found`);
// }

// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, 7));

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4));

// Remove the first IT company from the array
console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(2, 1));

// Remove the last IT company from the array
console.log(itCompanies.pop());

// Remove all IT companies
console.log(itCompanies.splice());

//===============================*****************LEVEL-2****************====================================== //

// EXERCISE LEVEL-2

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

import countries from "./countries.js";
import web_techs from "./web_techs.js";

console.log(countries);
console.log(web_techs);

// First remove all the punctuations and change the string to array and count the number of words in the array
/*
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
*/

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const texts = text.split(" ");
console.log(texts);
console.log(texts.length);

// In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

console.log(shoppingCart.unshift("Meat"));
console.log(shoppingCart.push("Sugar"));
console.log(shoppingCart.splice(4, 1));

const modify = (shoppingCart[3] = "green tea");
console.log(modify);
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const exist = countries.includes("ethopia");

if (exist) {
  console.log(`ETHOPIA EXIST`);
} else {
  countries.push("ethopia");
}
console.log(countries);

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

const exists = web_techs.includes("sass");

if (exists) {
  console.log("Sass is a CSS preprocess");
} else {
  web_techs.push("sass");
}
console.log(web_techs);

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//====================================*************LEVEL-3***********======================================== //

// ERERCISE LEVEL-3

// The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sorted = ages.sort(); // ages.sort((a, b) => a - b);
const minAge = sorted[0];
const maxAge = sorted[sorted.length - 1];
console.log(sorted);
console.log(minAge);
console.log(maxAge);

// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

const average = sum / ages.length;
console.log(`Average: ${average}`);

// Find the range of the ages(max minus min)
ages.sort((a, b) => a - b);
const minAges = ages[0];
const maxAges = ages[ages.length - 1];

const range = maxAges - minAge;

console.log(`${minAges} : ${maxAges} = ${range} `);

// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

const age = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let sums = 0;

for (let i = 0; i < age.length; i++) {
  sums += age[i];
}

const averages = sums / age.length;

const minAgess = Math.min(...age);
const maxAgess = Math.max(...age);

const minAverage = Math.abs(minAgess - averages);
const maxAverage = Math.abs(maxAgess - averages);

const minFloor = Math.floor(minAverage);
const maxFloor = Math.floor(maxAverage);

console.log(`${minFloor} ${maxFloor}`);

// Find the middle country(ies) in the countries array

const country = [...countries];

const middleIndex = Math.floor(country.length / 2);

if (country % 2 === 1) {
  const middleCountry = country[middleIndex];
  console.log(middleCountry);
} else {
  const middleCountry1 = country[middleIndex - 1];
  const middleCountry2 = country[middleIndex];
  console.log(`${middleCountry1} ${middleCountry2}`);
}
