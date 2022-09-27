let grid = document.getElementById("grid");

function createGrid(num) {
  for (i = 0; i < num ** 2; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.id = "cell";
    grid.appendChild(cell);
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  }
}

createGrid(16);

let cell = document.getElementById("cell");

document.body.addEventListener("mouseover", function mouseOver(event) {
  if (event.target.className.toLowerCase() === "cell") {
    event.target.style.backgroundColor = "black";
  }
});