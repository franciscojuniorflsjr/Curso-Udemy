// Segunda parte
// Tratando e lançando erros (try, catch, throw)


function retonaHora(data){
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando instância de Date.');
  }
if (!data) {
    data = new Date();
}
return data.toLocaleTimeString('pt-BR',{

})
}
try {
    const data = new Date('01-01-1970 12:48:12')
    const hora = retonaHora()
    console.log(hora)
} catch(e) {
// Tratar erro
// console.log(e)
} finally {
  console.log('Tenha um bom dia.')  
}


/*
try {
    // console.log(a)  // criando erro ativando catch
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou um erro')
    console.log('Fechei o arquivo')

    try {
    console.log(b)    
    } catch(e) {
    console.log('Deu erro')    
    } finally {
    console.log('Também sou finally')    
    }

}   catch (e) {
     console.log('Tratando o erro')
}   finally {
    console.log('FINALLY: Eu sempre sou executado')       
}
*/

/*

try {
// É executa quando não há erros
} catch (e) {
// É executado quando há erros pode ser chamado de (err) (erro)
} finally {
    // Sempre é executado 
}

*/