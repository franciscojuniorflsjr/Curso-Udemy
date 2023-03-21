const verdadeiro = true;

// Let tem escopo de bloco {....bloco  }
// Var só tem escopo de função


let nome = 'Francisco'; // Criando
var nome2 = 'Junior'    //Criando


if (verdadeiro) {
    let nome = 'Lopes' // Criado
    var nome2 = 'Paulo' //Redeclarado  
    console.log(nome, nome2)

    if (verdadeiro) {
        var nome2 = 'Francisco' //Redeclarado  
        let nome = 'Outra coisa'
        
    }
}
console.log(nome, nome2)
