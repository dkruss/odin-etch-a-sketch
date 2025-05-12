let container = document.querySelector(".container");
let setSizeBtn = document.querySelector("#setSize");

let mouseOverColour = document.querySelector("#mouseOverColour");
let clickColour = document.querySelector("#clickColour");
let doubleClickColour = document.querySelector("#doubleClickColour");

mouseOverColour.value = "#ff0000"
clickColour.value = "#00ff00"
doubleClickColour.value = "#0000ff"

function createGrid(s) {
    
    //If a grid already exists when creating a new one, 
    //clear old one first
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    //Create grid
    for (let r = 0; r < s; r++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let c = 0; c < s; c++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.append(cell);
        }
        container.append(row);
    }
    
    const cells = document.querySelectorAll(".cell");
    
    cells.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style["background-color"] = mouseOverColour.value;
        });
        div.addEventListener("click", () => {
            div.style["background-color"] = clickColour.value;
        });
        div.addEventListener("dblclick", () => {
            div.style["background-color"] = doubleClickColour.value;
        });
        div.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            div.style["background-color"] = "";
        });
    });

    mouseOverColour.addEventListener("input", () => {
        mouseOverColour = document.querySelector("#mouseOverColour");
    });
    clickColour.addEventListener("input", () => {
        clickColour = document.querySelector("#clickColour");
    });
    doubleClickColour.addEventListener("input", () => {
        doubleClickColour = document.querySelector("#doubleClickColour");
    });
}

setSizeBtn.addEventListener("click", () => {
    let size = prompt("How large should the grid be?");
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else if (size > 100) {
        alert("Size is too large. Setting grid size to 16.");
        createGrid(16);
    } else {
        alert("Invalid input. Setting grid size to 16.");
        createGrid(16);
    }
});


createGrid(16);