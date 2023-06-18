// EXERCISE LEVEL-1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = "harry";
const lastName = "james";
const country = "swizerland";
const city = "las vegas";
const age = 25;
const isMarried = true;
const year = 2022;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2. Check if type of '10' is equal to 10

const type = "10";
const type1 = parseInt(type);
console.log(type1);

// 3. Check if parseInt('9.8') is equal to 10

const number = parseInt("9.8");
const numbers = Math.ceil(number);
console.log(numbers);

// 3. Boolean value is either true or false.

// Write three JavaScript statement which provide truthy value.

const jam = "wow";
const bun = 5;

// 4. Write three JavaScript statement which provide falsy value.
const face = "";
const quit = null;

// 5. Use the Date object to do the following activities

const now = new Date();
// What is the year today?
console.log(now.getFullYear());
// What is the month today as a number?
console.log(now.getMonth());
// What is the date today?
console.log(now.getDate());
// What is the day today as a number?
console.log(now.getDay());
// What is the hours now?
console.log(now.getHours());
// What is the minutes now?
console.log(now.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getSeconds());

// ************************************************************************************************************** //

// EXERCISE LEVEL-2

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*
Enter base: 20
Enter height: 10
The area of the triangle is 100
*/

const base = prompt("Enter base");
const height = prompt("Enter height");
const AreaOfTriangle = 0.5 * base * height;
console.log(AreaOfTriangle);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

/* 
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/

const sideA = Number(prompt("Enter side A"));
const sideB = Number(prompt("Enter side B"));
const sideC = Number(prompt("Enter side c"));
const perimeter = sideA + sideB + sideC;
console.log(perimeter);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// const length = Number(prompt("Enter the length"));
// const width = Number(prompt("Enter the width"));

const area = length * width;
console.log(area);
const perimeters = 2 * (length + width);
console.log(perimeters);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const radius = Number(prompt("Enter the radius"));
const pi = 3.14;
const areaOfCircle = pi * radius * radius;
console.log(areaOfCircle);

// 5. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

const hours = Number(prompt("Enter the hours"));
const ratePerHour = Number(prompt("Enter the ratePerHour"));
const pay = hours * ratePerHour;
console.log(pay);

// 6. If the length of your name is greater than 7 say, your name is long else say your name is short.

const names = "John";

if (names.length > 7) {
  console.log("Your name is long.");
} else {
  console.log("Your name is short.");
}

// 7. Compare your first name length and your family name length and you should get this output.

const firstPerson = "Jhon";
const secondPerson = "smilga";

if (firstPerson.length > secondPerson.length) {
  console.log(
    `firstperson ${firstPerson} is greater than sencondperson ${secondPerson}`
  );
} else {
  console.log(
    `secondperson ${secondPerson} is greater than firstperson ${firstPerson}`
  );
}

// 8.  Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
//  let myAge = 250
// let yourAge = 25
// I am 225 years older than you.

const myAge = 250;
const yourAge = 25;

const ageDifference = myAge - yourAge;
console.log(`I am ${ageDifference} years older than you.`);

// 9. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// Enter birth year: 1995
// You are 25. You are old enough to drive

// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.

const birthday = Number(prompt("Enter birth year"));
const years = new Date().getFullYear();
const currenrAge = years - birthday;

const drivingAge = 18;
const yearsToDrive = drivingAge - currenrAge;

if (currenrAge > drivingAge) {
  console.log(`you are ${currenrAge}. You are old enough to drive`);
} else {
  console.log(
    `you are ${currenrAge}. You will be allowed to drive after ${yearsToDrive} years.`
  );
}

// 10. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// Enter number of years you live: 100/
// You lived 3153600000 seconds.

const numberOfYears = Number(prompt("Enter the year"));

const SecondsLived = numberOfYears * 365 * 24 * 60 * 60;

console.log(`you have lived ${SecondsLived} in you life`);

/* 11.  Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
*/
// const date = new Date();
// const year_s = date.getFullYear();
// const month = String(date.getMonth() + 1).padStart(2, "0");
// const dates = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();

// console.log(`${year_s}-${month}-${dates} ${hour}:${minutes}`);

// ============================================================================================================= //

// EXERCISE LEVEL-3

/* 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

const date = new Date();
const year_s = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0");
const dates = String(date.getDate()).padStart(2, "0");
const hour = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");

console.log(`${year_s}-${month}-${dates} ${hour}:${minutes}`);
