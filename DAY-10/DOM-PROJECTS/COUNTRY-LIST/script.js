import country from "./data.js";

const wrapper = document.querySelector(".wrapper");

for (const countries of country) {
  let place = document.createElement("div");
  place.className = "box";
  place.textContent = countries;
  wrapper.appendChild(place);
}
