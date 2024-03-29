// Declaração do função (Function hosting)
falaOi();
function falaOi() {
    console.log('Oie');
}

// First-class objects (Objetos de primerira classe)
// Function expression 
const souUmDado = function() {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = ()  => {
    console.log ('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
   // falar: function() {  // atualizada
    falar() {
        console.log('Estou falando...')
    }
}
obj.falar();