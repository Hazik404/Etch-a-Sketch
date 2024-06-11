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
    
    for(let j = 0; j < 16; j++){
        const square = document.createElement("div")
        square.className="square";
        const setBg = () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = "#" + randomColor;
            color.innerHTML = "#" + randomColor;
          }
        square.addEventListener("mouseover",function(){
            square.style.backgroundColor = setBg();
        });
        
        row.appendChild(square)
    }    
    main.appendChild(row)
    }
 }


