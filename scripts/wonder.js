console.log("Keep pushing. It's not going to be easy. PRESS ON!");

// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled
// class on the corresponding <section id="flight"> (section, not button) and
// replace it with a class of enabled.

let flight = document.querySelector("#flight");
let power = document.querySelector("#activate-flight");
let flightHandlerFunction = () => {
  flight.classList.remove("disabled");
  flight.classList.add("enabled");
};

power.addEventListener("click", () => {
  flightHandlerFunction();
});
// Once you have that working, write two more JavaScript functions,
// and two more querySelector().addEventListener() statements for
// handling the click event on the other two buttons. Those event
// handlers should perform the same step of removing disabled, and
// adding enabled on the corresponding <section> elements

let mindReading = document.querySelector("#mindreading");
let mindPower = document.querySelector("#activate-mindreading");
let mindPowerFunction = () => {
  mindReading.classList.remove("disabled");
  mindReading.classList.add("enabled");
};

mindPower.addEventListener("click", () => {
  mindPowerFunction();
});

let xRay = document.querySelector("#xray");
let xRayPower = document.querySelector("#activate-xray");
let xRayPowerFunction = () => {
  xRay.classList.remove("disabled");
  xRay.classList.add("enabled");
};

xRayPower.addEventListener("click", () => {
  xRayPowerFunction();
});

// Write two more event handlers for activating and deactivating
// all powers when the corresponding buttons are clicked. You will
// need to use the document.querySelectorAll() method for these.

let powerful = document.querySelectorAll(".power");
let enable = document.querySelector("#enable-powers");
let powerUpFunction = () => {
  for (item of powerful) {
    item.classList.remove("disabled");
    item.classList.add("enabled");
  }
};

enable.addEventListener("click", () => {
  powerUpFunction();
});

let disable = document.querySelector("#disable-powers");
let powerDownFunction = () => {
  for (item of powerful) {
    item.classList.remove("enabled");
    item.classList.add("disabled");
  }
};

disable.addEventListener("click", () => {
  powerDownFunction();
});
