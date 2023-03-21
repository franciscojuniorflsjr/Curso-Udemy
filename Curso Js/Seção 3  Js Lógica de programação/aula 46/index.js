// setInterval e setTimeout

function mostraHora() {
   let data = new Date();

   return data.toLocaleTimeString('pt-BR', {
    hour12: false
   })
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000)

setTimeout(function()  {
    clearInterval(timer)
}, 10000)  // parar ápos 10 segundos

setTimeout(function() {
 console.log('Olá mundo!');
}, 5000); // adicionar ápos 5 segundos msg

/*
function funcaoDoIntervalo(){
console.log(mostraHora());
}
setInterval(funcaoDoIntervalo, 1000);
*/