// FORM CALCULATING THE PRICE OF A TRAIN TIKET

// INSERT VARIABLE PRICE KM, PRICE MINORS END PRICE OVER65
let price_km = 0.21;
console.log (price_km);
let price_minors = 0.21 / 5 * 4;
console.log (price_minors);
let price_over = 0.21 / 5 * 3;
console.log (price_over);

// INSERT CLICK BUTTON SUBMIT-GENERA
let button = document.getElementById('submit');

button.addEventListener ('click', function () {

    let km_travel = document.getElementById('km_travel').value;

    let age_passenger = document.getElementById('age_passenger').value;
    console.log (parseInt(age_passenger));

    if ((age_passenger) <= 17){
        document.getElementById('price_tiket').innerHTML += `${(km_travel * price_minors).toFixed(2)}` + "€";

    } else if ((age_passenger >= 18) && (age_passenger < 65)){ 
        document.getElementById('price_tiket').innerHTML += `${(km_travel * price_km).toFixed(2)}` + "€";

    }else if (age_passenger >= 65){
        document.getElementById('price_tiket').innerHTML += `${(km_travel * price_over).toFixed(2)}` + "€";
    }
});

