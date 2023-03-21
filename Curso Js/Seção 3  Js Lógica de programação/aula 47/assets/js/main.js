// new Date(0)
function relogio() {
function criaHoraDosSegundos(segundos) {
const data = new Date(segundos * 1000);
return data.toLocaleTimeString('pt-BR', {
    hour12: false, 
    timeZone: 'GMT' // UTC
});
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio() {
timer = setInterval (function() {
   segundos++;
   relogio.innerHTML = criaHoraDosSegundos(segundos);
}, 1000);
}

document.addEventListener('click' , function(e) { //(e) = evento
const el = e.target;    //el = elemento

if (el.classList.contains('zerar')){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    relogio.innerHTML ='00:00:00';
    segundos = 0;
}

if (el.classList.contains('pausar')){
    relogio.classList.add('pausado')    
    clearInterval(timer);

}

if (el.classList.contains('iniciar')){
    relogio.classList.remove('pausado')   
    clearInterval(timer);
    iniciaRelogio();
}
}); 
}
relogio();