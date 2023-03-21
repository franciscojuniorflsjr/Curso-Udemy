const numero = Number (prompt('Digite um número:'))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto') 

numeroTitulo.innerHTML = numero;
texto.innerHTML = ''
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`
texto.innerHTML +=`<p> ${numero} é inteiro ${Number.isInteger(numero)}</p>.`
texto.innerHTML += `<p>Arredondando para baixo:${Math.floor(numero)}.</p>.`
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>.`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>.`

/* 
Raiz quadrada: 8.548545841541
65.32626 é inteiro : false
É NaN: false
Arredondando para baixo: 8
Arredondando para cima: 9
Com duas casas decimais: 8.54
*/