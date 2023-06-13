document.getElementById('calcolaBtn').addEventListener('click', calcolaPrezzo);

function calcolaPrezzo() {
  const kmInput = document.getElementById('km');
  const etaInput = document.getElementById('eta');
  
  const km = parseFloat(kmInput.value);
  const eta = parseInt(etaInput.value);
  
  const prezzoKm = 0.21;
  let prezzoTotale = km * prezzoKm;
  
  if (eta < 18) {
    prezzoTotale *= 0.8; // SCONTO MINORENNI
  } else if (eta >= 65) {
    prezzoTotale *= 0.6; // SCONTO OVER 65
  }
  
  const risultatoElement = document.getElementById('risultato');
  risultatoElement.textContent = "Il prezzo del biglietto è: " + prezzoTotale.toFixed(2) + " €";
  
  console.log("Il prezzo del biglietto è: " + prezzoTotale.toFixed(2) + " €");
}