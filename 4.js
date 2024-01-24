// função que recebe numero 1-12 e retorna string do mes  correspondente
var num;

// function numMes(num){
//     switch(num){
//         case 1:
//             return "Janeiro";
//             break;
//         case 2:
//             return "Fevereiro";
//             break;
//         case 3:
//             return "Março";
//             break;
//         case 4:
//             return "Abril";
//             break;
//         case 5:
//             return "Maio";
//             break;
//         case 6:
//             return "Junho";
//             break;
//         case 7:
//             return "Julho";
//             break;
//         case 8:
//             return "Agosto";
//             break;
//         case 9:
//             return "Septemb3r";
//             break;
//         case 10:
//             return "Octoberus";
//             break;
//         case 11:
//             return "Nov3mber";
//             break;
//         case 12:
//             return "DEZEMBRO PORRA";
//             break;

//         default:
//             return "Numero inválido. Favor selecionar um numero de 1 a 12."
//     }

// }

function numbMes (numb){
    var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
                'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return (numb >= 1 && numb <= 12) ? meses[numb - 1] : "Número de mês inválido";
            
}
var numb = 1
console.log(numbMes(numb));