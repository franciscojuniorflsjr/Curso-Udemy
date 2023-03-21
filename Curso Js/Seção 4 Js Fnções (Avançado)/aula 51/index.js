// return
// Retorna um valor
// Termina a função
function criaMultiplicador(multiplicador){
    //multiplicador
return function(n) {
    return n * multiplicador;
};
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica =criaMultiplicador(4);



console.log(duplica(3))
console.log(triplica(2))
console.log(quadriplica(10))

/*
function duplica(n) {
    return n* 2;
} 

function triplica(n) {
    return n * 3;
}
    function quadriplica(n) {
        return n * 4;
    }

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
*/

/*
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco+ ' ' +  resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);
*/


/*
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}
const p1 = criaPessoa('Junior', 'Lopes');
const p2 = {
    nome:'Daiane',
    sobrenome:'Santana'
};

console.log (p1)
console.log(p2)
*/

/*
document.addEventListener('cllick' , function(){
    document.body.style.backgroundColor = 'red'
})
*/

/*
function soma(a, b) {
    return a + b;
}

function soma2 (a, b) {
    console.log(a + b);
}
soma2(5, 2);
*/