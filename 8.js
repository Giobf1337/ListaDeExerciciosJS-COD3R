// func que recebe dois numeros inteiros maiores que zero, os multiplique sem usar operador de mult.

function mult(a, b){
    if(a>=0 && b>=0){
        var result = 0;
        while(b>0){
            result += a;
            b--;
        } return result;
    } else {
        console.log('numero invalido. Use numeros inteiros positivos');
    }

}

console.log(mult(0,5))