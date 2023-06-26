// EXERCISE LEVEL-1

const countries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "Swizerland",
];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Define a callback function before you use it in forEach, map, filter or reduce.
// const count = countries.forEach((country) => {
//   console.log(country);
// }); // alternative
const show = function (country) {
  console.log(country);
};

// Use forEach to console.log each country in the countries array.
countries.forEach(show);

// Use forEach to console.log each name in the names array.
names.forEach(show);

// Use forEach to console.log each number in the numbers array.
numbers.forEach(show);

// Use map to create a new array by changing each country to uppercase in the countries array.
const upper = countries.map((country) => {
  return country.toUpperCase();
});
console.log(upper);
// Use map to create an array of countries length from countries array.
const lengths = (len) => {
  console.log(len.length);
};
countries.map(lengths);

// Use map to create a new array by changing each number to square in the numbers array
const number = numbers.map((num) => {
  return num * num;
});
console.log(number);

// Use map to change to each name to uppercase in the names array
const uppercase = names.map((name) => {
  return name.toUpperCase();
});
console.log(uppercase);

// Use map to map the products array to its corresponding prices.
const product = products.map((pro) => {
  return pro.price;
});
console.log(product);

// Use filter to filter out countries containing land.
const filterCountry = countries.filter((country) => {
  return country.includes("land");
});
console.log(filterCountry);

// Use filter to filter out countries having six character.
const char = countries.filter((char) => {
  return char.length === 6;
});
console.log(char);

// Use filter to filter out countries containing six letters and more in the country array.
const letter = countries.filter((letter) => {
  return letter.length >= 6;
});
console.log(letter);

// Use filter to filter out country start with 'E';

const startsWithE = countries.filter((start) => {
  return start.startsWith("D");
});
console.log(startsWithE);

// Use filter to filter out only prices with values.

const prices = products.filter((price) => {
  return typeof price.price === "number";
});
console.log(prices);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const getStringLists = (array) => {
  return array;
};
console.log(getStringLists("hello"));

// Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, curr) => {
  acc += curr;
  return acc;
}, 0);
console.log(sum);

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const sentence = countries.reduce((acc, curr, index) => {
  if (index === countries.length - 1) {
    return `${acc} and ${curr}`;
  } else {
    return `${acc} ${curr},`;
  }
}, "");

console.log(`${sentence} are north European countries`);

// Use some to check if some names' length greater than seven in names array
const namees = names.some((name) => {
  return name.length > 7;
});
console.log(namees);

// Use every to check if all the countries contain the word land
const check = countries.every((country) => {
  return country.includes("land");
});
console.log(check);

// Use find to find the first country containing only six letters in the countries array
const first = countries.find((first) => {
  return first.length === 6;
});
console.log(first);

// Use findIndex to find the position of the first country containing only six letters in the countries array
const index = countries.findIndex((indices) => {
  return indices.length === 6;
});
console.log(index);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const indexs = countries.findIndex((index) => {
  return index === "Norway";
});
console.log(indexs);

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const indices = countries.findIndex((index) => {
  return index === "Russia";
});
console.log(indices);

// EXERCISE LEVEL-2

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products
  .map((product) => product.price) // Extract the prices
  .filter((price) => typeof price === "number") // Filter out non-numeric prices
  .reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);
console.log(totalPrice);

// Find the sum of price of products using only reduce reduce(callback))
const sumOfPrice = products.reduce((acc, curr) => {
  if (typeof curr.price === "number") {
    acc += curr.price;
  }
  return acc;
}, 0);
console.log(sumOfPrice);

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

const countStartingLetters = (country) => {
  let countLetters = {};
  for (const countries of country) {
    const firstLetter = countries[0].toUpperCase();
    if (countLetters[firstLetter]) {
      countLetters[firstLetter] += 1;
    } else {
      countLetters[firstLetter] = 1;
    }
  }

  let result = [];
  for (const letter in countLetters) {
    result.push({ letter, count: countLetters[letter] });
  }
  return result;
};

const country = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const letterCount = countStartingLetters(country);
console.log(letterCount);

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

const getFirstTenCountries = (countri) => {
  return countri.slice(0, 5);
};

const countri = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "India",
  "swizerland",
  "france",
  "fiji",
  "brazil",
];
const firstCountry = getFirstTenCountries(countri);
console.log(firstCountry);

// Declare a getLastTenCountries function which which returns the last ten countries in the countries array
const getLastTenCountries = (lastCountries) => {
  const result = lastCountries.slice(-4);
  return result;
};

const lastCountries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "India",
  "swizerland",
  "france",
  "fiji",
  "brazil",
];
const lastCountry = getLastTenCountries(lastCountries);
console.log(lastCountry);

// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

// Function to find the most frequently used initial letter
function findMostFrequentInitialLetter() {
  const initialLetters = countries.map((country) => country[0]);
  const letterCount = initialLetters.reduce((countMap, letter) => {
    countMap[letter] = (countMap[letter] || 0) + 1;
    return countMap;
  }, {});

  const sortedLetters = Object.keys(letterCount).sort(
    (a, b) => letterCount[b] - letterCount[a]
  );
  return sortedLetters[0];
}

const mostFrequentInitialLetter = findMostFrequentInitialLetter();
console.log(mostFrequentInitialLetter);

// EXERCISE LEVEL-3
