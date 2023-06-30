const wrapper = document.querySelector(".wrapper");
console.log(wrapper);

function randomColor() {
  let random = "#";
  const color = "1234567890ABCDEF";

  for (let i = 0; i < 6; i++) {
    const changeColor = Math.floor(Math.random() * color.length);
    random += color[changeColor];
  }
  return random;
}

setInterval(() => {
  const year = document.querySelector(".year");
  year.style.color = randomColor();
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
  timing.style.backgroundColor = randomColor();
};

setInterval(timings, 1000);

const challenge = document.querySelectorAll(".Challenge .rect");
challenge.forEach((item) => {
  if (item.classList.contains("completed")) {
    item.style.backgroundColor = "green";
  } else if (item.classList.contains("ongoing")) {
    item.style.backgroundColor = "yellow";
  } else {
    item.style.backgroundColor = "red";
  }
});
