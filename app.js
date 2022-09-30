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

let cellHoverColor = "black";

//Hover effect to change background color
let cell = document.getElementById("cell");
document.body.addEventListener("mouseover", function mouseOver(event) {
  if (event.target.className.toLowerCase() === "cell") {
    event.target.style.backgroundColor = cellHoverColor;
  }
});

//Remove current grid layout
function clearGrid() {
    while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

document.getElementById("reset-btn").addEventListener("click", function(){
  clearGrid();
  createGrid(16);
});

//Upon button click, create a new grid with a number from the user 

document.getElementById("resize-btn").addEventListener("click", function() {
  let newSize = 16;
  while (true) {
    newSize = prompt("Enter a new size for your Magic Sketch Screen:");
    if (newSize >= 4 && newSize <= 100) {
      break;
    } else if (newSize == null) {
      return;
    } else {
      alert("Please enter a number between 4 and 100.");
    }
  }
  clearGrid();
  createGrid(newSize);
});

//Change to color mode

document.getElementById("color-btn").addEventListener("click", function() {
  let redValue = 0;
  let greenValue = 0;
  let blueValue = 0;
  cellHoverColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
});







