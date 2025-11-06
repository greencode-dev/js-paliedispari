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

  // 2. L'utente inserisce un numero da 1 a 5
  let userNumber;
  do {
    userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
      alert('Numero non valido. Inserisci un numero da 1 a 5.');
    }
  } while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);
  console.log("L'utente ha inserito il numero:", userNumber);
}

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', pariDispari);
