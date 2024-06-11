document.body.onload = () => {
    addElement();
    grid(16); 
};

function addElement() {
    const main = document.createElement("div");
    main.id = "main";

    const test = document.createTextNode("This is my main div");

    main.appendChild(test);

    document.body.appendChild(main);
}

function grid(size) {
    const main = document.getElementById("main");
    main.innerHTML = ""; 

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";

        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.className = "square";
            square.addEventListener("mouseover", function() {
                square.style.backgroundColor = getRandomColor();
            });
            row.appendChild(square);
        }

        main.appendChild(row);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.createElement("button");
button.className = "button";
button.innerText = "Set Grid Size";
button.onclick = function() {
    const userInput = prompt("Set the Grid Size (up to 100)");
    const gridSize = parseInt(userInput);
    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        grid(gridSize);
    } else {
        alert("Please enter a valid grid size (up to 100).");
    }
};
document.body.appendChild(button);
