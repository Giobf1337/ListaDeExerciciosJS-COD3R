// func que recebe array, e retorne o primeiro e ultimo elemento em um novo array
// >>>>>>>>########<<<<<<<<<<< continuo depois, na moral

function firsast(arr){
    if(typeof arr == "object"){
        var arr2 = [];

        arr2.push(arr.shift())
        arr2.push(arr.pop())
        
        return arr2;
    } else {
        return 'Entrada invalida. \nInsira um array.'
    }
}

var arr = [3, 4, 5, 6, 'damn', 'BMO']

console.log(firsast(arr))