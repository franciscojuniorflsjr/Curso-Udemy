// IEEEE 754-2008

let num1 = 0.7 // number
let num2 = 0.1 // number

// num1 = ((num1 * 100) + (num2* 100)) / 100 //0.8
// num1 = ((num1 * 100) + (num2* 100)) / 100 //0.9
// num1 = ((num1 * 100) + (num2* 100)) / 100 // 1.0

num1 = Number(num1.toFixed(2))

console.log(num1.toFixed(2))
conmsole.log(Number.isInteger(num1))

/*
let num1 = 0.7 // number
let num2 = 0.1 // number

num1 += num2 // 0.8
num1 += num2 // 0.9
num1 += num2 // 1.0
num1 += num2 // 1.1
num1 += num2 // 1.2
num1 += num2 // 1.3
num1 += num2 // 1.4
num1 += num2 // 1.5
num1 += num2 // 1.6
num1 += num2 // 1.7
num1 += num2 // 1.8
num1 += num2 // 1.9
num1 += num2 // 2.0

num1 = Number(num1.toFixed(2))
console.log(num1)
conmsole.log(Number.isInteger(num1))
*/
// console.log(num1.toString() + num2) //não foi alterado
// num1 = num1.toString() //foi alterado virou string
// console.log(num1.toString(2)) // versão binaria 
//console.log(num1.toFixed(2)) // quantidade de casas decimais o numero era 10.635269565263
//console.log(Number.isInteger(num1))// verificador de número inteiro
//console.log(Number.isNaN(temp))// verificador de número NaN true ou false
//let temp = num1 + '5'



