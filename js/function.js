'use strict';

// genera numeri casuali e li pusha in un array vuoto
function getRandom() {

    for (let z = 0; z < 5; z++) {
        const element = Math.floor(Math.random() * 50 + 1);

        arrayNumeriCasuali.push(element)
    }

}

// funzione che mostra il counter e lo fa sparire quando è arrivato a 0
// e mostra i numeri casuali generati
function displayCounter() {

    countdownValue--;

    if (countdownValue >= 0) {
        countdown.textContent = countdownValue;
        displayNumeriCasuali();
    } else {
        clearInterval(intervalId);
        countdown.classList.add('d-none');
        listaNumeriDaMemorizzare.classList.add('d-none');
    }

}

function displayNumeriCasuali() {

    listaNumeriDaMemorizzare.innerHTML = `<li>
            ${arrayNumeriCasuali[0]}
    </li>
    <li>
            ${arrayNumeriCasuali[1]}
    </li>
    <li>
            ${arrayNumeriCasuali[2]}
    </li>
    <li>
            ${arrayNumeriCasuali[3]}
    </li>
    <li>
            ${arrayNumeriCasuali[4]}
    </li>`;
}

function mostraMessaggio() {

    if (s) {

    }
}