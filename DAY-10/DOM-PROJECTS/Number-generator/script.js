// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red

const wrapper = document.querySelector(".wrapper");

// ISPRIME

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // If num is divisible by any number from 2 to its square root, it's not prime
      return false;
    }
  }
  // If the loop completes without finding any divisors, the number is prime
  return true;
}

for (let i = 0; i <= 100; i++) {
  let number = document.createElement("div");
  number.className = "box";

  if (i % 2 === 0) {
    number.classList.add("even");
  } else {
    number.classList.add("odd");
  }

  if (isPrime(i)) {
    number.classList.add("prime");
  }

  number.textContent = i;
  wrapper.appendChild(number);
}

// ANOTHER WAY
// let number = "";
// for (let i = 0; i <= 100; i++) {
//   number += `<div class="box">${i}</div>`;
// }
// wrapper.innerHTML = number;
