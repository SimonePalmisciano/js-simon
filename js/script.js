'use strict';

const countdown = document.querySelector('#countdown');
const intervalId = setInterval(displayCounter, 1000);

const istruzioniDelGioco = document.querySelector('#instructions');
const listaNumeriDaMemorizzare = document.querySelector('#numbersList');
const formRisposte = document.querySelector('#answersForm');

const bottoneVerifica = document.querySelector('#btnConferma');
const alertErrore = document.querySelector('#message');

let countdownValue = 5; //cambia il timer una volta finite le prove