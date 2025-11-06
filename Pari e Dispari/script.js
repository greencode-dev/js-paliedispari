// Funzione per generare un numero random da 1 a 5
function getRandomNumber() {
  // Genera un numero casuale tra 1 e 5
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  // Stampa in console il numero generato per il computer
  console.log('Numero casuale CPU generato:', randomNumber);
  return randomNumber;
}

// Funzione per stabilire se un numero è pari
function isEven(number) {
  // Ritorna true se il numero è pari, altrimenti false
  return number % 2 === 0;
}

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
    userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
      alert('Numero non valido. Inserisci un numero da 1 a 5.');
    }
  } while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);
  console.log("L'utente ha scelto il numero:", userNumber);

  // 3. Generiamo un numero random per il computer
  const cpuNumber = getRandomNumber();
  alert('Il computer ha scelto: ' + cpuNumber);

  // 4. Sommiamo i due numeri
  const sum = userNumber + cpuNumber;
  console.log(`La somma di ${userNumber} + ${cpuNumber} è:`, sum);

  // 5. Stabiliamo se la somma è pari o dispari
  const result = isEven(sum) ? 'pari' : 'dispari';
  console.log(`Il risultato (${sum}) è ${result}.`);

  // 6. Dichiariamo chi ha vinto
  if (result === userChoice) {
    alert(`Hai vinto! La somma dei numeri scelti è ${sum} (${result})`);
    console.log("L'utente ha vinto!");
  } else {
    alert(`Hai perso! La somma dei numeri scelti è ${sum} (${result})`);
    console.log("L'utente ha perso!");
  }
}

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', pariDispari);
