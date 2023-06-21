// FOR LOOPS

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// TABLES
for (let i = 0; i <= 10; i++) {
  let multi = 2 * `${i}`;
  console.log(`2 * ${i} = ${multi}`);
}

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newCountry = [];

for (let i = 0; i < countries.length; i++) {
  const result = newCountry.push(countries[i].toUpperCase());
}
console.log(newCountry);

// for of loop

const number = [2, 3, 4, 5, 6, 7];

let sum = 0;
for (const num of number) {
  sum += num;
}
console.log(sum);

//  EXERCISE LEVEL-1

// Iterate 0 to 10 using for loop, do the same using while and do while loop
// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// do while loop
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for loop
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Iterate 0 to n using for loop
let n = 10;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// Write a loop that makes the following pattern using console.log():
for (let i = 1; i <= 7; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "#";
  }
  console.log(pattern);
}

// use loop for building a table pattern

for (let i = 0; i <= 10; i++) {
  const table = 5 * `${i}`;
  console.log(`5 * ${i} = ${table}`);
}

// square
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sums = 0;
for (let i = 0; i <= 100; i++) {
  sums += i;
}
console.log(sums);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
let sumOdd = 0;
let arr = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  } else {
    sumOdd += i;
  }
}
const results = [sumEven, sumOdd];
console.log(results);

// Develop a small script which generate array of 5 random numbers
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  const random = Math.floor(Math.random() * 100) + 1;
  randomNumbers.push(random);
}
console.log(randomNumbers);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomNumber = [];

while (randomNumber.length < 5) {
  let random = Math.floor(Math.random() * 100) + 1;
  if (!randomNumber.includes(random)) {
    randomNumber.push(random);
  }
}
console.log(randomNumber);

// Develop a small script which generate a six characters random id:
let result = "";
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for (let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  result += characters.charAt(randomIndex);
  // result += characters[randomIndex]; another way
}

console.log("Random ID:", result);

// ===================================*************LEVEL-2***************======================================== //

// EXERCISE LEVEL-2

let output = "";
const character =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const desiredLength = 8;

for (let i = 0; i < desiredLength; i++) {
  const randomIndex = Math.floor(Math.random() * character.length);
  output += characters.charAt(randomIndex);
  // result += characters[randomIndex]; another way
}

console.log(`Any: ${output}`);

// Write a script which generates a random hexadecimal number.

const numbers = "1234567890abcdef";
let hexa = "#";

for (let i = 0; i < 6; i++) {
  const randomHexa = Math.floor(Math.random() * numbers.length);
  hexa += numbers[randomHexa];
}

console.log(hexa);

// write a script which generates a random rgb color

const color = "1234567890";
let rgb = " ";

for (let i = 0; i < 3; i++) {
  const randomRgb = Math.floor(Math.random() * color.length);
  rgb += color[randomRgb];
}

let rgbColor = `rgb(${rgb}, ${rgb}, ${rgb})`;
console.log(rgbColor);

// BETTER WAY OF RGB COLOR

const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);

const randomColor = `rgb(${red}, ${green}, ${blue})`;
console.log(randomColor);

// Using the above countries array, create the following new array.
/*
const country = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
*/

const country = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const newCountries = [];

for (let i = 0; i < country.length; i++) {
  newCountries.push(country[i].toUpperCase());
}

console.log(newCountries);

// Using the above countries array, create an array for countries length'.

const countriesLength = [];

for (let i = 0; i < country.length; i++) {
  countriesLength.push(country[i].length);
}

console.log(countriesLength);

// Use the countries array to create the following array of arrays:

const CountryBox = [];

for (const box of country) {
  CountryBox.push(`[${box}, ${box.slice(0, 3).toUpperCase()}, ${box.length}]`);
}

console.log(CountryBox);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

const lands = [];

for (const land of country) {
  if (land.includes("land")) {
    lands.push(land);
  }
}

if (lands.length > 0) {
  console.log(lands);
} else {
  console.log("All the countries in the array dont have landa");
}

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

const landEndsWith = [];

for (const land of country) {
  if (land.endsWith("ia")) {
    landEndsWith.push(land);
  }
}

if (landEndsWith.length > 0) {
  console.log(landEndsWith);
} else {
  console.log("All the countries in the array dont have landa");
}

// Using the above countries array, find the country containing the biggest number of characters.

let biggest = "";

for (const big of country) {
  if (big.length > biggest.length) {
    biggest = big;
  }
}

console.log(biggest);

// Using the above countries array, find the country containing only 5 characters.
const countryList = [];

for (const country5 of country) {
  if (country5.length === 5) {
    countryList.push(country5);
  }
}

console.log(countryList);

// Find the longest word in the webTechs array

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let longestWord = "";

for (const long of webTechs) {
  if (long.length > longestWord.length) {
    longestWord = long;
  }
}

console.log(longestWord);

// Use the webTechs array to create the following array of arrays:
const webTechology = [];
for (const web of webTechs) {
  const result = `[${web}, ${web.length}]`;
  webTechology.push(result);
}

console.log(webTechology);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ["MongoDB", "Express", "React", "Node"];

let acro = "";
for (const stack of mernStack) {
  acro += stack.charAt(0);
}

console.log(acro);

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const stack = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for (const stacks of stack) {
  console.log(stacks);
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// for loop
const fruits = ["banana", "orange", "mango", "lemon"];

const fruitBox = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  fruitBox.push(fruits[i]);
}
console.log(fruitBox);

// for of loop
const reversedFruits = [];
for (const fruit of fruits) {
  reversedFruits.unshift(fruit);
}

console.log(reversedFruits);

//  print all the array
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const stack of fullStack) {
  for (const element of stack) {
    console.log(element);
  }
}

// =====================================*************LEVEL-3*************=========================================//

// EXERCISE LEVEL-3

// Copy countries array(Avoid mutation)
// THERE ARE 4 WAYS TO COPY FROM THE ORIGINAL ARRAY

// SPREAD OPERATOR
const copyCountry = [...country];
console.log(copyCountry);

// ARRAY.FROM()
const countriesCopy = Array.from(countries);

// Array.prototype.slice():
const countryCopy = countries.slice();

// Array.prototype.concat():
const countriesCopys = [].concat(countries);

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

const copy = [...country];

const sortedCountries = copy.sort();
console.log(sortedCountries);

// sort the Webtech array and Mernstack array

const sortWeb = webTechs.sort();
console.log(sortWeb);

const sortMern = mernStack.sort();
console.log(sortMern);

// Extract all the countries contain the word 'land' from the countries array and print it as array

const newCountrie = [...country];

let sorted = [];

for (const country of newCountrie) {
  if (country.includes("land")) {
    sorted.push(country);
  }
}

console.log(sorted);

// Find the country containing the hightest number of characters in the countries array

const highestCountry = [...country];

let char = "";

for (const highest of highestCountry) {
  if (highest.length > char.length) {
    char = highest;
  }
}

console.log(char);

// Reverse the countries array and capitalize each country and stored it as an array
const reverseCountry = [...country];

const revos = [];
reverseCountry.reverse();
for (const revo of reverseCountry) {
  revos.push(revo.toUpperCase());
}

console.log(revos);
