// função que recebe um numero e retorna simbolo "+" na qntd de vzs correspondente ao numero >> 2-> "++"

function plus(num){
    if(Number.isInteger(num)){
        var elem = [];
        while(num>0){
            elem += "+"
            num--;
        }    
    }    
    return elem + " ("+elem.length+")";
}

console.log(plus(12))

