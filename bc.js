document.body.onload = () => {
    addElement();
    grid();
}

function addElement() {
    const main = document.createElement("div");
    main.id = "main";

    const test = document.createTextNode("This is my main div");

    main.appendChild(test);

    document.body.appendChild(main);
}
 function grid() {
    for(let i = 0; i < 16; i++){
        const row = document.createElement("div");
        row.className = "row";
    
    for(let i = 0; i < 16; i++){
        const square = document.createElement("div")
        square.className="square";
        row.appendChild(square)
    }    
    main.appendChild(row)
    }
 }

