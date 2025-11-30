const divContainer = document.getElementsByClassName("grid-container")[0];

function createGrid(num){
    for(let i = 0; i < num; i++){
        let divRow = document.createElement("div");
        divRow.classList.add("grid-row");
        divContainer.appendChild(divRow);
        for(let j = 0; j < num; j++){
            let divNode = document.createElement("div");
            divNode.classList.add("grid-element");
            divNode.style.width = `${480 / num}px`;
            divNode.style.height = `${480 / num}px`;
            divNode.style.opacity = 0.1;
            divNode.style.backgroundColor = "black";
            function changeColor(){
                divNode.style.opacity = parseFloat(divNode.style.opacity) + 0.2;
            }
            divNode.addEventListener("mouseover", changeColor)
            divRow.appendChild(divNode);
        }
    }
}

function resetGrid(num){
    divContainer.innerHTML = '';
    createGrid(num);
}

createGrid(16);

const resetButton = document.querySelector(".reset");
const gridSizeInput = document.querySelector(".grid-size");
const eraseButton = document.querySelector(".erase");

resetButton.addEventListener("click", () => {
    const gridSize = parseInt(gridSizeInput.value);
    if (!isNaN(gridSize) && gridSize > 0) {
        resetGrid(gridSize);
    } else {
        alert("Please enter a valid number greater than 0.");
    }
});

eraseButton.addEventListener("click", () => {
    const gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach(element => {
        element.style.opacity = 0.1;
    })
})