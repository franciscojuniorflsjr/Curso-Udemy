/*
 A função definida com a palavra function tem uma variavel especial que chama arguments que sustenta todos argumentos enviados. */

 const conta = (...args) => {
    console.log(args)
};
conta('+', 1, 20, 30, 40, 50)



/*
const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, ...numeros)
};
conta('+', 1, 20, 30, 40, 50)
*/


/*
const conta = function(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
    if (operador === '/') acumulador /= numero;
    if (operador === '*') acumulador *= numero;
    }
console.log(acumulador)
};
conta ('+', 1 ,20, 30, 40, 50);
*/


 /*
 function funcao ([valor1, valor2, valor3 ]) {
    console.log(valor1, valor2, valor3);
}
funcao (['Francisco','Junior', 33])
*/


 /*
function funcao({ nome,sobrenome, idade }) {
    console.log(nome,sobrenome,idade);
}
let obj = {nome:'Francisco', sobrenome:'Junior', idade:'33'}
funcao(obj);
//funcao ({nome:'Francisco', sobrenome:'Junior', idade:'33'})
*/


 /*
 function funcao(a, b = 2, c = 4 ) { //modo atual e pratico
 //  b = b || 2;  modo antigo
    console.log(a + b + c)
 } 
funcao(2, undefined, 20);
*/


 /*
 function funcao(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
 }
 funcao(1, 2, 3);
*/


/*
 function funcao(a, b, c) {
    let total = 0
    for (let argumento of arguments) {
    total += argumento;
}
console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7, 8);
*/