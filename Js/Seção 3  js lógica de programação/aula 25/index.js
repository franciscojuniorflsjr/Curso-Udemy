 
// Aula 02 if - else - else if 

/*
// se (numero >= 0&& numero <= 5) ocorrer, faça isso {código}
//se não faça isso { 0 código}
const numero = 10
if (numero >= 0 && numero <= 5 ) {
    console.log('O número está entre 0 e 5')
} else {
    console.log('O número Não está entre 0 e 5')
}
*/
const numero = 10
if (numero <= 10) {
    console.log ('O número e menor ou igual a 10.')
}


if (numero >= 0 && numero <= 5 ) {
    console.log('O número está entre 0 e 5.')
} else if (numero >= 6 && numero <= 8 ) {
    console.log('O número está entre 6 e 8.')
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.')
} else {
console.log('O número está entre 0 e 11.')
}
console.log ('AQUI VAI O RESTO DO CÓDIGO' )