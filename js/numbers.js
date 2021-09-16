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

const FIRST_DECK_DIM = 30;

const cards = [
    "W", "W", "W", "B", "B", "B", "W B", "W B", "W B", "W B",
    "C", "C", "W C", "W C", "W+ C", "B C", "B C", "B+ C", "W B C", "W+ B+ C",
    "W S", "W S", "B S", "B S", "W+ B S", "W B+ S",
    "W A", "B A", "W B A",
    "T",
    "W B P", "W P H", "B P A",
    "W B S", "B S C", "W S A",
    "W+ B H", "W B+ H", "W+ B+ H A", "W+ B+ H A",
    "W+ C", "W+ C", "B+ C", "B+ C", "W B C H", "W C A", "B C A",
    "W A", "W+ A", "B A", "B+ A", "W+ B+ A", "W+ B+ A",
    "W B", "W+ B", "W B+", "W+ B+",
    "W+ B+ M", "W+ B+ M",
    "T"
];