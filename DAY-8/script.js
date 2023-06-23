// EXERCISE LEVEL-1

// Create an empty object called dog
const dog = {};

// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "herley";
dog.legs = 2;
dog.color = "black";
dog.age = 23;
dog.bark = function () {
  return "woof woof";
};
// Get name, legs, color, age and bark value from the dog object
console.log(dog.name, dog.color, dog.age, dog.bark());

// Set new properties the dog object: breed, getDogInfo
dog.breed = "US";
dog.getDogInfo = true;

// EXERCISE LEVEL-2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.

let maxSkills = 0;
let personWithMaxSkills = "";

for (const person in users) {
  const skillsCount = users[person].skills.length;
  if (skillsCount > maxSkills) {
    maxSkills = skillsCount;
    personWithMaxSkills = person;
  }
}

console.log(personWithMaxSkills);

// Count logged in users, count users having greater than equal to 50 points from the following object.
let userLogIn = 0;
let highPoints = 0;

for (const user in users) {
  if (users[user].isLoggedIn) {
    userLogIn++;
  }
  if (users[user].points >= 50) {
    highPoints++;
  }
}

console.log(userLogIn, highPoints);

// Find people who are MERN stack developer from the users object

const mernStackSkills = ["MongoDB", "Express", "React", "Node"];
const mernStackDevelopers = [];

for (let person in users) {
  const skills = users[person].skills;
  let isMernStackDeveloper = true;

  for (let skill of mernStackSkills) {
    if (!skills.includes(skill)) {
      isMernStackDeveloper = false;
      break;
    }
  }

  if (isMernStackDeveloper) {
    mernStackDevelopers.push(person);
  }
}

console.log("MERN stack developers:", mernStackDevelopers);

// Set your name in the users object without modifying the original users object

const copyUser = Object.assign({}, users);
copyUser.abi = {
  email: "abi@abi.com",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
  age: 21,
  isLoggedIn: true,
  points: 50,
};
console.log(copyUser);

// Get all keys or properties of users object
const getUserKeys = Object.keys(copyUser);
console.log(getUserKeys);

// Get all the values of users object
const getUserValues = Object.values(copyUser);
console.log(getUserValues);

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
  name: "India",
  capital: "delhi",
  population: "billions",
  languages: ["tamil", "malayalam", "kannada"],
};
console.log(countries);

// EXERCISE LEVEL-3

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "joe",
  lastNmae: "biden",
  incomes: [],
  expense: [],
  totalIncome() {
    let total = 0;
    for (const income of personAccount.incomes) {
      total += income.amount;
    }
    return total;
  },
  totalExpense() {
    let total = 0;
    for (const expense of personAccount.expense) {
      total += expense.amount;
    }
    return total;
  },
  accountInfo() {
    return `Account Information:
    First Name: ${personAccount.firstName}
    Last Name: ${personAccount.lastName}
    Total Income: $${personAccount.totalIncome()}
    Total Expense: $${personAccount.totalExpense()}
    Account Balance: $${personAccount.accountBalance()}
    `;
  },
  addIncome(description, amount) {
    personAccount.incomes.push({ description, amount });
  },
  addExpense(description, amount) {
    personAccount.expense.push({ description, amount });
  },
  accountBalance() {
    const income = personAccount.totalIncome();
    const expense = personAccount.totalExpense();
    return income - expense;
  },
};

personAccount.addIncome("Salary", 3000);
personAccount.addIncome("Freelance Work", 500);
personAccount.addExpense("Rent", 1000);
personAccount.addExpense("Groceries", 200);

console.log(personAccount.accountInfo());
