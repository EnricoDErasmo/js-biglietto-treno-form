/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/*
- chiedere numero di km
- chiedere età passeggero
- calcolare il prezzo totale del viaggio
?SE il passeggero ha meno di 18 anni:
 °sconto 20%
ALTRIMENTI se il passeggero ha 65 anni o più:
 °sconto 40%
*/


// Imposto variabili per dati utente
let userKmEl = document.getElementById("userKm");
let userAgeEl = document.getElementById("userAge");
let userNameEl = document.getElementById("userName");

let pricePerKm = 0.21

// Imposto una variabile per il button
let searchBtnEl = document.getElementById("searchBtn");

// Imposto variabili per i prezzi e sconti
let price; 
let discount;
let totalPrice;

// Creo un evento con click
searchBtnEl.addEventListener('click', function() {

    if (!isNaN(userKmEl.value) && !isNaN(userAge.value)) {


        if (userAgeEl.value < 18) {
        
            discount = ((price / 100) * 20).toFixed(2);
            
            totalPrice = (price - discount).toFixed(2);

            document.getElementById("discountRes").innerHTML = discount + " €";

            document.getElementById("tolalResult").innerHTML = totalPrice + " €";


        } else if (userAgeEl.value >= 65) {
        
            discount = ((price / 100) * 40).toFixed(2);
        
            totalPrice = (price - discount).toFixed(2);

            document.getElementById("discountRes").innerHTML = discount + " €";

            document.getElementById("tolalResult").innerHTML = totalPrice + " €";
  
    
        } else {
    
            price = (pricePerKm * userKmEl.value).toFixed(2);

            document.getElementById("discountRes").innerHTML = "Nessuno";

            document.getElementById("tolalResult").innerHTML = price + " €";
   
        }

        document.getElementById("nameRes").innerHTML = userNameEl.value;
        document.getElementById("distanceRes").innerHTML = userKmEl.value + " Km";
        document.getElementById("ageRes").innerHTML = userAgeEl.value + " Anni";
        
        

    }else{

        alert("Inserisci solo numeri!")

    }
    
    
});

document.getElementById("returnBtn").addEventListener("click", function() {
  
    userNameEl.value = "";
    userKmEl.value = "";
    userAgeEl.value = "";
    document.getElementById("nameRes").innerHTML = "";
    document.getElementById("distanceRes").innerHTML = "";
    document.getElementById("ageRes").innerHTML = "";

    if (userAgeEl.value < 18) {

        document.getElementById("discountRes").innerHTML = "";

        document.getElementById("tolalResult").innerHTML = "";


    } else if (userAgeEl.value >= 65) {

        document.getElementById("discountRes").innerHTML = "";

        document.getElementById("tolalResult").innerHTML = "";


    } else {

        document.getElementById("discountRes").innerHTML = "";

        document.getElementById("tolalResult").innerHTML = "";

    }

});




    


