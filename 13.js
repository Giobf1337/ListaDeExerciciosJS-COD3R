// funcao recebe um array e só retorna os numeros presentes neste array

function onlyNum(arr) {
    if (Array.isArray(arr)) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (!Number.isInteger(arr[i])) {
                arr.splice(i, 1); // Remove um elemento não inteiro, caso não seja um inteiro
            }
        }
    } else {
        console.log('Valor inválido.\nInsira um array');
    }
    return arr;
}

var arr = ['a', 3, 5, 9, 23, 'ceita', 44, 'ta on'];

console.log(onlyNum(arr));
