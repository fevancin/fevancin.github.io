"use strict";

const buildings = [];
for (const name in numbers) {
    for (let i = 0; i < numbers[name]; i++) {
        buildings.push("" + name);
    }
}

const constants = {
    "CASTLE": {
        className: "castle",
        icon: icons.castle,
        lowerLabel: null,
        upperLabel: "" + stats.castleDefense + icons.defense,
        upperLabelSize: "two"
    },
    "HALL": {
        className: "hall",
        icon: icons.hall,
        lowerLabel: null,
        upperLabel: "" + stats.hallDefense + icons.defense,
        upperLabelSize: "two"
    },
    "BARRACKS1": {
        className: "barracks",
        icon: icons.barracks,
        lowerLabel: icons.archer,
        upperLabel: icons.level,
        upperLabelSize: "one"
    },
    "BARRACKS2": {
        className: "barracks",
        icon: icons.barracks,
        lowerLabel: icons.knight,
        upperLabel: icons.level + icons.level,
        upperLabelSize: "two"
    },
    "BARRACKS3": {
        className: "barracks",
        icon: icons.barracks,
        lowerLabel: icons.wizard[icons.wizard.length - 1],
        upperLabel: icons.level + icons.level + icons.level,
        upperLabelSize: "three"
    },
    "BARRACKS4": {
        className: "barracks",
        icon: icons.barracks,
        lowerLabel: icons.dragon,
        upperLabel: icons.level + icons.level + icons.level + icons.level,
        upperLabelSize: "four"
    },
    "WHEAT1": {
        className: "wheat",
        icon: null,
        lowerLabel: null,
        upperLabel: icons.level,
        upperLabelSize: "one"
    },
    "WHEAT2": {
        className: "wheat",
        icon: null,
        lowerLabel: null,
        upperLabel: icons.level + icons.level,
        upperLabelSize: "two"
    },
    "WHEAT3": {
        className: "wheat",
        icon: null,
        lowerLabel: null,
        upperLabel: icons.level + icons.level + icons.level,
        upperLabelSize: "three"
    },
    "WHEAT4": {
        className: "wheat",
        icon: null,
        lowerLabel: null,
        upperLabel: icons.level + icons.level + icons.level + icons.level,
        upperLabelSize: "four"
    },
    "STATION": {
        className: "station",
        icon: icons.station,
        lowerLabel: null,
        upperLabel: icons.stationLabel,
        upperLabelSize: "one"
    },
    "PORT": {
        className: "port",
        icon: icons.port,
        lowerLabel: null,
        upperLabel: icons.portLabel,
        upperLabelSize: "one"
    },
    "MOAI": {
        className: "moai",
        icon: icons.moai,
        lowerLabel: null,
        upperLabel: icons.moaiLabel,
        upperLabelSize: "one"
    },
    "TREE": {
        className: "tree",
        icon: icons.tree,
        lowerLabel: null,
        upperLabel: null,
        upperLabelSize: "one"
    },
    "CEMETERY": {
        className: "cemetery",
        icon: icons.cemetery,
        lowerLabel: null,
        upperLabel: icons.cemeteryLabel,
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

    if (buildingCode === "WHEAT1" || buildingCode === "WHEAT2" || buildingCode === "WHEAT3" || buildingCode === "WHEAT4") {
        const tableElement = document.createElement("table");
        if (buildingCode === "WHEAT4") tableElement.classList.add("four");
        const tbodyElement = document.createElement("tbody");
        const dimensions = stats.wheatDimensions[+buildingCode[5] - 1];
        for (let j = 0; j < dimensions.length; j++) {
            const trElement = document.createElement("tr");
            for (let i = 0; i < dimensions[j]; i++) {
                const tdElelement = document.createElement("td");
                tdElelement.innerHTML = icons.wheat;
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