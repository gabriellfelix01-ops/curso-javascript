// Seleciona o elemento pelo seu indentificador

let containerDiv = document.querySelector('#div1')
containerDiv.style.backgroundColor = "yellow"

document.body.style.backgroundColor = "lightblue"

// Crie um elemento com CreateElement

let itens = document.createElement('p')
itens.textContent = "Teste de parágrafo"

containerDiv.appendChild(itens)

let bioDescription = document.createElement('h3')
bioDescription.textContent = "Nome: Gabriell; Idade: 19"
document.body.appendChild(bioDescription)

const testeh1 = document.getElementsByTagName("h1")
console.log(testeh1)

// document.body.removeChild(containerDiv)