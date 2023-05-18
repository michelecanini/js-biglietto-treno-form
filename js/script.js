// FORM CALCULATING THE PRICE OF A TRAIN TIKET

// INSERT CLICK BUTTON SUBMIT-GENERA
let submit = document.getElementById('submit');
submit.addEventListener ('click', function () {

    let km_travel = document.getElementById('km_travel').value;
console.log(km_travel);

    let age_passenger = document.getElementById('age_passenger').value;
console.log(age_passenger);
});

// INSERT VARIABLE PRICE KM, PRICE MINORS END PRICE OVER65
let price_km = 0.21;
console.log (price_km);
let price_minors = 0.21 / 5 * 4;
console.log (price_minors);
let price_over = 0.21 / 5 * 3;
console.log (price_over);
