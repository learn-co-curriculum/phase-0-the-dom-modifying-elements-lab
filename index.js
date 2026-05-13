const main = document.querySelector("#main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Danielle is the champion"
document.body.append(newHeader);