const menorValor = 0
const maiorValor = 99
const numeroSecreto = geradorDeNumero()

function geradorDeNumero() {
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.querySelector("#menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector("#maior-valor")
elementoMaiorValor.innerHTML = maiorValor

