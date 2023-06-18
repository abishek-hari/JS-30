// let js = "30 days of JavaScript";
// let jsx = js[js.length - 1];

// console.log(js.length);
// console.log(jsx);
// console.log(js.toUpperCase());
// console.log(js.toLowerCase());
// console.log(js.substr(2, 5));
// console.log(js.substring(4, 10));
// console.log(js.split(""));
// console.log(js.trim());
// console.log(js.includes("days"));
// console.log(js.replace("JavaScript", "golang"));
// console.log(js.charAt(5));
// console.log(js.charCodeAt(5));
// console.log(js.indexOf("f"));
// console.log(js.lastIndexOf("pt"));
// console.log(js.concat(" and you can finish"));
// console.log(js.startsWith("30"));
// console.log(js.endsWith("JavaScript"));
// console.log(js.search("of"));
// console.log(js.match("days"));
// console.log(js.repeat(3));

// // RegularExpression
// let txt =
//   "In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge";
// let regEx = /\d+/g;
// console.log(txt.match(regEx));

// ====================================================== //

// EXERCISE : LEVEL-1

let jsm = "30 days of javaScript";
console.log(jsm);
console.log(jsm.length);
console.log(jsm.toUpperCase());
console.log(jsm.toLowerCase());
console.log(jsm.substring(0, 2));
console.log(jsm.substring(3, 21));
console.log(jsm.includes("Script"));
console.log(jsm.split());
console.log(jsm.split(""));

let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(company.split(","));
console.log(jsm.replace("javaScript", "python"));
console.log(jsm.charAt(15));
console.log(jsm.charCodeAt("j"));
console.log(jsm.indexOf("a"));
console.log(jsm.lastIndexOf("a"));

let because =
  "You cannot end a sentence with because because because is a conjunction";
console.log(because.lastIndexOf("because"));
console.log(because.search("because"));
console.log(jsm.startsWith("30 days of javaScript"));
console.log(jsm.endsWith("30 days of javaScript"));

let text = /a/gi;
console.log(jsm.match(text));

console.log(jsm.repeat(2));

// EXERCISE : LEVEL-2

let love =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(love);

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num = "10";
let nums = parseInt(num);
console.log(nums);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let number = parseFloat("9.8");
let numbers = Math.ceil(number);
console.log(numbers);

// 5. Check if 'on' is found in both python and jargon

let jargo = "python and jargon";
console.log(jargo.includes("on"));

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.

let jargon = "I hope this course is not full of jargon.";
console.log(jargon.includes("jargon"));

// 7. Generate a random number between 0 and 100 inclusively.

let randomNum = Math.floor(Math.random() * 10);
console.log(randomNum);

// 8. Generate a random number between 50 and 100 inclusively.

let random = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(random);

// EXPLANATION
/* 
(100 - 50) subtracts the lower bound (50) from the upper bound (100). This calculates the range size between the two numbers.

Result: 50
50 + 1 adds 1 to the range size. This is done because when generating a random number within a range, we want the upper bound to be inclusive.

Result: 51
Finally, (51) + 50 adds the lower bound (50) to the adjusted range size. This ensures that the final random number falls within the desired range.

Result: 101
*/

// 9. Generate a random number between 0 and 255 inclusively.
let randomNumber = Math.floor(Math.random() * 255);
console.log(randomNumber);

// 10.  Access the 'JavaScript' string characters using a random number.

let string = "javascript";
let randomIndex = Math.floor(Math.random() * string.length);
let randomCharacter = string.charAt(randomIndex);
console.log(randomCharacter);

// 11. Use console.log() and escape characters to print the following pattern.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/

console.log("1\t1\t1\t1\t\n2\t1\t2\t4\n");

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

let because_1 =
  "You cannot end a sentence with because because because is a conjunction";

console.log(because_1.substr(30, 25));

// EXERCISE : LEVEL-3

// 1. Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let life =
  "Love is the best thing in this world. Some found their love and some are still looking for their love";
let lifePart = /love/gi;
console.log(life.match(lifePart));

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentences =
  "You cannot end a sentence with because because because is a conjunction";

let sent = /because/gi;
console.log(sentences.match(sent));

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
