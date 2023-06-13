const form = document.getElementById('calcolaForm');
const resetBtn = document.getElementById('resetBtn');
const recapContainer = document.getElementById('recapContainer');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  calcolaPrezzo();
});

resetBtn.addEventListener('click', function() {
  form.reset();
  recapContainer.innerHTML = '';
  recapContainer.classList.remove('show');
});

function calcolaPrezzo() {
  const nomeInput = document.getElementById('nome');
  const cognomeInput = document.getElementById('cognome');
  const kmInput = document.getElementById('km');
  const etaInput = document.getElementById('eta');
  
  const nome = nomeInput.value.trim();
  const cognome = cognomeInput.value.trim();
  const km = parseFloat(kmInput.value);
  const eta = parseInt(etaInput.value);
  
//   PREZZO BASE
  const prezzoKm = 0.21;    
  let prezzoTotale = km * prezzoKm; 
  
  if (eta < 18) {
    prezzoTotale *= 0.8; // SCONTO 20% MINORENNI
  } else if (eta >= 65) {
    prezzoTotale *= 0.6; // SCONTO 40% OVER 65
  }
  
  const carrozza = Math.floor(Math.random() * 9) + 1; // GENERA NUMERO CARROZZA
  const codiceBiglietto = Math.floor(Math.random() * 99999) + 1; // GENERA CODICE BIGLIETTO
  
  recapContainer.innerHTML = ` 
    <div class="recap-ticket">
      <h2>IL TUO BIGLIETTO:</h2>
      <p>Nome: ${nome}</p>
      <p>Cognome: ${cognome}</p>
      <p>Numero di chilometri da percorrere: ${km} km</p>
      <p>Età del passeggero: ${eta} anni</p>
      <p>Numero di carrozza: ${carrozza}</p>
      <p>Codice biglietto: ${codiceBiglietto}</p>
      <img id="qrCodeImg" src="img/qrcode.png" alt="QR Code" width="100">
      <h3>Prezzo del biglietto:</h3>
      <p>${prezzoTotale.toFixed(2)} €</p>
    </div>
  `;
  
  recapContainer.classList.add('show');

  console.log("Il prezzo del biglietto è: " + prezzoTotale.toFixed(2) + " €");
}