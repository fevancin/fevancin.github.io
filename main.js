"use strict";

const constants = {
    archers: 100,
    knights: 50,
    catapults: 40,
    dragons: 30,
    castles: 8,
    halls: 27
};

const body = document.querySelector("body");

let containerElement = document.createElement("div");
containerElement.classList.add("unit-container");
for (let i = 0; i < constants.archers; i++) {
    const unitElement = document.createElement("div");
    unitElement.classList.add("archer");
    unitElement.classList.add("unit");
    unitElement.innerHTML = "🏹";
    containerElement.appendChild(unitElement);
}
body.appendChild(containerElement);
containerElement = document.createElement("div");
containerElement.classList.add("unit-container");
for (let i = 0; i < constants.archers; i++) {
    const unitElement = document.createElement("div");
    unitElement.classList.add("archer");
    unitElement.classList.add("unit");
    unitElement.innerHTML = "1";
    containerElement.appendChild(unitElement);
}
body.appendChild(containerElement);
containerElement = document.createElement("div");
containerElement.classList.add("unit-container");
for (let i = 0; i < constants.knights; i++) {
    const unitElement = document.createElement("div");
    unitElement.classList.add("knight");
    unitElement.classList.add("unit");
    unitElement.innerHTML = "🐎";
    containerElement.appendChild(unitElement);
}
body.appendChild(containerElement);
containerElement = document.createElement("div");
containerElement.classList.add("unit-container");
for (let i = 0; i < constants.knights; i++) {
    const unitElement = document.createElement("div");
    unitElement.classList.add("knight");
    unitElement.classList.add("unit");
    unitElement.innerHTML = "3";
    containerElement.appendChild(unitElement);
}
body.appendChild(containerElement);
containerElement = document.createElement("div");
containerElement.classList.add("unit-container");
for (let i = 0; i < constants.catapults; i++) {
    const unitElement = document.createElement("div");
    unitElement.classList.add("catapult");
    unitElement.classList.add("unit");
    unitElement.innerHTML = "💣";
    containerElement.appendChild(unitElement);
}
body.appendChild(containerElement);
containerElement = document.createElement("div");
containerElement.classList.add("unit-container");
for (let i = 0; i < constants.catapults; i++) {
    const unitElement = document.createElement("div");
    unitElement.classList.add("catapult");
    unitElement.classList.add("unit");
    unitElement.innerHTML = "5";
    containerElement.appendChild(unitElement);
}
body.appendChild(containerElement);
containerElement = document.createElement("div");
containerElement.classList.add("unit-container");
for (let i = 0; i < constants.dragons; i++) {
    const unitElement = document.createElement("div");
    unitElement.classList.add("dragon");
    unitElement.classList.add("unit");
    unitElement.innerHTML = "🐉";
    containerElement.appendChild(unitElement);
}
body.appendChild(containerElement);
containerElement = document.createElement("div");
containerElement.classList.add("unit-container");
for (let i = 0; i < constants.dragons; i++) {
    const unitElement = document.createElement("div");
    unitElement.classList.add("dragon");
    unitElement.classList.add("unit");
    unitElement.innerHTML = "8";
    containerElement.appendChild(unitElement);
}
body.appendChild(containerElement);
containerElement = document.createElement("div");
containerElement.classList.add("unit-container");
for (let i = 0; i < constants.castles; i++) {
    const unitElement = document.createElement("div");
    unitElement.classList.add("castle");
    unitElement.classList.add("unit");
    unitElement.innerHTML = "🏰";
    containerElement.appendChild(unitElement);
}
for (let i = 0; i < constants.halls; i++) {
    const unitElement = document.createElement("div");
    unitElement.classList.add("hall");
    unitElement.classList.add("unit");
    unitElement.innerHTML = "🏛️";
    containerElement.appendChild(unitElement);
}
for (let i = 0; i < constants.castles; i++) {
    const unitElement = document.createElement("div");
    unitElement.classList.add("castle");
    unitElement.classList.add("unit");
    unitElement.innerHTML = "🗺️";
    containerElement.appendChild(unitElement);
}
for (let i = 0; i < constants.halls; i++) {
    const unitElement = document.createElement("div");
    unitElement.classList.add("hall");
    unitElement.classList.add("unit");
    unitElement.innerHTML = "🗺️";
    containerElement.appendChild(unitElement);
}
body.appendChild(containerElement);