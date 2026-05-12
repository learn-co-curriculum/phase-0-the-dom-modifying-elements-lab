// const main = document.getElementById("main");
const main = document.querySelector("#main");
main.remove();

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = "Victors";

document.body.append(newHeader);