'use strict';


// funzione che mostra il counter e lo fa sparire quando è arrivato a 0
function displayCounter() {

    countdownValue--;

    if (countdownValue >= 0) {
        countdown.textContent = countdownValue;
    } else {
        clearInterval(intervalId);
        countdown.classList.add('d-none');
        listaNumeriDaMemorizzare.classList.add('d-none');
    }

}

// dovrà mostrare i numeri all'interno della lista
// quindi bisognerà creare un innerHTML in cui inseriamo gli li figli di ul 
// e dentro li bisogna far comparire numeri casuali da 1 a 50
function getRandom() {

    return Math.floor(Math.random() * 50 + 1);

}

function displayNumeriCasuali() {

    listaNumeriDaMemorizzare.innerHTML = `<li>
            ${ getRandom()}
    </li>
    <li>
            ${ getRandom()}
    </li>
    <li>
            ${ getRandom()}
    </li>
    <li>
            ${ getRandom()}
    </li>
    <li>
            ${ getRandom()}
    </li>`;
}