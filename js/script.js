'use strict';

const countdown = document.querySelector('#countdown');
const istruzioniDelGioco = document.querySelector('#instructions');
const listaNumeriDaMemorizzare = document.querySelector('#numbersList');
const formRisposte = document.querySelector('#answersForm');
const bottoneVerifica = document.querySelector('#btnConferma');
const messaggio = document.querySelector('#message');

let countdownValue = 5; //cambia il timer una volta finite le prove
let numeriIndovinati = 0;
let arrayNumeriCasuali = [];
getRandom();
displayNumeriCasuali();
formRisposte.classList.add('d-none');

const intervalId = setInterval(displayCounter, 1000);
// potrei inserire qui il display numeri casuali e nasconderli
// dopo quando è finito il countdown
// dovrei mettere che quando setInterval è disattivato o è fermo


console.log(arrayNumeriCasuali);

bottoneVerifica.addEventListener ('click', verficaNumeriCorrettiHandler);