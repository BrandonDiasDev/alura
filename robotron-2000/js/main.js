"use strict"
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const robotrom_element = document.querySelector("#robotrom");
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
// const peca = document.querySelectorAll("[data-pecas]");


controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.pecas);
    })

})

robotrom_element.addEventListener("click", (evento) => {
});

function manipulaDados(operacao, controle) {

    const peca = controle.querySelector("[data-contador]");


    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;

    } else if (operacao === "+"){
    peca.value = parseInt(peca.value) + 1;
    } else{
        alert("Operação não definida.");
    }
}

function atualizaEstatisticas(peca_escolhida) {

    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca_escolhida][elemento.dataset.estatistica];
        console.log(elemento.textContent)
        console.log(pecas[peca_escolhida][elemento.dataset.estatistica])
    })
}