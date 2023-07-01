const text = document.querySelector(".text");
const number = document.querySelector(".number");

document.body.addEventListener("keypress", (e) => {
  text.textContent = e.key;
  number.textContent = e.keyCode;
});
