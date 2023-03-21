// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {

    const sobrenome = 'Lopes';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Francisco'));
    }

    falaNome() 
        console.log(idade, peso, altura);
}) (33, 100, 180)


/*
(function() {
const nome = 'Francisco';
console.log(nome);
})();

const nome = 'Qualquer coisa';
*/