"use strict";

const cards = [
    "G",
    "G",
    "G",
    "G",
    "C",
    "C",
    "C",
    "C",
    "M",
    "M",
    "G P",
    "G P",
    "G P",
    "C P",
    "C P",
    "C P",
    "G M",
    "G M",
    "G M",
    "G M",
    "G M",
    "G C+",
    "G C+",
    "G C",
    "G C",
    "P C+",
    "C A",
    "C A",
    "C A",
    "C A",
    "G A",
    "G A",
    "G A",
    "G A",
    "C M",
    "C M",
    "C M",
    "C M",
    "C M",
    "C G+",
    "C G+",
    "P M",
    "P G+",
    "G C M+2",
    "G C+ M+2",
    "G C+ M+2",
    "C G+ M+2",
    "C G+ M+2",
    "C G P+",
    "G P+ M",
    "C G P",
    "G C A",
    "2 C A",
    "2 G A",
    "2 G C+ P+",
    "2 G+ P+",
    "2 G+ C+ A",
    "2 C A P+",
    "2 G A P+",
    "2 C C+ P+",
    "2 G G+ P+",
    "2 C+ P+ M",
    "2 G+ P+ M",
    "2 C C+ A",
    "2 G G+ A",
    "2 C A M",
    "2 G A M",
    "2 P A M",
    "2 G G+ A M+3",
    "2 C C+ A M+3",
    "2 G C+ A M+3",
    "2 C G+ A M+3",
    "2 G M P+ M+2",
    "2 C P P+ M+2"
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
        body.appendChild(cardContainer);
        cardContainer.classList.add("card-container");
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