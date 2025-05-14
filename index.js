document.getElementById('main').remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
const body = document.querySelector("body");
body.append(newHeader);
