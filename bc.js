document.body.onload = addElement;

function addElement() {
    const main = document.createElement("div");

    const test = document.createTextNode("This is my main div");

    main.appendChild(test);

    document.body.appendChild(main);
}