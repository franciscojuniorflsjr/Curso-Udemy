//  Operadores Ternários
// (condicao)  ? 'Vaçor para verdadeiro ' : 'Valor para falso'

const pontuacaoUsuario = 1000
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário Normal'

const corUsuario = null
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario,corPadrao)
/*
const pontuacaoUsuario = 1000
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário Vip') // nivelUsuario
} else {
    console.log('Usuário normal')
}
*/