"use strict";

const elements = {
    "fire":              {label: "Fuoco", group: "basics"},
    "earth":             {label: "Terra", group: "basics"},
    "water":             {label: "Acqua", group: "basics"},
    "air":               {label: "Aria", group: "basics"},
    "ether":             {label: "Etere", group: "basics"},
    "potassium":         {label: "Potassio", group: "explosives"},
    "saltpeter":         {label: "Salnitro", group: "explosives"},
    "gunpowder":         {label: "Polvere da Sparo", group: "explosives"},
    "lime":              {label: "Calce", group: "earthy"},
    "hydrated-lime":     {label: "Calce Idrata", group: "earthy"},
    "quicklime":         {label: "Calce Viva", group: "earthy"},
    "water-wine":        {label: "Acqua Vite", group: "aqueous"},
    "white-spirit":      {label: "Acqua Ragia", group: "aqueous"},
    "iron":              {label: "Ferro", group: "metallics"},
    "quicksilver":       {label: "Argento Vivo", group: "metallics"},
    "alum":              {label: "Allume", group: "electrics"},
    "copper":            {label: "Rame", group: "electrics"},
    "calcinated-copper": {label: "Rame Calcinato", group: "electrics"},
    "coal":              {label: "Carbone", group: "carbonics"},
    "tar":               {label: "Catrame", group: "carbonics"},
    "lead":              {label: "Piombo", group: "carbonics"},
    "oxygen":            {label: "Ossigeno", group: "athmosferics"},
    "nitrogen":          {label: "Azoto", group: "athmosferics"},
    "phosphorus":        {label: "Fosforo", group: "athmosferics"},
    "sulphur":           {label: "Zolfo", group: "vulcanics"},
    "black-sulphur":     {label: "Zolfo Nero", group: "vulcanics"},
    "alchemic-sulphur":  {label: "Zolfo Alchemico", group: "vulcanics"},
    "helium":            {label: "Elio", group: "noble-gases"},
    "neon":              {label: "Neon", group: "noble-gases"},
    "kripton":           {label: "Kripton", group: "noble-gases"},
    "xenon":             {label: "Xenon", group: "noble-gases"},
    "diamond":           {label: "Diamante", group: "final-compounds"},
    "uranium":           {label: "Uranio", group: "final-compounds"},
    "gold":              {label: "Oro", group: "final-compounds"},
    "white-lead":        {label: "Piombo Bianco", group: "compounds-with-effect"},
    "ammonium-salt":     {label: "Sale di Ammonio", group: "compounds-with-effect"},
    "sulphuric-acid":    {label: "Acido Solforico", group: "compounds-with-effect"}
};
Object.freeze(elements);
for (const element in elements) {
    Object.freeze(element);
}

const groups = {
    "basics":                 {label: "Elementi di Base"},
    "esplosives":            {label: "Esplosivi"},
    "earthy":                {label: "Terrosi"},
    "aqueous":               {label: "Acquosi"},
    "metallics":             {label: "Metallici"},
    "electrics":             {label: "Elettrici"},
    "carbonics":             {label: "Carbonici"},
    "athmosferics":          {label: "Atmosferici"},
    "vulcanics":             {label: "Vulcanici"},
    "noble-gases":           {label: "Gas Nobili"},
    "final-compounds":       {label: "Composti Finali"},
    "compounds-with-effect": {label: "Composti con Effetto"}
};
Object.freeze(groups);
for (const group in groups) {
    Object.freeze(group);
}

const colors = {
    "fire":              [241, 82, 82],
    "earth":             [228, 156, 97],
    "water":             [128, 181, 230],
    "air":               [176, 221, 223],
    "ether":             [211, 136, 221],
    "potassium":         [255, 73, 0],
    "saltpeter":         [255, 73, 0],
    "gunpowder":         [255, 73, 0],
    "lime":              [204, 113, 39],
    "hydrated-lime":     [204, 113, 39],
    "quicklime":         [204, 113, 39],
    "water-wine":        [65, 130, 192],
    "white-spirit":      [65, 130, 192],
    "iron":              [165, 165, 165],
    "quicksilver":       [165, 165, 165],
    "alum":              [189, 135, 84],
    "copper":            [189, 135, 84],
    "calcinated-copper": [189, 135, 84],
    "coal":              [67, 67, 78],
    "tar":               [67, 67, 78],
    "lead":              [67, 67, 78],
    "oxygen":            [187, 215, 228],
    "nitrogen":          [187, 215, 228],
    "phosphorus":        [187, 215, 228],
    "sulphur":           [245, 248, 35],
    "black-sulphur":     [245, 248, 35],
    "alchemic-sulphur":  [245, 248, 35],
    "helium":            [196, 41, 144],
    "neon":              [196, 41, 144],
    "kripton":           [196, 41, 144],
    "xenon":             [196, 41, 144],
    "diamond":           [105, 218, 199],
    "uranium":           [127, 226, 61],
    "gold":              [240, 221, 49],
    "white-lead":        [156, 184, 189],
    "ammonium-salt":     [3, 161, 135],
    "sulphuric-acid":    [182, 194, 78]
}
Object.freeze(colors);
for (const color in colors) {
    Object.freeze(color);
}

