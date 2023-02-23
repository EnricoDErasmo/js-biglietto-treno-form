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
let userKm = parseInt(document.getElementById("userKm").value);
let userAge = parseInt(document.getElementById("userAge").value);

// Imposto una variabile per il button
let searchBtnEl = document.getElementById("searchBtn");

// Imposto variabili per i prezzi e sconti
let price = (0.21 * userKm).toFixed(2);
let discount;
let totalPrice;

// Creo un evento con click
searchBtnEl.addEventListener('click', function() {

    if (userAge < 18) {
    
        discount = ((price / 100) * 20).toFixed(2);
        
        totalPrice = (price - discount).toFixed(2);

        console.log(totalPrice);
    
    } else if (userAge >= 65) {
    
        discount = ((price / 100) * 40).toFixed(2);
    
        totalPrice = (price - discount).toFixed(2);

        console.log(totalPrice);

    } else {

        totalPrice = price

        console.log(totalPrice);

    }
});




    


