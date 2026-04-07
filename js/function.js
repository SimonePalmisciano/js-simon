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

    countdown.textContent = countdownValue;

    countdownValue--;

    if (countdownValue < 0) {
        clearInterval(intervalId);
        countdown.classList.add('d-none');
        listaNumeriDaMemorizzare.classList.add('d-none');
        istruzioniDelGioco.textContent = 'Adesso inserisci i numeri che ricordi!!';
        formRisposte.classList.remove('d-none');
    }

}


// inietta i numeri casuali figli di 'li' all'interno dell'html
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

// creiamo una funzione che verifichi se i numeri inseriti dall'utente 
// sono corretti
function verficaNumeriCorrettiHandler(event) {
    event.preventDefault();
    // prendo tutti gli input
    const inputElements = document.querySelectorAll('#answersForm .form-control');
    // array dove salvo i valori inseriti
    const valoriInseriti = [];

    for (let z = 0; z < inputElements.length; z++) {
        const input = inputElements[z];     // l'input alla posizione z
        const value = input.value;          // stringa inserita dall'utente
        valoriInseriti.push(Number(value)); // la trasformo subito in numero
    }

    numeriIndovinati = 0;
    // 4. Confronto ogni numero inserito con i numeri casuali
    for (let i = 0; i < valoriInseriti.length; i++) {
        const numeroUtente = valoriInseriti[i];
        if (arrayNumeriCasuali.includes(numeroUtente)) {
            numeriIndovinati++;
        }
    }

    messaggio.textContent = `Hai indovinato: ${numeriIndovinati} numeri su 5.`
}
