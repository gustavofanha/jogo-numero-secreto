function verificaValorValido(chute) {
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
        return
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Inválido, o número secreto está entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente">Jogar Novamente</button>`
        
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long fa-bounce"></i></div>'
    } else {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long fa-bounce"></i></div>'
    }
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

function chuteInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
