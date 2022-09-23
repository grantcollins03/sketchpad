let container = document.getElementById("container");

function addGrid(height, width) {
    for (i = 0; i < height; i++) {
        let row = document.createElement("div");
        container.appendChild(row);
        for (j = 0; j < width; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
    }
}

addGrid(16, 16);