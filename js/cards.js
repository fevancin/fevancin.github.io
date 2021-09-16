"use strict";

const bodyElement = document.querySelector("body");
let pageElement = null;

cards.forEach((card, index) => {
    if (index % 9 === 0) {
        pageElement = document.createElement("div");
        pageElement.classList.add("page");
        bodyElement.appendChild(pageElement);
    }
    const cardElement = document.createElement("div");
    let badges = card.split(" ");
    if (index >= FIRST_DECK_DIM) {
        cardElement.classList.add("advanced");
    }
    switch (badges.length) {
        case 1: cardElement.classList.add("single"); break;
        case 2: cardElement.classList.add("double"); break;
        case 3: cardElement.classList.add("triple"); break;
        case 4: cardElement.classList.add("quadruple");
    }
    cardElement.classList.add("card");
    badges.forEach((badge) => {
        const badgeElement = document.createElement("div");
        switch (badge) {
            case "C":
                badgeElement.classList.add("castle");
                badgeElement.innerHTML = "🏰";
                break;
            case "H":
                badgeElement.classList.add("hall");
                badgeElement.innerHTML = "🏛️";
                break;
            case "W":
                badgeElement.classList.add("wheat");
                badgeElement.innerHTML = "🌾";
                break;
            case "W+":
                badgeElement.classList.add("wheat");
                badgeElement.classList.add("plus");
                badgeElement.innerHTML = "🌾";
                break;
            case "B":
                badgeElement.classList.add("barracks");
                badgeElement.innerHTML = "⚔️";
                break;
            case "B+":
                badgeElement.classList.add("barracks");
                badgeElement.classList.add("plus");
                badgeElement.innerHTML = "⚔️";
                break;
            case "P":
                badgeElement.classList.add("port");
                badgeElement.innerHTML = "🚢";
                break;
            case "S":
                badgeElement.classList.add("station");
                badgeElement.innerHTML = "🚂";
                break;
            case "M":
                badgeElement.classList.add("moai");
                badgeElement.innerHTML = "🗿";
                break;
            case "T":
                badgeElement.classList.add("tree");
                badgeElement.innerHTML = "🌳";
                break;
            case "A":
                badgeElement.classList.add("attack");
                badgeElement.innerHTML = "👊🏼";
        }
        badgeElement.classList.add("badge");
        cardElement.appendChild(badgeElement);
    });
    pageElement.appendChild(cardElement);
});