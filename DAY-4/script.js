// EXERCISE LEVEL-1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/*
Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/

const user = Number(prompt("Enter your age"));

const age = 18;
const ageDifference = age - user;

if (user > age) {
  console.log(`You are old enough to drive`);
} else {
  console.log(`you are left with ${ageDifference} years to drive`);
}

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

/* 
Enter your age: 30
You are 5 years older than me.
 */

const yourAge = Number(prompt("Enter your age"));
const myAge = 21;

const ageDiffer = yourAge - myAge;
const abs = Math.abs(ageDiffer);

if (yourAge > myAge) {
  console.log(`you are ${abs} years older than me`);
} else {
  console.log(`you are ${abs} years younger than me`);
}

//  3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else

let a = 6;
let b = 5;

if (a > b) {
  console.log(`a is greater than b`);
} else {
  console.log(`a is less than b`);
}

// ternary operator.

let num1 = 3;
let num2 = 5;

num1 > num2
  ? console.log(`a is greater than b`)
  : console.log(`a is less than b`);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

/*
 Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
*/

const getNumber = Number(prompt("Enter the number"));

const divisible = getNumber % 2;
const remainder = divisible === 0;

if (remainder) {
  console.log(`${getNumber} is an even number`);
} else {
  console.log(`${getNumber} is an odd number`);
}

//===============================**************LEVEL-2***************===========================================//

// EXERCISE LEVEL-2

//  1. Write a code which can give grades to students according to theirs scores:
/*
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F
*/

const marks = Number(prompt("Enter the Marks"));

if (marks > 80) {
  console.log(`great! you got A grade`);
} else if (marks > 70 && marks < 79) {
  console.log(`Very Good! you got B grade`);
} else if (marks > 60 && marks < 69) {
  console.log(`Good! you got c grade`);
} else if (marks > 50 && marks < 59) {
  console.log(`try your best! you got D grade`);
} else if (marks > 0 && marks < 49) {
  console.log(`try to improve! you got F grade`);
} else {
  console.log(`Enter you marks correctly`);
}

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

const userValue = prompt("Enter the month");

if (userValue) {
  const month = userValue.toLowerCase();
  let season;

  switch (month) {
    case "september":
    case "october":
    case "november":
      season = "Autumn";
      break;
    case "december":
    case "january":
    case "february":
      season = "Winter";
      break;
    case "march":
    case "april":
    case "may":
      season = "Spring";
      break;
    case "june":
    case "july":
    case "august":
      season = "Summer";
      break;
    default:
      console.log(`the month is invalid`);
      break;
  }
  if (season) {
    console.log(`The season is ${season}`);
  }
} else {
  console.log(`Invalid type`);
}

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

/*
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/

const days = prompt("What is the day today");

let weekdays;
const week = days.toLowerCase();
switch (week) {
  case "saturday":
  case "sunday":
    weekdays = "Weekend";
    break;
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    weekdays = "Weekday";
    break;
  default:
    console.log(`Enter proper value`);
    break;
}
if (weekdays) {
  console.log(`today is ${weekdays}`);
}

//====================================*************LEVEL-3************==========================================  //

// EXERCISE LEVEL-3

//  1. Write a program which tells the number of days in a month.

/*
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/

const enterMonth = prompt("Enter the month");

if (enterMonth) {
  const month = enterMonth.toLowerCase();
  let numberOfDays;

  switch (month) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      numberOfDays = 31;
      break;
    case "april":
    case "june":
    case "september":
    case "november":
      numberOfDays = 30;
      break;
    case "february":
      numberOfDays = 28;
    default:
      console.log(`invalid type`);
      break;
  }

  if (numberOfDays) {
    console.log(`${month} has ${numberOfDays} days`);
  }
}
