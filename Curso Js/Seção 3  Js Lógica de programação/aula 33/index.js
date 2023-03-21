
// Atribuição via Desestruturação


const pessoa = {
    nome: 'Franciso',
    sobrenome: 'Lopes',
    idade: 33,
    endereço: {
        rua: 'São Francisco de Assis',
        numero: '304'
    }
}
/*
const {nome, sobrenome, idade } = pessoa
console.log(nome, sobrenome)
*/
/*
const {nome: n = '', sobrenome } = pessoa
console.log(n, sobrenome)
*/

//const {nome: nome, sobrenome } = pessoa
//console.log(nome, sobrenome)

//const { endereço: { rua, numero, edereço } } = pessoa
//console.log(rua, numero)

const { nome, ...resto} = pessoa
console.log(resto)