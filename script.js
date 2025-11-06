// Funzione principale del gioco
function pariDispari() {
  // 1. L'utente sceglie "pari" o "dispari"
  let userChoice;
  do {
    userChoice = prompt('Scegli di puntare su pari o dispari?').toLowerCase();
    if (userChoice !== 'pari' && userChoice !== 'dispari') {
      alert('Scelta non valida. Inserisci "pari" o "dispari".');
    }
  } while (userChoice !== 'pari' && userChoice !== 'dispari');
  console.log("L'utente ha scelto:", userChoice);
}

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', pariDispari);