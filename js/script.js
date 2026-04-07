'use strict';

const countdown = document.querySelector('#countdown');
const istruzioniDelGioco = document.querySelector('#instructions');
const listaNumeriDaMemorizzare = document.querySelector('#numbersList');
const formRisposte = document.querySelector('#answersForm');
const bottoneVerifica = document.querySelector('#btnConferma');
const messaggio = document.querySelector('#message');

let countdownValue = 15; //cambia il timer una volta finite le prove
let numeriIndovinati = 0;
let arrayNumeriCasuali = [];

// richiamo le funzione per far generare i numeri
getRandom();
// mostro i numeri subito
displayNumeriCasuali();
// nascondo subito il form altrimenti è brutto che carica all'inizio e poi scompare
formRisposte.classList.add('d-none');

// imposto l'intervallo del counter
const intervalId = setInterval(displayCounter, 1000);

console.log(arrayNumeriCasuali);

bottoneVerifica.addEventListener ('click', verficaNumeriCorrettiHandler);