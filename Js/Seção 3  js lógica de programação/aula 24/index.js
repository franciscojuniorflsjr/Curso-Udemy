// Estrutura de condicional

// Entre 0 - 11 - Bom Dia
// Entre 12 - 17 - Boa Tarde
// Entre 18 - 23 - Boa Noite

// If pode ser usado sozinho 
// Sempre que utilizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na chegagem
// Só posso ter um else na chegagem
// Podemos udar condições sem else if, ultilizando apenas if e else

// if "SE"   else "Senão"    else if " Senão se"




const hora = 12

if (hora >= 0 && hora <= 11) {
console.log ('Bom Dia')
}
 else if  (hora >= 12 && hora <= 17){
console.log ('Boa Tarde')
} 
else if  (hora >= 18 && hora <= 23){
console.log ('Boa Noite')
} else {
    console.log('Hora Inválida')
}