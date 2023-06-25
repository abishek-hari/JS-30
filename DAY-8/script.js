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

// USER OBJECT

const user = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

function signUp(user) {
  const existingUser = findUserByEmail();
}

function findUserByEmail(email) {
  for (const userId in user) {
    if (user[userId].email === email) {
      return user[userId];
    }
  }
}

// function signUp(user) {
//   // Check if user with the same email already exists
//   const existingUser = findUserByEmail(user.email);
//   if (existingUser) {
//     console.log('User already has an account.');
//     return;
//   }

//   // Generate a unique ID for the new user
//   const id = generateUniqueId();

//   // Add the user to the collection
//   const newUser = { _id: id, ...user };
//   users[id] = newUser;

//   console.log('User signed up successfully:', newUser);
// }

// function signIn(email, password) {
//   // Find the user with the provided email and password
//   const user = findUserByEmail(email);
//   if (user && user.password === password) {
//     user.isLoggedIn = true;
//     console.log('User signed in successfully:', user);
//   } else {
//     console.log('Invalid email or password.');
//   }
// }

// function findUserByEmail(email) {
//   for (let userId in users) {
//     if (users[userId].email === email) {
//       return users[userId];
//     }
//   }
//   return null;
// }

// function generateUniqueId() {
//   const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//   let id = '';
//   for (let i = 0; i < 6; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     id += characters.charAt(randomIndex);
//   }
//   return id;
// }

// // Example usage:
// signUp({
//   username: 'John',
//   email: 'john@example.com',
//   password: 'password123',
//   createdAt: '08/02/2020 10:15 AM',
//   isLoggedIn: false
// });

// signIn('asab@asab.com', '123456');
