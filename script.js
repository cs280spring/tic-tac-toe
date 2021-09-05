// Attach an event listener to the "cells"
let cells = document.querySelectorAll(".cell");
cells.forEach(function (cell) {
  cell.addEventListener("click", game);
});

// Global variables that hold the game state
const numRows = 3;
const numCols = 3;
let numEmptyCells = numRows * numCols;
const board = new Array(numEmptyCells);
const markers = ["x", "o"];
let player = 0;
let gameIsOver = false;

// The main event listener and the controller for the game
function game(event) {
  let cell = event.target;
  console.log(cell.id); 
  // TODO: Implement me!
}

// --- Helper Methods ---

// Return the linear index corresponding to the row and column subscripts
function toLinearIndex(row, col) {
  return row * numRows + col;
}

// TODO: Add more!