console.log("Keep pushing. It's not going to be easy. PRESS ON!");

// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled
// class on the corresponding <section id="flight"> (section, not button) and
// replace it with a class of enabled.

let flight = document.querySelector("#flight");
let power = document.querySelector("#activate-flight");
let flightHandlerFunction = () => {
  flight.classList.toggle("disabled");
  flight.classList.toggle("enabled");
};

power.addEventListener("click", () => {
  flightHandlerFunction();
});
