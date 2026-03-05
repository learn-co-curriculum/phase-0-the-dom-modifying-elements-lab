// DOM Modifying Lab

document.querySelector("#main").remove();; // no longer has DOM node 'main#main'

const newHeader = document.createElement('h1'); // has a 'newHeader' variable that points to an <h1> node

newHeader.id = 'victory';//the 'newHeader' variable that points to the <h1> node has an id of 'victory'

newHeader.innerHTML = "Jonathan Levy is the champion";//the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it
