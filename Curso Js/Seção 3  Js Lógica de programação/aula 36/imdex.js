// For in - Estrutura de repetição
// Lê os índices ou chaves   array [] objeto {}
//                0       1       2
/*
const frutas = ['Pera', 'Maçã', 'Uva'] 
for (let indice in frutas) {
    console.log(frutas[indice])
    }
*/
    /*
for (let i = 0; i < frutas.length; i++ ){
    console.log(frutas[i])
}
*/

const pessoa = {
    nome: 'Francisco',
sobrenome: 'Lopes',
idade: 33
}
// console.log(pessoa.nome)
// console.log(pessoa['nome'])

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}