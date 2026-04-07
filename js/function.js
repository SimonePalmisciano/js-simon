'use strict';


// funzione che mostra il counter e lo fa sparire quando è arrivato a 0
function displayCounter () {

    countdownValue--;

    if (countdownValue >= 0) {
        countdown.textContent = countdownValue;
    } else {
        clearInterval(intervalId);
        countdown.classList.add('d-none');
    }

}

function displayNumeriDaMemorizzare () {


}