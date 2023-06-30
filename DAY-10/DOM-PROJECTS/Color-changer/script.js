// DOM: Mini project 1
/* 
Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only. 

The year color is changing every 1 second
The date and time background color is changing every on seconds
Completed challenge has background green
Ongoing challenge has background yellow
Coming challenges have background red
*/

const changeColor = () => {
  let hexColor = "#";
  const color = "134567890ABCDEF";

  for (let i = 0; i < 6; i++) {
    const randomColor = Math.floor(Math.random() * color.length);
    hexColor += color[randomColor];
  }
  return hexColor;
};

setInterval(() => {
  const year = document.querySelector(".year");
  year.style.color = changeColor();
}, 1000);

const timings = () => {
  const timing = document.querySelector(".timing");

  const now = new Date();
  const years = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const day = String(now.getDay()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  timing.innerHTML = `${day} ${date}/${month}/${years} ${hour}:${minute}:${seconds}`;
  timing.style.backgroundColor = changeColor();
};

setInterval(timings, 1000);

const challenge = document.querySelectorAll(".Challenge li");
challenge.forEach((item) => {
  if (item.classList.contains("completed")) {
    item.style.backgroundColor = "green";
  } else if (item.classList.contains("Ongoing")) {
    item.style.backgroundColor = "yellow";
  } else {
    item.style.backgroundColor = "red";
  }
});
