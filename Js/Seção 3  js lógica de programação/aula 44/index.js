// Tratando e lançando erros (try, catch, throw)

function soma (x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number' 
    ) {
     throw new Error('x e y precisam ser números.')
    }
return x + y
}
try {
console.log(soma(1, 2))
console.log(soma('1', 2))
} catch (err) { // err erro
// console.log(err);
console.log ('Alguma coisa deu errado')// usuário não pode ver o erro
}

