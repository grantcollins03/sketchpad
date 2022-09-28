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
createGrid(48);

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

/*
document.querySelector("button").addEventListener("click", function() {
  while (true) {
    let newSize = prompt("Enter a new grid size:", 16);
    if (newSize < 4 || newSize > 100) {
      let newSize = prompt("Please enter a number between 4 and 100:")
      continue;
    } else {
      clearGrid();
      createGrid(newSize);
    }
  }
});
*/

/*
document.querySelector("button").addEventListener("click", function() {
  while (newSize < 4 || newSize > 100) {
    let newSize = prompt("Enter a new grid size:", 16);
  }  
  clearGrid();
  createGrid(newSize);
});
*/





