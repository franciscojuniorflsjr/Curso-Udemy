//Objetos {}

const pessoal = {
    nome: 'Francisco',
    sobrenome: 'Junior',
    idade: 33,

    fala() {
        console.log(`${this.nome}${this.sobrenome} está falando oi...`)
    }
}

pessoal.fala()


/*
function criaPessoa (nome,sobrenome,idade) {
return {
    nome, sobrenome, idade
}
}

const pessoa1 = criaPessoa('Francisco', 'Junior', 33)
const pessoa2 = criaPessoa('Daiane', 'Santana', 25)
const pessoa3 = criaPessoa('Maria', 'Graça', 73)
const pessoa4 = criaPessoa('Dona', 'Penha', 62)
const pessoa5 = criaPessoa('Luiz', 'antonio', 12)

console.log(pessoa1,pessoa3)
*/
/*
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}
const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Silva',
    idade: 55
}
console.log(pessoa1.nome)
console.log(pessoa2.nome)

*/