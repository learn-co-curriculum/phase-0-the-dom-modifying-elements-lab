
// wanted to continue to practice writing functions. Below functions is shorter way to modify. 
function removeMain() {
  const element = document.querySelector("main#main");
  element.remove();
}
removeMain();

function createHeader() {
  const h1 = document.createElement("h1");
  h1.id = "victory";
  h1.textContent = "Barkley is the champion";
  document.body.appendChild(h1);
  return h1;
}
const newHeader = createHeader();


// const main = document.querySelector('main#main');
// main.remove();

// const newHeader = document.createElement('h1');
// newHeader.id = 'victory';
// newHeader.textContent = 'Barkley is the champion';

// document.body.append(newHeader);

