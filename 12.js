// função que recebe obj como primeiro parametro e, como segundo parametro, o nome de uma propriedade
// contida nesse obj.
// retorne UMA COPIA* desse obj sem a propriedade apontada.

function propRemove(obj, prop){
    if(typeof obj == 'object'){
        var human2 = {...obj}
        delete human2[prop];
        human2.nose = 'tem msm'
        return human2;
    }else{
        console.log('Elemento inválido.\n Insira objeto.');
    }
}

const human = {
    eyes: 2,
    hair: true,
    upFingers: 10,
    downFigers: 10
}


console.log(propRemove(human, 'upFingers'))