const elementos = [
    {tag: 'p', texto: 'Frase 1 '},
    {tag: 'div', texto: 'Frase 2 '},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'frase 4'},
];
const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++){
let { tag, texto } = elementos [i]
let tagCriada = document.createElement(tag)
let textoCriado = document.createTextNode(texto)

tagCriada.appendChild(textoCriado) //opção 3
div.appendChild(tagCriada)

// tagCriada.innerHTML =   texto   opção1
//tagCriada.innerText =   texto      0pção 2

}
container.appendChild(div)   
    
    
    
    
    // console.log(elementos[i].tag)
