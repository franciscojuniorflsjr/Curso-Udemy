// Valores primitivos e valores por referência
/*
Primitivos (imutáveis) - string , number, boolean, null, 
undefined (bigint, symbol)  // VALORES COPIADOS
-----------------------------------------------------------
Referência (múltavel) pode ser mudado - objeto, array, function
// VALORES PASSADOS POR REFERÊNCIA


*/
const a = {
    nome: 'Francisco',
    sobrenome: 'Silva'
}
const b = {...a}

a.nome = 'junior'
console.log(b)
console.log(a)





/*
let a = [1, 2, 3]
let b = a
let c = b
console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
    console.log(a, b)
    console.log(c)
    /*
/*
let a = 'A'
let b = a //copia
console.log(a, b)

a = 'Outra coisa'
console.log(a, b)
*/