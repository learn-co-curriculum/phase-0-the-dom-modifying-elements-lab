// Write your code here!
const mainEle = document.getElementById('main')
mainEle.remove()

const newHeader = document.createElement("h1")
newHeader.id = 'victory'
newHeader.textContent = "Liam is the champion"

document.body.append(newHeader)