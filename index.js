document.getElementById('main').remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Emily is the champion";
const body = document.querySelector("body");
body.append(newHeader);
