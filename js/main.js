

const fullnameInput = document.getElementById(`input-fullname`)
const kmInput = document.getElementById(`input-km`)
const ageInput = document.getElementById(`input-age`)
const createButton = document.getElementById(`create-button`)
const cancelButton = document.getElementById(`cancel-button`)
const bigliettoForm = document.getElementById(`biglietto-form`)
const outputCardEl = document.getElementById(`output-card`)



bigliettoForm.addEventListener(`create`), (event)=>{
    
}


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

outputCardEl.innerHTML=htmlCard;
const htmlCard=

      <div class="row bg-white p-4">
       <div class="col-4 bg-secondary p-3">
       <h4>NOME PASSEGGERO</h4>
       <p>${fullname}</p>
       </div>
       <div class="col-2">
      <h5>offerta</h5>
      <p>${offer}</p>
       </div>
       <div class="col-2 ">
       <h5>carrozza</h5>
       <p>${carriageNUmber}</p>
       </div>
       <div class="col-2">
       <h5>codice cp</h5>
       <p>${trainNumber}</p>
       </div>
       <div class="col-2">
       <h5>costo biglietto</h5>
       <p>${totalPice}</p>
       </div>
      </div>
   
   








