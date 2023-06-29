// // Exercise: Level-1

// // Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
// const fantastic = document.querySelector("p");
// console.log(fantastic);

// // Get each of the the paragraph using document.querySelector('#id') and by their id
// const fantasy = document.querySelector("#fantastic");
// console.log(fantasy);

// // Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
// const node = document.querySelectorAll("p");
// console.log(node);

// // Loop through the nodeList and get the text content of each paragraph
// const loop = document.querySelectorAll("p");
// loop.forEach((item) => {
//   console.log(item.textContent);
// });

// // Set a text content to paragraph the fourth paragraph,Fourth Paragraph
// const text = (loop[3].textContent = "Fourth paragraph");
// console.log(text);

// // Set id and class attribute for all the paragraphs using different attribute setting methods
// loop[1].setAttribute("class", "first");
// loop[2].classList.add("id", "second");

// // Exercise: Level-2

// // Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// // node[1].style.backgroundColor = "#a23f4d";

// // Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

// const paragraph = document.querySelectorAll("p");
// paragraph.forEach((para, i) => {
//   if (i % 2 === 0) {
//     para.style.color = "green";
//   } else {
//     para.style.color = "red";
//   }
// });

// Exercise: Level 3

// DOM: Mini project 1
/* 
Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only. 

The year color is changing every 1 second
The date and time background color is changing every on seconds
Completed challenge has background green
Ongoing challenge has background yellow
Coming challenges have background red
*/

const year = document.querySelector(".year");

const changeColor = () => {
  let hexColor = "#";
  const color = "134567890ABCDEF";

  for (let i = 0; i < 6; i++) {
    const randomColor = Math.floor(Math.random() * color.length);
    hexColor += color[randomColor];
  }
  year.style.color = `${hexColor}`;
};
// changeColor();

// setInterval(changeColor, 1000);
