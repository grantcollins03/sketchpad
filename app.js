//Global variables
let grid = document.getElementById("grid");
let cell = document.getElementById("cell");
let redValue = 0;
let greenValue = 0;
let blueValue = 0;
let cellHoverColor;

function createGrid(num) {
  for (i = 0; i < num ** 2; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    cell.id = "cell";
    grid.appendChild(cell);
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  }
  onHover();
}
createGrid(16);

//Change color on cell hover
function onHover() {
  document.body.addEventListener("mouseover", function (event) {
    if (event.target.className.toLowerCase() === "cell") {
      event.target.style.backgroundColor = cellHoverColor;
      //switch (cellHoverColor) ?
      cellHoverColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    }
  });
}

//Remove current grid layout
function clearGrid() {
    while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

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

//Reset the grid to 16x16, black hover
document.getElementById("reset-btn").addEventListener("click", function() {
  clearGrid();
  redValue = 0;
  greenValue = 0;
  blueValue = 0;
  createGrid(16);
});

//Color mode
document.getElementById("color-btn").addEventListener("click", function() {
  document.body.addEventListener("mouseover", function(event) {
    if (event.target.className.toLowerCase() === "cell") {
       redValue = (Math.floor(Math.random() * 256));
       greenValue = (Math.floor(Math.random() * 256));
       blueValue = (Math.floor(Math.random() * 256));
    }
    createGrid();
  });
});
