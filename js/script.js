'use strict';

const countdown = document.querySelector('#countdown');
const intervalId = setInterval(displayCounter, 1000);

const istruzioniDelGioco = document.querySelector('#instructions');

const listaNumeriDaMemorizzare = document.querySelector('#numbersList');

const formRisposte = document.querySelector('#answersForm .form-control').textContent;

const bottoneVerifica = document.querySelector('#btnConferma');
const messaggio = document.querySelector('#message');

let countdownValue = 5; //cambia il timer una volta finite le prove
let numeriIndovinati = 0;

let arrayNumeriCasuali = [];
getRandom();


console.log(arrayNumeriCasuali);
console.log(formRisposte);