const recipes = {
    "potassium":         {fire: 0, earth: 1, water: 1, air: 0, ether: 0},
    "saltpeter":         {fire: 1, earth: 1, water: 1, air: 1, ether: 0},
    "gunpowder":         {fire: 4, earth: 2, water: 1, air: 1, ether: 0},
    "lime":              {fire: 1, earth: 0, water: 1, air: 0, ether: 0},
    "hydrated-lime":     {fire: 1, earth: 0, water: 4, air: 0, ether: 0},
    "quicklime":         {fire: 3, earth: 0, water: 1, air: 1, ether: 0},
    "water-wine":        {fire: 0, earth: 0, water: 3, air: 2, ether: 0},
    "white-spirit":      {fire: 2, earth: 0, water: 2, air: 2, ether: 0},
    "iron":              {fire: 0, earth: 2, water: 0, air: 0, ether: 0},
    "quicksilver":       {fire: 0, earth: 3, water: 0, air: 2, ether: 0},
    "alum":              {fire: 0, earth: 1, water: 0, air: 2, ether: 0},
    "copper":            {fire: 1, earth: 1, water: 0, air: 1, ether: 0},
    "calcinated-copper": {fire: 2, earth: 2, water: 1, air: 1, ether: 0},
    "coal":              {fire: 2, earth: 0, water: 0, air: 0, ether: 0},
    "tar":               {fire: 3, earth: 2, water: 0, air: 0, ether: 0},
    "lead":              {fire: 1, earth: 1, water: 1, air: 0, ether: 0},
    "oxygen":            {fire: 0, earth: 0, water: 0, air: 2, ether: 0},
    "nitrogen":          {fire: 1, earth: 0, water: 0, air: 1, ether: 0},
    "phosphorus":        {fire: 3, earth: 0, water: 0, air: 3, ether: 0},
    "sulphur":           {fire: 1, earth: 1, water: 0, air: 0, ether: 0},
    "black-sulphur":     {fire: 1, earth: 4, water: 0, air: 0, ether: 0},
    "alchemic-sulphur":  {fire: 2, earth: 4, water: 0, air: 1, ether: 0},
    "helium":            {fire: 0, earth: 0, water: 1, air: 5, ether: 0},
    "neon":              {fire: 5, earth: 0, water: 0, air: 1, ether: 0},
    "kripton":           {fire: 1, earth: 5, water: 0, air: 0, ether: 0},
    "xenon":             {fire: 0, earth: 1, water: 5, air: 0, ether: 0},
    "diamond":           {fire: 0, earth: 2, water: 1, air: 4, ether: 1},
    "uranium":           {fire: 1, earth: 1, water: 5, air: 2, ether: 1},
    "gold":              {fire: 3, earth: 3, water: 3, air: 3, ether: 1},
    "white-lead":        {fire: 1, earth: 2, water: 4, air: 0, ether: 0},
    "ammonium-salt":     {fire: 2, earth: 2, water: 2, air: 2, ether: 0},
    "sulphuric-acid":    {fire: 2, earth: 4, water: 2, air: 0, ether: 0}
};
Object.freeze(recipes);
for (const recipe in recipes) {
    Object.freeze(recipe);
}

const periodicTableElements = document.querySelectorAll(".periodic-table .element");
for (const element of periodicTableElements) {
    const elementId = element.id;
    const color = colors[elementId];
    if (typeof color === "undefined") {
        element.style.backgroundColor = "white";
    }
    else {
        element.style.backgroundColor = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
    }
}

function getAbbreviationOfElement(element) {
    switch (element) {
        case "fire": return "F";
        case "earth": return "T";
        case "water": return "W";
        case "air": return "A";
        case "ether": return "E";
        default: return "?";
    }
}

