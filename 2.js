// receber uma idade em anos e retornar em dias

function idadeEmDias(idadeEmAnos) {
    // Verifica se a entrada é um número inteiro positivo
    if (!Number.isInteger(idadeEmAnos) || idadeEmAnos < 0) {
        return "Por favor, forneça uma idade válida em anos.";
    }

    // Converte a idade de anos para dias
    var idadeEmDias = idadeEmAnos * 365;

    return idadeEmDias;
}

var idadeUsuario = 82;
var resultado = idadeEmDias(idadeUsuario);
console.log("Idade em dias: " + resultado);