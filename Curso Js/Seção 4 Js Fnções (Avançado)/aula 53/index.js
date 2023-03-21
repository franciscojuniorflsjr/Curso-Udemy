//Global
function retornaFuncao(nome) {
        return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Francisco');
const funcao2 = retornaFuncao('Junior');
console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());