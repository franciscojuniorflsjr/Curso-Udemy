/*
    Avaliação de Curto-Circuito (Short-Cicuit)


    && -> false && true -> false "o valor mesmo"

function falaOi () {
    return 'Oi'
}
const vaiExecutar = 'Junior'
console.log(vaiExecultar && falaOi())


-------------------------------------------------------
*/

//     || -> true || false -> vai retornar "o valor verdadeiro" 


const a = 0
const b = null
const c = undefined
const d = 'Junior'
const e = false

console.log (a|| b|| c|| d|| e)

/*
---------------------------------------------------------


    FALSY
    false
    0 
   "" '' ` `
   null / undefined
   NaN

*/