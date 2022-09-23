let container = document.getElementById("container");

function addGrid(size) {
    for (i = 0; i < (size ** 2); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}

addGrid(16);