const recipeTable = document.querySelector(".recipe-table");
const globalTotal = {};
for (const name in recipes) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.innerHTML = elements[name].label;
    tdName.classList.add("name");
    tr.appendChild(tdName);

    const tdRecipe = document.createElement("td");
    tdRecipe.classList.add("list");

    const recipeContainer = document.createElement("div");
    recipeContainer.classList.add("recipe-container");
    let totalElements = 0;
    for (const element in recipes[name]) {
        totalElements += recipes[name][element];
        if (typeof globalTotal[element] === "undefined") {
            globalTotal[element] = recipes[name][element];
        } else {
            globalTotal[element] += recipes[name][element];
        }
        for (let i = 0; i < recipes[name][element]; i++) {
            const recipeItem = document.createElement("div");
            recipeItem.innerHTML = getAbbreviationOfElement(element);
            recipeItem.classList.add("recipe-item");
            recipeItem.classList.add(element);
            const color = colors[element];
            if (typeof color === "undefined") {
                recipeItem.style.backgroundColor = "white";
            }
            else {
                recipeItem.style.backgroundColor = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
            }
            recipeContainer.appendChild(recipeItem);
        }
    }
    tdRecipe.appendChild(recipeContainer);

    tr.appendChild(tdRecipe);

    const tdTotal = document.createElement("td");
    tdTotal.innerHTML = "" + totalElements;
    tdTotal.classList.add("total");
    tr.appendChild(tdTotal);

    recipeTable.appendChild(tr);
}

const totalElement = document.querySelector("p.total");
let string = "";
for (const element in globalTotal) {
    string += elements[element].label + ": " + globalTotal[element] + " ";
}
totalElement.innerHTML = string;

const secondSection = document.querySelector("#second-section");
const recipeArray = [];
for (const recipeName in recipes) {
    recipeArray.push({name: recipeName, recipe: recipes[recipeName]});
}
for (const element in globalTotal) {
    const table = document.createElement("table");
    table.classList.add("recipe-table");
    const caption = document.createElement("caption");
    caption.innerHTML = "Ricette ordinate per: " + elements[element].label;
    table.appendChild(caption);
    const trHead = document.createElement("tr");
    const thName = document.createElement("th");
    thName.innerHTML = "Nome";
    trHead.appendChild(thName);
    const thRecipe = document.createElement("th");
    thRecipe.innerHTML = "Ricetta";
    trHead.appendChild(thRecipe);
    table.appendChild(trHead);
    const recipeArrayFiltered = recipeArray.filter((value) => {
        if (typeof value.recipe[element] !== "number") return false;
        if (value.recipe[element] > 0) return true;
        return false;
    }).sort((a, b) => {
        if (a.recipe[element] > b.recipe[element]) return 1;
        if (a.recipe[element] === b.recipe[element]) {
            let totalA = 0;
            for (const name in a.recipe) {
                totalA += a.recipe[name];
            }
            let totalB = 0;
            for (const name in b.recipe) {
                totalB += b.recipe[name];
            }
            if (totalA > totalB) return 1;
        }
        return -1;
    });
    for (const recipe of recipeArrayFiltered) {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.innerHTML = elements[recipe.name].label;
        tdName.classList.add("name");
        tr.appendChild(tdName);

        const tdRecipe = document.createElement("td");
        tdRecipe.classList.add("list");

        const recipeContainer = document.createElement("div");
        recipeContainer.classList.add("recipe-container");
        for (let i = 0; i < recipe.recipe[element]; i++) {//
            const recipeItem = document.createElement("div");
            recipeItem.innerHTML = getAbbreviationOfElement(element);
            recipeItem.classList.add("recipe-item");
            recipeItem.classList.add(element);
            const color = colors[element];
            if (typeof color === "undefined") {
                recipeItem.style.backgroundColor = "white";
            }
            else {
                recipeItem.style.backgroundColor = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
            }
            recipeContainer.appendChild(recipeItem);
        }
        for (const element2 in recipe.recipe) {
            if (element2 === element) continue;
            for (let i = 0; i < recipe.recipe[element2]; i++) {
                const recipeItem = document.createElement("div");
                recipeItem.innerHTML = getAbbreviationOfElement(element2);
                recipeItem.classList.add("recipe-item");
                recipeItem.classList.add(element2);
                const color = colors[element2];
                if (typeof color === "undefined") {
                    recipeItem.style.backgroundColor = "white";
                }
                else {
                    recipeItem.style.backgroundColor = "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";
                }
                recipeContainer.appendChild(recipeItem);
            }
        }
        tdRecipe.appendChild(recipeContainer);

        tr.appendChild(tdRecipe);

        table.appendChild(tr);
    }
    secondSection.appendChild(table);
    const p = document.createElement("p");
    p.innerHTML = "Totale ricette: " + recipeArrayFiltered.length;
    p.classList.add("total");
    secondSection.appendChild(p);
}