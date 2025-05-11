let container = document.querySelector(".container");

for (let c = 0; c < 16; c++) {
    let column = document.createElement("div");
    for (let r = 0; r < 16; r++) {
        let row = document.createElement("div");
        row.classList.add("square");
        column.append(row);
    }
    container.append(column);
}

const squares = document.querySelectorAll(".square");

squares.forEach((div) => {
    div.addEventListener("click", () => {
        div.style["background-color"] = "red";
    });
});