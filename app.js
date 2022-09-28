let grid = document.getElementById("grid");

//Create grid upon page load; reused in creating a new grid
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

//Hover effect to change background color
let cell = document.getElementById("cell");
document.body.addEventListener("mouseover", function mouseOver(event) {
  if (event.target.className.toLowerCase() === "cell") {
    event.target.style.backgroundColor = "black";
  }
});

//Remove current grid layout
function clearGrid() {
    while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

//Upon button click, create a new grid with a number from the user 

