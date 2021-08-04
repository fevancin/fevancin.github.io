"use strict";

const cards = [
    "G C", "G C+", "G+ C+", "G+ C+", "C+ M", "G+ M", "G+ M", "G+ A", "C+ A",
    "G C C+", "G C C+", "G C G+", "G C G+", "G C G+", "G C M", "C G+ M", "G C+ M", "G+ C+ M", "G+ C+ M",
    "G C P", "G C P", "C C+ P", "G G+ P", "C G+ P+", "G C+ P+", "G+ C+ P+", "G C A", "G C+ A", "C G+ A", "G+ C+ A", "G+ C+ A", "G+ C+ A",

    "2 G C", "2 G C+", "2 C G+", "2 G+ C+", "2 G+ C+", "2 G+ C+", "2 G M",
    "2 C M", "2 G+ M", "2 C+ M", "2 G+ A", "2 C+ A", "2 C+ A", "2 C+ A", "2 P M+2",

    "2 G C C+", "2 G C C+", "2 G C+ A", "2 G C+ A", "2 C G+ A", "2 C G+ A", "2 G+ C+ A", "2 G+ C+ A", "2 G+ C+ M", "2 G+ C+ M", "2 C C+ A", "2 G G+ A", "2 G+ M+2",
    "2 C+ M+2", "2 P M+2", "2 G+ A M+2", "2 C+ A M+2", "2 G C G+", "2 G C G+", "2 G C+ M", "2 G C+ M", "2 C G+ M", "2 C G+ M", "2 G+ C+ M",
    "2 G+ M P", "2 G C P", "2 G C P", "2 G+ C+ P+", "2 G+ C+ P+", "2 G+ P+ A",

    "2 G G+ P M+3", "2 C C+ P+ M+3", "2 G+ P+ A M+3", "2 C+ P A M+3", "2 G+ C+ A M+3", "2 G+ C+ A M+3", "2 G C+ A M+2", "2 C G+ A M+2",
    "2 C+ G+ A M+2", "2 G C+ A M", "2 C G+ A M", "2 G+ C+ A M", "2 G C C+ P+", "2 G C G+ C+", "2 G C G+ C+"
];

const descriptions = {
    "C": "Caserma",
    "G": "Campo di grano",
    "M": "Municipio",
    "P": "Porto",
    "C+": "Migliora Caserma",
    "G+": "Migliora Campo di grano",
    "M+2": "Migliora Municipio al livello 2",
    "M+3": "Migliora Municipio al livello 3",
    "P+": "Migliora Porto",
    "A": "Attacco"
};

const circleClasses = {
    "C": "barracks",
    "G": "wheat",
    "M": "hall",
    "P": "harbor",
    "C+": "barracks",
    "G+": "wheat",
    "M+2": "hall",
    "M+3": "hall",
    "P+": "harbor",
    "A": "attack"
};

const betweenWord = " o <br>";

const body = document.querySelector("body");
let i = 0;
let cardContainer = null;

cards.forEach((card) => {

    if (i % 9 === 0) {
        cardContainer = document.createElement("div");
        cardContainer.classList.add("container");
        body.appendChild(cardContainer);
    }

    const cardElement = document.createElement("div");

    let circles = card.split(" ");
    if (circles[0] === "2") {
        circles.shift();
        cardElement.classList.add("second");
    }

    switch (circles.length) {
        case 1: cardElement.classList.add("single"); break;
        case 2: cardElement.classList.add("double"); break;
        case 3: cardElement.classList.add("triple"); break;
        case 4: cardElement.classList.add("quadruple"); break;
    }

    cardElement.classList.add("card");

    let string = "";
    circles.forEach((circle, index) => {
        const circleElement = document.createElement("div");
        circleElement.classList.add(circleClasses[circle]);
        circleElement.classList.add("circle");
        if (circle.length > 1) circleElement.classList.add("plus");
        cardElement.appendChild(circleElement);

        string += descriptions[circle];
        if (index < circles.length - 1) {
            string += betweenWord;
        }
    });

    const descriptionElement = document.createElement("div");
    descriptionElement.innerHTML = string;
    descriptionElement.classList.add("text");
    cardElement.appendChild(descriptionElement);

    cardContainer.appendChild(cardElement);

    i++;
});