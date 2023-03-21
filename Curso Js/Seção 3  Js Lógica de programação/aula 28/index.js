// Objeto Date

//const tresHoras = 60 *60 *3 *1000
//const umDia = 60 *60 *24 *1000
//const data = new Date (0 + tresHoras + umDia)// 01/01/1970 //Timestamp unix ou época unix
//const data = new Date(2023, 2, 8, 10,)// a, m, d, h, M, s, ms
 //const data = new Date() // data atual 
function zeroAEsquerda(num){
return num >= 10 ? num : `0${num}`
}
function formataData(data){
const dia = zeroAEsquerda(data.getDate())
const mes = zeroAEsquerda(data.getMonth() +1)
const ano = zeroAEsquerda(data.getFullYear())
const hora = zeroAEsquerda(data.getHours())
const min = zeroAEsquerda(data.getMinutes())
const sec = zeroAEsquerda(data.getSeconds())

return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`
}

const data = new Date()
const dataBrasil = formataData (data)
console.log(dataBrasil)










/*
const data = new Date('2023-03-08 10:57.02');
console.log ('Dia', data.getDate());
console.log ('Mês', data.getMonth()) // Mês começa do 0
console.log ('Ano', data.getFullYear());
console.log ('Hora', data.getHours());
console.log ('Min', data.Minutes());
console.log ('Seg', data.getSeconds());
console.log ('MS', data.getMilliseconds());
console.log ('Dia Semana', data.getDay()); // 0 = Domingo, 

console.log(data.toString());
console.log(Date.now())
*/