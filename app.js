let gridContainer = document.getElementById("grid-container");

function createGrid(num) {
  for (i = 0; i < num ** 2; i++) {
    let cell = document.createElement("div");
    cell.className = "cell";
    gridContainer.appendChild(cell);
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  }
}

createGrid(16);
