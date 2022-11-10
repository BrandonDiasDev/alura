"use strict"
function tocaSom(seletoraudio) {
    const elemento = document.querySelector(seletoraudio);

    if (elemento && elemento.localName === 'audio' ) {
        elemento.play();
    }
    else{
        alert('Puem Puem Pueeeem!');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let counter = 0; counter < listaDeTeclas.length; counter++){
    
    const tecla = listaDeTeclas[counter];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space")     {
        tecla.classList.add('ativa');
        }
        console.log(evento);
        console.log(evento.code);
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}