"use strict";

const buildings = [
    "C", "M1", "M2", "M3", "C1", "C2", "C3", "C4", "P1", "P2", "P3", "G1", "G2", "G3"
];

const constants = {
    "C": {
        className: "castle",
        icon: "🏰",
        lowerText: null,
        upperText: "🛡️🛡️🛡️🛡️",
        upperTextSize: "minuscle"
    },
    "M1": {
        className: "hall",
        icon: "🏛️",
        lowerText: "⭐",
        lowerTextSize: "big",
        upperText: "🛡️🛡️",
        upperTextSize: "medium"
    },
    "M2": {
        className: "hall",
        icon: "🏛️",
        lowerText: "⭐⭐",
        lowerTextSize: "medium",
        upperText: "🛡️🛡️🛡️🛡️",
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
        upperText: "?",
        upperTextSize: "big"
    },
    "P2": {
        className: "harbor",
        icon: "🚢",
        lowerText: "⭐⭐",
        lowerTextSize: "medium",
        upperText: "?",
        upperTextSize: "big"
    },
    "P3": {
        className: "harbor",
        icon: "🚢",
        lowerText: "⭐⭐⭐",
        lowerTextSize: "small",
        upperText: "?",
        upperTextSize: "big"
    }
};

const containerElement = document.querySelector(".container");

buildings.forEach((buildingCode) => {

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