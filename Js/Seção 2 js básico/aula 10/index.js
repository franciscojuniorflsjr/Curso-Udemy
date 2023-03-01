// Tipo de dados Primitivos
// string , number , undefined ,null, boolean

const nome = 'Francisco' ;//string
const nome1 = 'Francisco' ;//string
const nome2 =  `Francisco` ;//string
const num1 = 10; //number
const num2 = 10.52; // number
let nomeAluno; //undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null // Nulo -> não aponta para local nenhum na memória
const aprovado = false; // Boolean = true = "verdadeiro" false = 'falso' (valor lógico)

//consulta o typeof
//console.log(typeof nome , nome);

const a = [1, 2 ]
const b = a ;
console.log (a,b)

/**
 * Operadores Aritiméticos
 *  + Adição / concatenação
 *  -Subtração  /divide  *Multiplicação  **Potênciação
 *  % Resto da divisão
 * 
 *  ORDEM DE PRECEDÊNCIA ARITMÉTICOS
  ---------------------------------
   ()
   **
   * / %
   + -
 ---------------------------
   Incremento = ++
   Decremento = --

   let contador = 1;
    contador++ 
    console.log(contador) 
      2
-----------------------------
 Operadores de atribuição

let contador = 2
contador += 2
contador += 2 
contador += 2 
console.log (contador)
  8
---------------------------------------------------
// NaN - Not a Number parseInt(inteiro) parseFloat(decimais) Number(escolha automatica numeros inteiros e decimais)
*/
/*
const num1 = 10
const num2 = Number('5.6')
console.log(num1 + num2) 
console.log(typeof num2)
15.6 Number
*/ 

