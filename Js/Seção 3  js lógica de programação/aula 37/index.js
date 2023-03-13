// For of - Estrutura de repetição
const nome = ['Francisco', 'Junior', 'Lopes'];





//    For classico - Geralmente com iteráveis(array ou strings)

for (let i = 0 ; i < nome.length; i ++) {
    console.log(nome[i])
}
console.log('####')

//   For in - Retonrna o indice ou chave(string, array ou object)

for (let i in nome) {
    console.log(nome[i])
}
console.log('####')

//  For of - retorna p valor em si (iteráveis , arrays ou strings) 
for(let valor of nome) {
    console.log(valor)
}

console.log('####')

//  For Each
nome.forEach(function(valor, indice) {
    console.log(valor, indice,)
})