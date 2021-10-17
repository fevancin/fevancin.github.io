"use strict";

const constants = {
    "C": {
        name: "Castello",
        icon: icons.castle
    },
    "H": {
        name: "Municipio",
        icon: icons.hall
    },
    "B": {
        name: "Caserma",
        icon: icons.barracks
    },
    "B+": {
        name: "Caserma +",
        icon: icons.barracks
    },
    "W": {
        name: "Grano",
        icon: icons.wheat
    },
    "W+": {
        name: "Grano +",
        icon: icons.wheat
    },
    "S": {
        name: "Stazione",
        icon: icons.station
    },
    "P": {
        name: "Porto",
        icon: icons.port
    },
    "M": {
        name: "Moai",
        icon: icons.moai
    },
    "T": {
        name: "Albero",
        icon: icons.tree
    },
    "A": {
        name: "Attacco",
        icon: icons.attack
    }
};

const variables = {
    first: {
        table: document.querySelector(".first .deck"),
        deck: null,
        index: 0,
        buttons: {
            pick: document.querySelector(".first .pick"),
            shuffle: document.querySelector(".first .shuffle")
        },
        outputs: {
            picked: document.querySelector(".first .picked"),
            remaining: document.querySelector(".first .remaining")
        }
    },
    second: {
        table: document.querySelector(".second .deck"),
        deck: null,
        index: 0,
        buttons: {
            pick: document.querySelector(".second .pick"),
            shuffle: document.querySelector(".second .shuffle")
        },
        outputs: {
            picked: document.querySelector(".second .picked"),
            remaining: document.querySelector(".second .remaining")
        }
    }
}

function createThead(table, cards) {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    for (let i = 0; i < cards.length + 3; i++) {
        const th = document.createElement("th");
        if (i > 0 && i < cards.length + 1) {
            th.innerHTML = "" + i;
        } else if (i === cards.length + 1) {
            th.innerHTML = "n°";
        } else if (i === cards.length + 2) {
            th.innerHTML = "%";
        }
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);
}

function createTbody(table, cards) {
    const tbody = document.createElement("tbody");
    for (const type in constants) {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.innerHTML = constants[type].name;
        tr.appendChild(th);
        tbody.appendChild(tr);
        let total = 0;
        for (let i = 0; i < cards.length; i++) {
            const td = document.createElement("td");
            if (cards[i].split(" ").includes(type)) {
                td.innerHTML = constants[type].icon;
                total++;
            }
            tr.appendChild(td);
        }
        const thTotal = document.createElement("th");
        thTotal.innerHTML = "" + total + "/" + cards.length;
        tr.appendChild(thTotal);
        const thPercentage = document.createElement("th");
        thPercentage.innerHTML = "" + (Math.trunc(total / cards.length * 10000) / 100);
        tr.appendChild(thPercentage);
    }
    table.appendChild(tbody);
}

function createTitle(title, cards) {
    const totals = [0, 0, 0, 0];
    cards.forEach((card) => {
        totals[card.split(" ").length - 1]++;
    });
    title.innerHTML = "Mazzo di " + cards.length + " carte (" +
        totals[0] + " singole, " + totals[1] + " doppie, " + totals[2] + " triple, " + totals[3] + " quadruple)";
}

function createTable(table, cards, title) {
    createThead(table, cards);
    createTbody(table, cards);
    createTitle(title, cards);
}

createTable(variables.first.table, cards.slice(0, FIRST_DECK_DIM), document.querySelector(".first .title"));
createTable(variables.second.table, cards.slice(FIRST_DECK_DIM), document.querySelector(".second .title"));

variables.first.buttons.shuffle.addEventListener("click", () => {
    variables.first.deck = cards.slice(0, FIRST_DECK_DIM);
    for (let i = 0; i < variables.first.deck.length; i++) {
        const randomIndex = Math.floor(Math.random() * variables.first.deck.length);
        const temp = variables.first.deck[i];
        variables.first.deck[i] = variables.first.deck[randomIndex];
        variables.first.deck[randomIndex] = temp;
    }
    variables.first.index = 0;
    variables.first.outputs.picked.innerHTML = "Carta corrente:";
    variables.first.outputs.remaining.innerHTML = "" + variables.first.deck.length + " carte rimanenti";
});
variables.first.buttons.shuffle.click();

variables.first.buttons.pick.addEventListener("click", () => {
    if (variables.first.index >= variables.first.deck.length) return;
    let string = "";
    variables.first.deck[variables.first.index].split(" ").forEach((badge) => {
        string += constants[badge].icon;
        string += (badge === "W+" || badge === "B+") ? "+ " : " ";
    });
    variables.first.outputs.picked.innerHTML = "Carta corrente: " + string;
    variables.first.index++;
    variables.first.outputs.remaining.innerHTML = "" + (variables.first.deck.length - variables.first.index) + " carte rimanenti";
});

variables.second.buttons.shuffle.addEventListener("click", () => {
    variables.second.deck = cards.slice(FIRST_DECK_DIM);
    for (let i = 0; i < variables.second.deck.length; i++) {
        const randomIndex = Math.floor(Math.random() * variables.second.deck.length);
        const temp = variables.second.deck[i];
        variables.second.deck[i] = variables.second.deck[randomIndex];
        variables.second.deck[randomIndex] = temp;
    }
    variables.second.index = 0;
    variables.second.outputs.picked.innerHTML = "Carta corrente:";
    variables.second.outputs.remaining.innerHTML = "" + variables.second.deck.length + " carte rimanenti";
});
variables.second.buttons.shuffle.click();

variables.second.buttons.pick.addEventListener("click", () => {
    if (variables.second.index >= variables.second.deck.length) return;
    let string = "";
    variables.second.deck[variables.second.index].split(" ").forEach((badge) => {
        string += constants[badge].icon;
        string += (badge === "W+" || badge === "B+") ? "+ " : " ";
    });
    variables.second.outputs.picked.innerHTML = "Carta corrente: " + string;
    variables.second.index++;
    variables.second.outputs.remaining.innerHTML = "" + (variables.second.deck.length - variables.second.index) + " carte rimanenti";
});