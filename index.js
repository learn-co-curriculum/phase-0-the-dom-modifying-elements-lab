// Write your code here!
const eraser = document.querySelector('main');
eraser.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";

document.body.append(newHeader.textContent = "Sean is the champion");