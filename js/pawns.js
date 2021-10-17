"use strict";

const pawns = {
    archer: {
        number: 92,
        icon: icons.archer,
        attack: 1
    },
    knight: {
        number: 44,
        icon: icons.knight,
        attack: 3
    },
    wizard: {
        number: 35,
        icon: icons.wizard,
        attack: 5
    },
    dragon: {
        number: 33,
        icon: icons.dragon,
        attack: 8
    }
};

const bodyElement = document.querySelector("body");
let pageElement = null;

for (const pawnType in pawns) {
    if (pawnType !== "knight") {
        pageElement = document.createElement("div");
        pageElement.classList.add("page");
    }
    ["icon", "attack"].forEach((propertyName) => {
        for (let i = 0; i < pawns[pawnType].number; i++) {
            const pawnElement = document.createElement("div");
            pawnElement.classList.add(pawnType);
            pawnElement.classList.add("pawn");
            if (pawnType === "wizard" && propertyName === "icon") {
                pawnElement.innerHTML = pawns[pawnType][propertyName][Math.floor(Math.random() * (pawns[pawnType][propertyName].length - 1))];
            } else {
                pawnElement.innerHTML = pawns[pawnType][propertyName];
            }
            pageElement.appendChild(pawnElement);
        }
    });
    if (pawnType !== "archer") {
        bodyElement.appendChild(pageElement);
    }
}