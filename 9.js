// função recebe dois parametros, o primeiro é o elemento que repetirá, o segundo é o numero de vezes que repete
// retornando um array.

function repetir(a, b){
    var elements = [];
    for(i=0; i<b; i++){
        elements.push(a);
    }
    return elements;
}

console.log(repetir('skrr', 3))