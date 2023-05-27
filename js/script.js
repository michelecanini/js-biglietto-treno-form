// PROGRAMMA PER IL CALCOLO DEL PREZZO DEL BIGLIETTO

// INSERIMENTO COSTANTE DEL PREZZO STANDARD AL KM
const price_km = 0.21;

// INSERIMENTO VARIABILE PREZZO PER MINORI -20%
let price_minors = 0.21 / 5 * 4;

// INSERIMENTO PREZZO OVER65 -40%
let price_over = 0.21 / 5 * 3;

// INSERIMENTO DEL BOTTON SUBMIT-GENERA E DELLA FUNZIONE CLICK
let button = document.getElementById('submit');
button.addEventListener ('click', function () {

    // INSERIMENTO VARIABILI DEI KM DI VIAGGIO E DELL'ETA DEL PASSEGGERO
    let km_travel = parseInt(document.getElementById('km_travel').value);
    let age_passenger = parseInt(document.getElementById('age_passenger').value);

    let price_tiket = km_travel * price_km;
    let message = '';

    if(isNaN(km_travel) === false){
        if(age_passenger === 0){
            message += `${(price_tiket.toFixed(2))}€  tariffa standard`;
        }
        else if(age_passenger === 1){
            message += `${(km_travel * price_minors).toFixed(2)}€  hai ricevuto uno sconto del 20%`;
        }
        else{
            message += `${(km_travel * price_over).toFixed(2)}€  hai ricevuto uno sconto del 40%`;
        }
    }
    else{
        message += 'Inserire dei valori validi';
    }

    document.getElementById('price_tiket').innerText = message;

    // VARIABILE ED INSERIMENTO NOME E COGNOME PASSEGGERO
    let name_complete = document.getElementById('name_complete').value;
    document.getElementById('hello_user').innerHTML = `${name_complete}`;

    // VARIABILE ED INSERIMENTO OFFERTA
    let offert = document.getElementById('offert').value;
    document.getElementById('offert_user').innerHTML = `${name_complete}`;
    
});
