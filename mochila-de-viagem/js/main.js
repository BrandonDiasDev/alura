"use strict"

const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("item")) || [];


itens.forEach( (elemento) => {
    criaElemento(elemento);
})

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find( elemento => elemento.nome === nome.value );
    
    console.log(existe);

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe){
        itemAtual.id = existe.id;
        atualizaElemento(itemAtual);
        itens[existe.id] = itemAtual;
    } else{
        itemAtual.id = itens.length;
        criaElemento(itemAtual);
        itens.push(itemAtual);
    }

    localStorage.setItem("item",JSON.stringify(itens));

    nome.value = ""
    quantidade.value = "";
})

function criaElemento(itemAtual){

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = itemAtual["quantidade"];
    numeroItem.dataset.id = itemAtual.id;
    
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += itemAtual["nome"];

    lista.appendChild(novoItem);
}

function atualizaElemento (item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}