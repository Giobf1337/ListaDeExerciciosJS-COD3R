// func que recebe um bool ou int e retorna o inverso --> in: true > out: false // in: 1 > out: -1
// e se receber valor de tipo não mencionado, mencionar no retorno

function negative(val){
    if(typeof val === "boolean"){
        return (!val);
    }if(typeof val === "number"){
        return (val*-1);
    }else{
        return "Valor invalido (valor informado:"+typeof val+"). Favor usar boolean ou integer."
    }
}

var val = 1;
console.log(negative(val))