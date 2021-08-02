"use strict";

const numbers = {
    "C": 6,
    "M1": 20,
    "M2": 10,
    "M3": 10,
    "C1": 30,
    "C2": 30,
    "C3": 20,
    "C4": 20,
    "G1": 30,
    "G2": 30,
    "G3": 20,
    "P1": 10,
    "P2": 10
};

const buildings = [];
for (const name in numbers) {
    for (let i = 0; i < numbers[name]; i++) {
        buildings.push("" + name);
    }
}

const constants = {
    "C": {
        className: "castle",
        icon: "🏰",
        lowerText: null,
        upperText: "🛡️🛡️<br>🛡️🛡️🛡️🛡️",
        upperTextSize: "minuscle"
    },
    "M1": {
        className: "hall",
        icon: "🏛️",
        lowerText: "⭐",
        lowerTextSize: "big",
        upperText: "🛡️🛡️🛡️",
        upperTextSize: "medium"
    },
    "M2": {
        className: "hall",
        icon: "🏛️",
        lowerText: "⭐⭐",
        lowerTextSize: "medium",
        upperText: "🛡️<br>🛡️🛡️🛡️",
        upperTextSize: "small"
    },
    "M3": {
        className: "hall",
        icon: "🏛️",
        lowerText: "⭐⭐⭐",
        lowerTextSize: "small",
        upperText: "🛡️🛡️<br>🛡️🛡️🛡️🛡️",
        upperTextSize: "minuscle"
    },
    "C1": {
        className: "barracks",
        icon: "⚔️",
        lowerText: "⭐",
        lowerTextSize: "big",
        upperText: "🏹",
        upperTextSize: "big"
    },
    "C2": {
        className: "barracks",
        icon: "⚔️",
        lowerText: "⭐⭐",
        lowerTextSize: "medium",
        upperText: "🐎",
        upperTextSize: "big"
    },
    "C3": {
        className: "barracks",
        icon: "⚔️",
        lowerText: "⭐⭐⭐",
        lowerTextSize: "small",
        upperText: "💣",
        upperTextSize: "big"
    },
    "C4": {
        className: "barracks",
        icon: "⚔️",
        lowerText: "⭐⭐⭐⭐",
        lowerTextSize: "minuscle",
        upperText: "🐉",
        upperTextSize: "big"
    },
    "G1": {
        className: "wheat",
        icon: "<table><tr><td>🌽</td><td>🌽</td></tr></table>",
        lowerText: "⭐",
        lowerTextSize: "big",
        upperText: "🌾",
        upperTextSize: "big"
    },
    "G2": {
        className: "wheat",
        icon: "<table><tr><td>🌽</td><td>🌽</td></tr>" +
            "<tr><td>🌽</td><td>🌽</td></tr></table>",
        lowerText: "⭐⭐",
        lowerTextSize: "medium",
        upperText: "🌾",
        upperTextSize: "big"
    },
    "G3": {
        className: "wheat",
        icon: "<table><tr><td>🌽</td><td>🌽</td><td>🌽</td>" +
            "</tr><tr><td>🌽</td><td>🌽</td><td>🌽</td></tr></table>",
        lowerText: "⭐⭐⭐",
        lowerTextSize: "small",
        upperText: "🌾",
        upperTextSize: "big"
    },
    "P1": {
        className: "harbor",
        icon: "🚢",
        lowerText: "⭐",
        lowerTextSize: "big",
        upperText: "🔄🗡️",
        upperTextSize: "big"
    },
    "P2": {
        className: "harbor",
        icon: "🚢",
        lowerText: "⭐⭐",
        lowerTextSize: "medium",
        upperText: "🔄🗡️💥",
        upperTextSize: "minuscle"
    },
    "P3": {
        className: "harbor",
        icon: "🚢",
        lowerText: "⭐⭐⭐",
        lowerTextSize: "small",
        upperText: "🔄🗡️",
        upperTextSize: "big"
    }
};

const body = document.querySelector("body");

let i = 0;
let containerElement = null;

buildings.forEach((buildingCode) => {

    if (i % 21 === 0) {
        if (containerElement != null) {
            body.appendChild(containerElement);
        }
        containerElement = document.createElement("div");
        containerElement.classList.add("container");
    }
    i++;

    const info = constants[buildingCode];

    const buildingElement = document.createElement("div");
    buildingElement.classList.add(info.className);
    buildingElement.classList.add("building");

    const borderElement = document.createElement("div");
    borderElement.classList.add("border");
    buildingElement.appendChild(borderElement);

    const iconElement = document.createElement("div");
    iconElement.classList.add("icon");
    iconElement.innerHTML = info.icon;
    buildingElement.appendChild(iconElement);
    
    if (buildingCode === "M1") {
        iconElement.classList.add("one");
    }
    if (buildingCode === "M2") {
        iconElement.classList.add("two");
    }
    if (buildingCode === "M3") {
        iconElement.classList.add("three");
    }

    ["upper", "lower"].forEach((position) => {
        if (info[position + "Text"] !== null) {

            if (position === "upper") {
                const stripeElement = document.createElement("div");
                stripeElement.classList.add(position);
                stripeElement.classList.add("stripe");
                buildingElement.appendChild(stripeElement);
            }

            const textElement = document.createElement("div");
            textElement.classList.add(info[position + "TextSize"]);
            textElement.classList.add(position);
            textElement.classList.add("text");
            textElement.innerHTML = info[position + "Text"];
            buildingElement.appendChild(textElement);
        }
    });
    containerElement.appendChild(buildingElement);
});

if (i % 21 !== 0 && containerElement != null) {
    body.appendChild(containerElement);
}