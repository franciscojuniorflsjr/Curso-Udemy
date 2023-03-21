//   continue  break 

//  Continue  continua para próxima iteração
// Break  encerra a execução do código

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

// do while
let i = 0; 
do {
    let numero = numeros[i]
  
    if (numero === 2) {
    console.log('Pulei o número 2');
    i++;
    continue;
    }
    console.log (numero);

    if (numero === 7) {
    console.log('7 encontrado, saindo...');
    i++;
    break;
}
i++
} while (i < numeros.length)


// while
/*
let i = 0; 
while (i < numeros.length) {
    let numero = numeros[i]
  
    if (numero === 2) {
    console.log('Pulei o número 2');
    i++;
    continue;
    }
    console.log (numero);

    if (numero === 7) {
    console.log('7 encontrado, saindo...');
    i++;
    break;
}
i++
}
*/






// For classico
/*
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i]
  
    if (numero === 2) {
        console.log('Pulei o número 2')
    continue
    }
 console.log (numero)

if (numero === 7) {
    console.log('7 encontrado, saindo...')
break
}
}
*/


 // For in
 /*
 for (let i in numeros) {
  let numero = numeros[i]
    if (numero ===2) {
        console.log('Pulei o número 2')
    continue
    }
 console.log (numero)

if (numero ===7){
    console.log('7 encontrado, saindo...')
break
}
}
*/

//  For of
/*
for (let numero of numeros) {
  
    if (numero ===2) {
        console.log('Pulei o número 2')
    continue
    }
 console.log (numero)

if (numero ===7){
    console.log('7 encontrado, saindo...')
break
}
}
*/