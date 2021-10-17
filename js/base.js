"use strict";

/*
    C = castle
    H = hall
    W = wheat
    W+ = wheat plus
    B+ = barracks plus
    B = barracks
    P = port
    S = station
    M = moai
    T = tree
    A = attack
*/

// 🏰🏛️⚔️🌾🚂⛵🗿🌳☠️🏹🐎🧙‍♂️🐉🛡️⭐🔄🗡️💫⚰️👊🏼❗➕
// ["🧙🏻", "🧙🏽", "🧙🏽‍♂️", "🧙🏾", "🧙🏿‍♂️", "🧙🏻‍♀️", "🧙🏽‍♀️", "🧙🏿‍♀️", "🧙🏾‍♀️", "🧙🏿‍♀️"]

const numbers = {
    "CASTLE": 40,
    "HALL": 40,
    "BARRACKS1": 30,
    "BARRACKS2": 30,
    "BARRACKS3": 20,
    "BARRACKS4": 20,
    "WHEAT1": 30,
    "WHEAT2": 30,
    "WHEAT3": 20,
    "WHEAT4": 20,
    "STATION": 20,
    "PORT": 20,
    "MOAI": 20,
    "TREE": 20,
    "CEMETERY": 6
};

const FIRST_DECK_DIM = 30;

const cards = [
    "W", "W", "W", "B", "B", "B", "W B", "W B", "W B", "W+ B", "W B+",
    "C", "C", "W C", "W C", "W+ C", "B C", "B C", "B+ C", "W B C",
    "W S", "B S", "W+ B S",
    "W P", "B P", "W B+ P",
    "W A", "B A", "W B A",
    "T",
    "W B", "W+ B", "W B+", "W+ B+",
    "C", "W+ C", "B+ C", "B+ C", "W B C H", "W C A", "B C A",
    "W B S", "B B+ S C", "W S A",
    "W B P", "W W+ P H", "B P A",
    "W+ B H", "W B+ H", "W+ B+ H A", "W+ B+ H A",
    "W A", "W+ A", "B A", "A", "W+ B+ A", "W+ B+ A",
    "W+ B+ M", "W+ B+ M",
    "T"
];

const icons = {
    castle: "🏰",
    hall: "🏛️",
    barracks: "⚔️",
    wheat: "🌾",
    station: "🚂",
    port: "⛵",
    moai: "🗿",
    tree: "🌳",
    cemetery: "☠️",
    archer: "🏹",
    knight: "🐎",
    wizard: ["🧙🏻", "🧙🏽", "🧙🏽‍♂️", "🧙🏾", "🧙🏿‍♂️", "🧙🏻‍♀️", "🧙🏽‍♀️", "🧙🏿‍♀️", "🧙🏾‍♀️", "🧙🏿‍♀️", "🧙‍♂️"],
    dragon: "🐉",
    defense: "🛡️",
    level: "⭐",
    stationLabel: "🔄",
    portLabel: "🗡️",
    moaiLabel: "💫",
    cemeteryLabel: "⚰️",
    attack: "👊🏼"
};

const stats = {
    castleDefense: 6,
    hallDefense: 3,
    wheatDimensions: [[2], [2, 2], [3, 3], [4, 3, 3]]
};