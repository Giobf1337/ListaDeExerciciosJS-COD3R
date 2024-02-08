// função que recebe array de numeros, e retorna um array somente com os numeros pares, e
// que tbm tenham indices pares

function doubleEven(arr){
    if (typeof arr == 'object') {
        var pares = [];

        for( i=0; i<=arr.length; i++){
            if ( i % 2 == 0 && arr[i] % 2 == 0){
                // pares += arr[i];
                pares.push(arr[i]);
            }
        }
    } else {
        console.log('Valor invalido!\n Utilize um vetor (array)');
    }
    return pares;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 110, 120]

console.log(doubleEven(numeros));