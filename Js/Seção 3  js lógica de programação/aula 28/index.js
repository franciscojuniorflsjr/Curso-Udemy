// Objeto Date

//const tresHoras = 60 *60 *3 *1000
//const umDia = 60 *60 *24 *1000
//const data = new Date (0 + tresHoras + umDia)// 01/01/1970 //Timestamp unix ou época unix
//const data = new Date(2023, 2, 8, 10,)// a, m, d, h, M, s, ms
 //const data = new Date() // data atual 
const data = new Date('2023-03-08 10:57:02')
console.log ('Dia', data.getDate())
console.log ('Mês', data.getMonth())
console.log ('Ano', data.getFullYear())
console.log ('Hora', data.getHours())
console.log ('Minutos', data.Minutes())
console.log ('Segundos', data.getSeconds())
console.log ('MS', data.getMilliseconds())
console.log ('Dia Semana', data.getDay())

console.log(data.toString())