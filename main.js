"use strict";

const MAZE_DIM = 9;

// obtaining the canvas element
const canvas = document.getElementById("drawing-canvas");
if (typeof canvas === "undefined") {
  console.error("Canvas element not found");
}

// obtaining the button element
const button = document.getElementById("draw-button");
if (typeof button === "undefined") {
  console.error("Button element not found");
}

// resize the canvas to the right pixel resolution
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

function drawMaze(maze) {
  const ctx = canvas.getContext("2d");
  const px = canvas.width / (MAZE_DIM * 2 + 1); // square room size
  ctx.fillStyle = "#004b13";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#7a6c50";
  ctx.lineWidth = 4;

  // draws the outlines of the path
  for (let i = 0; i < MAZE_DIM; i++) {
    for (let j = 0; j < MAZE_DIM; j++) {
      if (maze[i][j].visited) {
        ctx.strokeRect(px * (i * 2 + 1), px * (j * 2 + 1), px, px);
         if (maze[i][j].parent !== null) {
          if (i > 0 && maze[i][j].parent.x === i - 1 && maze[i][j].parent.y === j) {
            ctx.strokeRect(px * (i * 2), px * (j * 2 + 1), px, px);
          }
          if (i < MAZE_DIM - 1 && maze[i][j].parent.x === i + 1 && maze[i][j].parent.y === j) {
            ctx.strokeRect(px * (i * 2 + 2), px * (j * 2 + 1), px, px);
          }
          if (j > 0 && maze[i][j].parent.x === i && maze[i][j].parent.y === j - 1) {
            ctx.strokeRect(px * (i * 2 + 1), px * (j * 2), px, px);
          }
          if (j < MAZE_DIM - 1 && maze[i][j].parent.x === i && maze[i][j].parent.y === j + 1) {
            ctx.strokeRect(px * (i * 2 + 1), px * (j * 2 + 2), px, px);
          }
        }
      }
    }
  }

  // draws the inside path of the maze
  for (let i = 0; i < MAZE_DIM; i++) {
    for (let j = 0; j < MAZE_DIM; j++) {
      if (maze[i][j].visited) {
        ctx.fillRect(px * (i * 2 + 1) + 2, px * (j * 2 + 1) + 2, px - 4, px - 4);
        if (maze[i][j].parent !== null) {
          if (i > 0 && maze[i][j].parent.x === i - 1 && maze[i][j].parent.y === j) {
            ctx.fillRect(px * (i * 2) - 3, px * (j * 2 + 1) + 2, px + 6, px - 4);
          }
          if (i < MAZE_DIM - 1 && maze[i][j].parent.x === i + 1 && maze[i][j].parent.y === j) {
            ctx.fillRect(px * (i * 2 + 2) - 3, px * (j * 2 + 1) + 2, px + 6, px - 4);
          }
          if (j > 0 && maze[i][j].parent.x === i && maze[i][j].parent.y === j - 1) {
            ctx.fillRect(px * (i * 2 + 1) + 2, px * (j * 2) - 3, px - 4, px + 6);
          }
          if (j < MAZE_DIM - 1 && maze[i][j].parent.x === i && maze[i][j].parent.y === j + 1) {
            ctx.fillRect(px * (i * 2 + 1) + 2, px * (j * 2 + 2) - 3, px - 4, px + 6);
          }
        }
      }
    }
  }
}

// when the button is clicked...
button.addEventListener("click", () => {

  // generating the initial maze matrix
  const maze = [];
  for (let i = 0; i < MAZE_DIM; i++) {
    const row = [];
    for (let j = 0; j < MAZE_DIM; j++) {
      row.push({
        visited: false,   // true for visited rooms
        parent: null,     // the room coordinate we came from in the visit
        neighboursToDo: 4 // neighbours with 'visited = false'
      });
      if (i === 0 || i === MAZE_DIM - 1) row[j].neighboursToDo--;
      if (j === 0 || j === MAZE_DIM - 1) row[j].neighboursToDo--;
    }
    maze.push(row);
  }

  // starting a depth-first search from room (0, 0)
  let c = {x: 0, y: 0};
  do {

    // mark the room as visited and remove 1 from all neighbour numbers
    let room = maze[c.x][c.y];
    if (!room.visited) {
      room.visited = true;
      if (c.x > 0) {
        maze[c.x - 1][c.y].neighboursToDo--;
      }
      if (c.x < MAZE_DIM - 1) {
        maze[c.x + 1][c.y].neighboursToDo--;
      }
      if (c.y > 0) {
        maze[c.x][c.y - 1].neighboursToDo--;
      }
      if (c.y < MAZE_DIM - 1) {
        maze[c.x][c.y + 1].neighboursToDo--;
      }
    }

    if (room.neighboursToDo === 0) { // retreat to parent
      c = {x: room.parent.x, y: room.parent.y};
      continue;
    }

    // select a neighbour from the list as the next room
    let r = Math.floor(Math.random() * room.neighboursToDo);
    const nextC = {x: c.x, y: c.y}; // new coordinate
    if (c.x > 0 && maze[c.x - 1][c.y].visited === false) {
      r--;
      if (r === -1) nextC.x--;
    }
    if (c.x < MAZE_DIM - 1 && maze[c.x + 1][c.y].visited === false) {
      r--;
      if (r === -1) nextC.x++;
    }
    if (c.y > 0 && maze[c.x][c.y - 1].visited === false) {
      r--;
      if (r === -1) nextC.y--;
    }
    if (c.y < MAZE_DIM - 1 && maze[c.x][c.y + 1].visited === false) {
      r--;
      if (r === -1) nextC.y++;
    }
    maze[nextC.x][nextC.y].parent = {x: c.x, y: c.y}; // set the return path
    c = {x: nextC.x, y: nextC.y}; // move to next coordinate

  } while (c.x !== 0 || c.y !== 0); // repeat until back to start

  // draw the maze into the canvas
  drawMaze(maze);

});
