const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const wrapper = document.querySelector(".boxes");

btn.addEventListener("click", () => {
  let value = input.value;

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i <= value; i++) {
    let box = document.createElement("div");
    box.className = "box";
    box.textContent = i;
    wrapper.appendChild(box);

    if (i % 2 === 0) {
      box.style.backgroundColor = "green";
    } else {
      box.style.backgroundColor = "red";
    }

    if (isPrime(i)) {
      box.style.backgroundColor = "yellow";
    }
  }
});
