// Atribuição via Desestruturação
/*
const numeros = [1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ]
const primeiroNumero = numeros[0]
console.log(numeros[0])
*/

//     ...rest   "pega o resto da array"     ...spread   "espalhar ou distribuir array"
/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000 ,7000 ,8000 ,9000 ]
const [um, dois, três, ...resto] = numeros
console.log(um, dois, três)
console.log(resto)
*/

/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000 ,7000 ,8000 ,9000 ]
const [um, , três, ,cinco, ,sete] = numeros
console.log(um, três, cinco, sete)
*/

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
const [lista1, lista2, lista3] = numeros
console.log (lista3[2])
/*
let a = 'A'
let b = 'B'
let c = 'C'

const letras = [B, C, A]
[A, B, C] = letras

console.log(A, B, C)
*/