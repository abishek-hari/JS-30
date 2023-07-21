// SET
// SET IS A COLLECTION OF ELEMENTS

// creating an empty set
const companies = new Set();
console.log(companies);

// creating set from array
const languages = [
  "english",
  "french",
  "english",
  "french",
  "english",
  "spanish",
  "french",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

// Set is an iterable object and we can iterate through each elements.

for (const language of setOfLanguages) {
  console.log(language);
}

// Adding an element to a set

const productCompanies = new Set();
console.log(productCompanies.size);

productCompanies.add("Google");
productCompanies.add("Meta");
productCompanies.add("Amazon");
productCompanies.add("Microsoft");
productCompanies.add("Netflix");
console.log(productCompanies);
console.log(productCompanies.size);

// We can also use loop to add element to a set.
const newCompanies = ["Google", "Facebook", "Amazon", "Oracle", "Microsoft"];
let setOfCompanies = new Set();
for (const company of newCompanies) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies);

// Deleting an element a set
// We can delete an element from a set using a delete method.
console.log(productCompanies.delete("Google"));
console.log(productCompanies);

// Checking an element in the set
// The has method can help to know if a certain element exists in a set.
// It returns True/False
console.log(productCompanies.has("Meta"));

// Clearing the set
// It removes all the elements from a set.
productCompanies.clear();
console.log(productCompanies);

// Filter Languages
const language = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const langSet = new Set(language);
console.log(langSet);

const counts = [];

for (const lang of langSet) {
  const filterlang = language.filter((l) => l === lang);
  console.log(filterlang);
  counts.push({ lang: lang, count: filterlang.length });
}
console.log(counts);

// Union of sets
// To find a union to two sets can be achieved using spread operator. Lets find the union of set A and set B (A U B)

let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let C = new Set(c);
console.log(C);

// Intersection of sets
// To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B)

let e = [1, 2, 3, 4, 5];
let f = [3, 4, 5, 6];

let F = new Set(f);

let g = e.filter((num) => F.has(num));
console.log(g);

// Difference of sets
// To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)

let h = [1, 2, 3, 4, 5];
let i = [3, 4, 5, 6];

let I = new Set(i);

let j = h.filter((num) => !I.has(num));
console.log(j);

// MAP
// Creating an empty Map

const map = new Map();
console.log(map);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

const maps = new Map(countries);
console.log(maps);
console.log(maps.size);

// SET - Adding values to the Map
const countriesMap = new Map();
console.log(countriesMap.size); // 0
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
countriesMap.set("Norway", "Oslo");
console.log(countriesMap);
console.log(countriesMap.size);

// GET - Getting a value from Map
console.log(countriesMap.get("Finland"));

// Checking key in Map
// Check if a key exists in a map using has method. It returns true or false.

console.log(countriesMap.has("Finland"));

// Getting all values from map using loop
for (const country of countriesMap) {
  console.log(country);
}

// EXERCISES
// EXERCISES:LEVEL 1

const ab = [4, 5, 8, 9];
const bc = [3, 4, 5, 7];
const countriesList = ["Finland", "Sweden", "Norway"];

// create an empty set
const create = new Set();

// Create a set containing 0 to 10 using loop
for (let i = 0; i < 10; i++) {
  create.add(i);
}
console.log(create);

// Remove an element from a set
create.delete(2);
console.log(create);

// Clear a set
create.clear();
console.log(create);

// Create a set of 5 string elements from array
const array = ["a", "b", "c", "d", "e"];
const elements = new Set(array);
console.log(elements);

// Create a map of countries and number of characters of a country
const countriesLists = ["Finland", "Sweden", "Norway"];
const store = [];

for (const country of countriesLists) {
  store.push({ country: country, Char: country.length });
}
console.log(store);
