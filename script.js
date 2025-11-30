function createGrid(num){
    for(let i = 0; i < num; i++){
        let divRow = document.createElement("div");
        divRow.classList.add("grid-row");
        const divContainer = document.getElementsByClassName("grid-container")[0];
        divContainer.appendChild(divRow);
        for(let j = 0; j < num; j++){
            let divNode = document.createElement("div");
            divNode.classList.add("grid-element");
            divNode.style.width = `${720 / num}px`;
            divNode.style.height = `${720 / num}px`;
            function changeColor(){
                divNode.style.backgroundColor = "black";
            }
            divNode.addEventListener("mouseover", changeColor)
            divRow.appendChild(divNode);
        }
    }
}

createGrid(16);