"use strict";
// Q5 – Hoisting Lab: The Sequence Trap
// Original behavior:
// console.log(score); // undefined: var is hoisted and initialized to undefined
// announce();          // function declaration is hoisted and callable
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }
// startGame() prints "ready" here because status has already been initialized.
// Calling it before the let initialization would hit the temporal dead zone.

const score = 50;
const status = "ready";
function announce() { console.log("Game started"); }
function startGame() { console.log(status); }
console.log(score);
announce();
startGame();

// Arrow functions assigned to const cannot be called before their initialization.
const announceArrow = () => console.log("Arrow game started");
announceArrow();
