"use strict";

const units = {
    archers: {
        className: "archer",
        symbol: "🏹",
        count: 100,
        value: 1
    },
    knights: {
        className: "knight",
        symbol: "🐎",
        count: 40,
        value: 3
    },
    catapults: {
        className: "catapult",
        symbol: "💣",
        count: 40,
        value: 5
    },
    dragons: {
        className: "dragon",
        symbol: "🐉",
        count: 30,
        value: 8
    },
    castles: {
        className: "castle",
        symbol: "🏰",
        count: 6,
        value: "🗺️"
    },
    halls: {
        className: "archer",
        symbol: "🏛️",
        count: 27,
        value: "🗺️"
    }
};

const body = document.querySelector("body");

for (let unitName in units) {
    ["symbol", "value"].forEach((propertyName) => {

        const containerElement = document.createElement("div");
        containerElement.classList.add("container");

        for (let i = 0; i < units[unitName].count; i++) {
            const unitElement = document.createElement("div");
            unitElement.classList.add(units[unitName].className);
            unitElement.classList.add("unit");
            unitElement.innerHTML = units[unitName][propertyName];
            containerElement.appendChild(unitElement);
        }

        body.appendChild(containerElement);
    });
}