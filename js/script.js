// FORM CALCULATING THE PRICE OF A TRAIN TIKET

// INSERT VARIABLE PRICE KM, PRICE MINORS END PRICE OVER65
const price_km = 0.21;
let price_minors = 0.21 / 5 * 4;
let price_over = 0.21 / 5 * 3;

// INSERT NAME END LASTNAME
//let name_complete = document.getElementById('name_complete').value;
//console.log (name_complete);

// INSERT CLICK BUTTON SUBMIT-GENERA END CONDITIONAL IF
let button = document.getElementById('submit');

button.addEventListener ('click', function () {

    let km_travel = parseInt(document.getElementById('km_travel').value);
    let age_passenger = parseInt(document.getElementById('age_passenger').value);

    let price_tiket = km_travel * price_km;
    let message = '';

    if(age_passenger === 0){
        message += `Il prezzo del biglietto è di: ${(price_tiket.toFixed(2))}€`;
    }
    else if(age_passenger === 1){
        message += `Hai ricevuto uno sconto del 20%, il prezzo del biglietto è di: ${(km_travel * price_minors).toFixed(2)}€`;
    }
    else{
        message += `Hai ricevuto uno sconto del 40%, il prezzo del biglietto è di: ${(km_travel * price_over).toFixed(2)}€`;
        console.log(km_travel * price_over.toFixed(2));
    }
    document.getElementById('price_tiket').innerText = message;
});
