"use strict";

const MAZE_DIM = 9;

const canvas = document.getElementById("drawing-canvas");
if (typeof canvas === "undefined" || canvas === null) {
  console.error("Canvas element not found");
}

const button = document.getElementById("draw-button");
if (typeof button === "undefined" || button === null) {
  console.error("Button element not found");
}

// resize the canvas to the right pixel resolution
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
/* canvas.addEventListener("resize", () => {
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
}); */

// when the button is clicked...
button.addEventListener("click", () => {

  // generating the maze matrix
  const maze = [];
  for (let i = 0; i < MAZE_DIM; i++) {
    const row = [];
    for (let j = 0; j < MAZE_DIM; j++) {
      row.push({
        visited: false,       // true for finished rooms
        parent: null,      // the room we came from in the visit
        neighboursToDo: [] // neighbours with 'visited = false'
      });
    }
    maze.push(row);
  }

  // setting 'neighboursToDo' values
  for (let i = 0; i < MAZE_DIM; i++) {
    for (let j = 0; j < MAZE_DIM; j++) {
      if (i > 0) {
        maze[i][j].neighboursToDo.push(maze[i - 1][j]);
      }
      if (i < MAZE_DIM - 1) {
        maze[i][j].neighboursToDo.push(maze[i + 1][j]);
      }
      if (j > 0) {
        maze[i][j].neighboursToDo.push(maze[i][j - 1]);
      }
      if (j < MAZE_DIM - 1) {
        maze[i][j].neighboursToDo.push(maze[i][j + 1]);
      }
    }
  }

  // starting a depth-first search from room (0, 0)
  let currentRoom = maze[0][0];
  let n = 0;
  while (currentRoom !== null) {
    
    
    if (n > 1000) break;
    n++;
    
    // mark as visited the current room and remove it from all neighbours
    if (!currentRoom.visited) {
      currentRoom.visited = true;
      currentRoom.neighboursToDo.forEach((neighbour) => {
        neighbour.neighboursToDo = neighbour.neighboursToDo.filter((room) => {
          return room !== currentRoom;
        });
      });
    }

    if (currentRoom.neighboursToDo.length === 0) { // retreat case
      currentRoom = currentRoom.parent;
      continue;
    }
    
    // select a neighbour from the list as the next room
    const randomIndex = Math.floor(Math.random() * currentRoom.neighboursToDo.length);
    const nextRoom = currentRoom.neighboursToDo[randomIndex];
    nextRoom.parent = currentRoom;
    currentRoom = nextRoom;

  }

  // draw the maze into the canvas
  const ctx = canvas.getContext("2d");
  const px = canvas.width / (MAZE_DIM * 2 + 1);
  ctx.fillStyle = "#4d4d4d";
  ctx.strokeStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 4;
  ctx.fillStyle = "#757575";
  // draws the outlines of the path
  for (let i = 0; i < MAZE_DIM; i++) {
    for (let j = 0; j < MAZE_DIM; j++) {
      if (maze[i][j].visited) {
        ctx.strokeRect(px * (i * 2 + 1), px * (j * 2 + 1), px, px);
         if (maze[i][j].parent !== null) {
          if (i > 0 && maze[i][j].parent === maze[i - 1][j]) {
            ctx.beginPath();
            ctx.moveTo(px * (i * 2) - 4, px * (j * 2 + 1));
            ctx.lineTo(px * (i * 2 + 1) + 4, px * (j * 2 + 1));
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(px * (i * 2) - 4, px * (j * 2 + 2));
            ctx.lineTo(px * (i * 2 + 1) + 4, px * (j * 2 + 2));
            ctx.stroke();
          }
          if (i < MAZE_DIM - 1 && maze[i][j].parent === maze[i + 1][j]) {
            ctx.beginPath();
            ctx.moveTo(px * (i * 2 + 2) - 4, px * (j * 2 + 1));
            ctx.lineTo(px * (i * 2 + 3) + 4, px * (j * 2 + 1));
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(px * (i * 2 + 2) - 4, px * (j * 2 + 2));
            ctx.lineTo(px * (i * 2 + 3) + 4, px * (j * 2 + 2));
            ctx.stroke();
          }
          if (j > 0 && maze[i][j].parent === maze[i][j - 1]) {
            ctx.beginPath();
            ctx.moveTo(px * (i * 2 + 1), px * (j * 2) - 4);
            ctx.lineTo(px * (i * 2 + 1), px * (j * 2 + 1) + 4);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(px * (i * 2 + 2), px * (j * 2) - 4);
            ctx.lineTo(px * (i * 2 + 2), px * (j * 2 + 1) + 4);
            ctx.stroke();
          }
          if (j < MAZE_DIM - 1 && maze[i][j].parent === maze[i][j + 1]) {
            ctx.beginPath();
            ctx.moveTo(px * (i * 2 + 1), px * (j * 2 + 2) - 4);
            ctx.lineTo(px * (i * 2 + 1), px * (j * 2 + 3) + 4);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(px * (i * 2 + 2), px * (j * 2 + 2) - 4);
            ctx.lineTo(px * (i * 2 + 2), px * (j * 2 + 3) + 4);
            ctx.stroke();
          }
        }
      }
    }
  }
  // draws the inside of the maze
  for (let i = 0; i < MAZE_DIM; i++) {
    for (let j = 0; j < MAZE_DIM; j++) {
      if (maze[i][j].visited) {
        ctx.fillRect(px * (i * 2 + 1) + 2, px * (j * 2 + 1) + 2, px - 4, px - 4);
        if (maze[i][j].parent !== null) {
          if (i > 0 && maze[i][j].parent === maze[i - 1][j]) {
            ctx.fillRect(px * (i * 2) - 3, px * (j * 2 + 1) + 2, px + 6, px - 4);
          }
          if (i < MAZE_DIM - 1 && maze[i][j].parent === maze[i + 1][j]) {
            ctx.fillRect(px * (i * 2 + 2) - 3, px * (j * 2 + 1) + 2, px + 6, px - 4);
          }
          if (j > 0 && maze[i][j].parent === maze[i][j - 1]) {
            ctx.fillRect(px * (i * 2 + 1) + 2, px * (j * 2) - 3, px - 4, px + 6);
          }
          if (j < MAZE_DIM - 1 && maze[i][j].parent === maze[i][j + 1]) {
            ctx.fillRect(px * (i * 2 + 1) + 2, px * (j * 2 + 2) - 3, px - 4, px + 6);
          }
        }
      }
    }
  }
});
