
function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisValores (valor1, valor2){
    //1. Somar todos os valores
    const resultadoDaSomaDeDoisValores = somarDoisNumeros (valor1, valor2);

    //2. Dividir pela quantidade de números passados
    const resultadoDaMediaDeDoisValores = resultadoDaSomaDeDoisValores / 2;

    //3. Retornar o resultado
    return resultadoDaMediaDeDoisValores;
}

module.exports = {
    somarDoisNumeros
}