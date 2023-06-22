// EXERCISE LEVEL-1

// Declare a function fullName and it print out your full name.
function fullName(name) {
  return name;
}
console.log(fullName("sam"));

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullNames(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(fullNames("harry", "potter"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log(addNumbers(3, 7));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle = (lengths, width) => {
  return lengths * width;
};

console.log(areaOfRectangle(35, 67));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (lengths, width) => {
  const perimeter = 2 * (lengths + width);
  return perimeter;
};

console.log(perimeterOfRectangle(7, 4));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (lengths, width, height) => {
  const volume = lengths * width * height;
  return volume;
};
console.log(volumeOfRectPrism(5, 3, 9));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function circle(r) {
  const PI = Math.PI;
  const areaOfCircle = PI * r * r;
  return areaOfCircle;
}
console.log(circle(8));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumference(r) {
  const PI = Math.PI;
  const circumOfCircle = 2 * PI * r;
  return circumOfCircle;
}
console.log(circumference(6));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass, volume) => {
  return mass / volume;
};
console.log(density(56.5, 35.7));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

const speed = (distance, time) => {
  return distance / time;
};
console.log(speed(167, 60));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight = (mass, gravity) => {
  return mass * gravity;
};
console.log(weight(170, 3.4));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = (c) => {
  const convert = c + 9 / 5 + 32;
  return convert;
};
console.log(convertCelsiusToFahrenheit(45));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

const Bmi = (weight, height) => {
  const heightInMeters = height / 100;
  const check = weight / (heightInMeters * heightInMeters);

  if (check < 18.5) {
    return "underweight";
  } else if (check >= 18.5 && check <= 24.5) {
    return "normal weight";
  } else if (check >= 25 && check <= 29.9) {
    return "overweight";
  } else {
    return "obese";
  }
};

const bmiChecker = Bmi(40, 158);
console.log(bmiChecker);

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (month) => {
  switch (month) {
    case "september":
    case "october":
    case "november":
      return "Autumn";
    case "december":
    case "january":
    case "february":
      return "Winter";
    case "march":
    case "april":
    case "may":
      return "Spring";
    case "june":
    case "july":
    case "august":
      return "Summer";
    default:
      return "you have entered wrong charcters";
  }
};

const season = checkSeason("april");
console.log(`the season is ${season}`);

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

const findMax = (arg1, arg2, arg3) => {
  let max = arg1;

  if (arg2 > max) {
    max = arg2;
  }
  if (arg3 > max) {
    max = arg3;
  }

  return max;
};

const max = findMax(90, 67, 89);
console.log(max);

//============================================*******LEVEL-2*********========================================== //

//  EXERCISE LEVEL-2

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = (arr) => {
  let newArray = [];

  for (const arrs of arr) {
    newArray.push(arrs);
  }
  return newArray;
};
const number = [1, 2, 3, 4, 5];
const num = printArray(number);
console.log(num);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

const showDateTime = () => {
  const now = new Date();
  const date = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hour = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const time = `${date}/${month}/${year} ${hour}:${minutes}`;
  return time;
};

console.log(showDateTime());

// Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
  let i = x;
  x = y;
  y = i;
  return [x, y];
};

const swap = swapValues(3, 4);
console.log(swap);

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

const reverseArray = (revo) => {
  let reverseAro = [];
  for (let i = revo.length; i > 0; i--) {
    reverseAro.push(i);
  }
  return reverseAro;
};
const newArray = [1, 2, 3, 4, 5];
const newRevo = reverseArray(newArray);
console.log(newRevo);

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizeArray = (capital) => {
  let capitalizedarray = [];
  for (const capi of capital) {
    capitalizedarray.push(capi);
  }
  return capitalizedarray;
};

const names = ["jill", "bob", "lisa", "rose", "jin"];
const capitalizedNames = capitalizeArray(names);
console.log(capitalizedNames);

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItems = (item, array) => {
  array.push(item);
  return array;
};
const fruits = ["apple", "mango", "pineapple"];
const updateFruits = addItems("kiwi", fruits);
console.log(updateFruits);

// another way
function addItem(item, array) {
  let updatedArray = [...array];

  for (let element of array) {
    updatedArray.push(element);
  }

  return updatedArray;
}
const fruit = ["apple", "banana", "orange"];
const updatedFruits = addItem("kiwi", fruit);

console.log(updatedFruits);

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (index, remo) => {
  let updatedArray = [];
  let currentIndex = 0;
  for (const item of remo) {
    if (currentIndex !== index) {
      updatedArray.push(item);
    }
    currentIndex++;
  }
  return updatedArray;
};
const fruity = ["apple", "banana", "orange"];
const removeFruit = removeItem(2, fruity);
console.log(removeFruit);

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (number) => {
  let sum = 0;
  for (const num of number) {
    sum += num;
  }
  return sum;
};
const numbers = [1, 2, 3, 4, 5];
console.log(sumOfNumbers(numbers));

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (number) => {
  let sum = 0;
  for (const num of number) {
    if (num % 2 === 1) {
      sum += num;
    }
  }
  return sum;
};
const oddNumber = [1, 2, 3, 4, 5];
console.log(sumOfOdds(oddNumber));

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (number) => {
  let sum = 0;
  for (const num of number) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
};
const evenNumber = [1, 2, 3, 4, 5];
console.log(sumOfEven(evenNumber));

//

const oddsAndEvens = (number) => {
  let even = 0;
  let odd = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return `numer of odds ${odd}. number od even ${even}`;
};
console.log(oddsAndEvens(100));

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
