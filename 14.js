// function que recebe um Obj e retorna um array de arrays,
// sendo que cada array possui uma linha de chave/valor

function obj2array(obj) {
    if(typeof obj == 'object'){
        var result = [];

        for(var prop in obj){
            if(obj.hasOwnProperty(prop)){
                var line = [prop, obj[prop]];
                result.push(line);
            }
        }
    } else {
                console.log('Valor incorreto!\n Favor usar um Objeto')
            }
    return result;
}

// Exemplo de uso:
const arvore = {
    Folhas: true,
    Frutos: 12,
    Saude: 'Boa',
}

console.log(obj2array(arvore))
