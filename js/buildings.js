"use strict";

const numbers = {
    "CASTLE": 40,
    "HALL": 40,
    "WHEAT1": 40,
    "WHEAT2": 40,
    "WHEAT3": 30,
    "WHEAT4": 30,
    "BARRACKS1": 40,
    "BARRACKS2": 40,
    "BARRACKS3": 30,
    "BARRACKS4": 30,
    "PORT": 40,
    "STATION": 40,
    "MOAI": 30,
    "TREE": 30
};

const buildings = [];
for (const name in numbers) {
    for (let i = 0; i < numbers[name]; i++) {
        buildings.push("" + name);
    }
}

const constants = {
    "CASTLE": {
        className: "castle",
        icon: "🏰",
        lowerLabel: null,
        upperLabel: "11🛡️",
        upperLabelSize: "two"
    },
    "HALL": {
        className: "hall",
        icon: "🏛️",
        lowerLabel: null,
        upperLabel: "5🛡️",
        upperLabelSize: "two"
    },
    "WHEAT1": {
        className: "wheat",
        icon: null,
        lowerLabel: null,
        upperLabel: "⭐",
        upperLabelSize: "one"
    },
    "WHEAT2": {
        className: "wheat",
        icon: null,
        lowerLabel: null,
        upperLabel: "⭐⭐",
        upperLabelSize: "two"
    },
    "WHEAT3": {
        className: "wheat",
        icon: null,
        lowerLabel: null,
        upperLabel: "⭐⭐⭐",
        upperLabelSize: "three"
    },
    "WHEAT4": {
        className: "wheat",
        icon: null,
        lowerLabel: null,
        upperLabel: "⭐⭐⭐⭐",
        upperLabelSize: "four"
    },
    "BARRACKS1": {
        className: "barracks",
        icon: "⚔️",
        lowerLabel: "🏹",
        upperLabel: "⭐",
        upperLabelSize: "one"
    },
    "BARRACKS2": {
        className: "barracks",
        icon: "⚔️",
        lowerLabel: "🐎",
        upperLabel: "⭐⭐",
        upperLabelSize: "two"
    },
    "BARRACKS3": {
        className: "barracks",
        icon: "⚔️",
        lowerLabel: "🧙",
        upperLabel: "⭐⭐⭐",
        upperLabelSize: "three"
    },
    "BARRACKS4": {
        className: "barracks",
        icon: "⚔️",
        lowerLabel: "🐉",
        upperLabel: "⭐⭐⭐⭐",
        upperLabelSize: "four"
    },
    "PORT": {
        className: "port",
        icon: "🚢",
        lowerLabel: null,
        upperLabel: "🗡️",
        upperLabelSize: "one"
    },
    "STATION": {
        className: "station",
        icon: "🚂",
        lowerLabel: null,
        upperLabel: "🔄",
        upperLabelSize: "one"
    },
    "MOAI": {
        className: "moai",
        icon: "🗿",
        lowerLabel: null,
        upperLabel: "⛔",
        upperLabelSize: "one"
    },
    "TREE": {
        className: "tree",
        icon: "🌳",
        lowerLabel: null,
        upperLabel: null,
        upperLabelSize: "one"
    }
};

const bodyElement = document.querySelector("body");
let pageElement = null;

buildings.forEach((buildingCode, index) => {

    if (index % 20 === 0) {
        pageElement = document.createElement("div");
        pageElement.classList.add("page");
        bodyElement.appendChild(pageElement);
    }

    const info = constants[buildingCode];

    const buildingElement = document.createElement("div");
    buildingElement.classList.add(info.className);
    buildingElement.classList.add("building");

    const innerElement = document.createElement("div");
    innerElement.classList.add("inner");
    buildingElement.appendChild(innerElement);

    if (info["icon"] !== null) {
        const iconElement = document.createElement("div");
        iconElement.classList.add("icon");
        iconElement.innerHTML = info.icon;
        innerElement.appendChild(iconElement);
    }

    if (buildingCode === "WHEAT1") {
        const tableElement = document.createElement("table");
        const trElement = document.createElement("tr");
        for (let i = 0; i < 2; i++) {
            const tdElelement = document.createElement("td");
            tdElelement.innerHTML = "🌾";
            trElement.appendChild(tdElelement);
        }
        tableElement.appendChild(trElement);
        innerElement.appendChild(tableElement);
    } else if (buildingCode === "WHEAT2") {
        const tableElement = document.createElement("table");
        for (let j = 0; j < 2; j++) {
            const trElement = document.createElement("tr");
            for (let i = 0; i < 2; i++) {
                const tdElelement = document.createElement("td");
                tdElelement.innerHTML = "🌾";
                trElement.appendChild(tdElelement);
            }
            tableElement.appendChild(trElement);
        }
        innerElement.appendChild(tableElement);
    } else if (buildingCode === "WHEAT3") {
        const tableElement = document.createElement("table");
        for (let j = 0; j < 2; j++) {
            const trElement = document.createElement("tr");
            for (let i = 0; i < 3; i++) {
                const tdElelement = document.createElement("td");
                tdElelement.innerHTML = "🌾";
                trElement.appendChild(tdElelement);
            }
            tableElement.appendChild(trElement);
        }
        innerElement.appendChild(tableElement);
    } else if (buildingCode === "WHEAT4") {
        const tableElement = document.createElement("table");
        tableElement.classList.add("four");
        const tbodyElement = document.createElement("tbody");
        for (let j = 0; j < 3; j++) {
            const trElement = document.createElement("tr");
            for (let i = 0; i < ((j === 0) ? 4 : 3); i++) {
                const tdElelement = document.createElement("td");
                tdElelement.innerHTML = "🌾";
                trElement.appendChild(tdElelement);
            }
            tbodyElement.appendChild(trElement);
        }
        tableElement.appendChild(tbodyElement);
        innerElement.appendChild(tableElement);
    }

    ["upper", "lower"].forEach((position) => {
        if (info[position + "Label"] !== null) {

            const labelElement = document.createElement("div");
            labelElement.classList.add(position);
            labelElement.classList.add("label");

            if (position === "upper") {
                labelElement.classList.add(info.upperLabelSize);
            }

            labelElement.innerHTML = info[position + "Label"];
            innerElement.appendChild(labelElement);
        }
    });
    pageElement.appendChild(buildingElement);
});