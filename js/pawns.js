"use strict";

const pawns = {
    archer: {
        number: 76,
        icon: "🏹",
        attack: 1
    },
    knight: {
        number: 54,
        icon: "🐎",
        attack: 3
    },
    wizard: {
        number: 36,
        icon: "🧙‍♂️",
        attack: 5
    },
    dragon: {
        number: 27,
        icon: "🐉",
        attack: 8
    }
};

const bodyElement = document.querySelector("body");

for (const pawnType in pawns) {
    const pageElement = document.createElement("div");
    pageElement.classList.add("page");
    ["icon", "attack"].forEach((propertyName) => {
        for (let i = 0; i < pawns[pawnType].number; i++) {
            const pawnElement = document.createElement("div");
            pawnElement.classList.add(pawnType);
            pawnElement.classList.add("pawn");
            pawnElement.innerHTML = pawns[pawnType][propertyName];
            pageElement.appendChild(pawnElement);
        }
    });
    bodyElement.appendChild(pageElement);
}