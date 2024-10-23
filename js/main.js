/**MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati),
 realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui
 l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali,
 per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.*/


const fullnameInput= document.getElementById(`input-fullname`)
const kmInput = document.getElementById(`input-km`)
const ageInput = document.getElementById(`input-age`)
const createButton = document.getElementById(`create-button`)
const cancelButton = document.getElementById(`cancel-button`)
const bigliettoForm = document.getElementById(`biglietto-form`)


const calcprice=()=>{
//PREZZO AL SINGOLO KILOMETRO
const priceForKm = 0.21;

//GLI SCONTI 
const discountUnder18 = 20
const discountOver65 = 40

let totalPrice = km*priceForKm

if (age===minorenne) {
  totalPrice =  totalPice-totalPice*(discountUnder18/100)
}
else if (age===over65) {
    totalPrice = totalPice-totalPice(discountOver65/100)
}
return totalPrice.toFixed(2);
};

const offert =()=>{
    if(age==="minorenne") return "sconto under 18"
    else if (age==="over65") return "sconto over 65"
    else return "biglietto intero"
};

// NUMERO CARROZZA E NUMERO TRENO

const trainCarriagGeneration=()=>Math.floor(Math.random()*10+1);
const trainNumberGeneration=()=>Math.floor(Math.random()*100000+1)


//SALVO IN VARIABILE FULLNAME, AGE E KM

const fullname = fullnameInput.Value;

const km = parseInt (kmInput.Value);

const age = ageInput.Value;


const totalPrice =calcprice;

const offer = offert();

const carriageNUmber=trainCarriagGeneration();

const trainNumber=trainNumberGeneration ();









