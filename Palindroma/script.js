const playButton = document.getElementById('play-button');
playButton.addEventListener('click', palindroma);

// Controlla se la parola inserita è palindroma in modo più conciso
function isPalindroma(parola) {
  const parolaPulita = parola.toLowerCase().replace(/\s+/g, '');
  // Log della parola inserita pulita dagli spazi
  console.log('Parola pulita:', parolaPulita);
  // Log della parola pulita e invertita
  const parolaInvertita = parolaPulita.split('').reverse().join('');
  console.log('Parola invertita:', parolaInvertita);
  return parolaPulita === parolaInvertita;
}

// Funzione principale per l'interazione con l'utente
function palindroma() {
  const parolaUtente = prompt('Inserisci una parola per verificare se è palindroma:');
  // Log della parola inserita dall'utente
  console.log("Parola inserita dall'utente:", parolaUtente);

  if (parolaUtente) {
    const risultatoCheck = isPalindroma(parolaUtente);
    // Log del risultato del check
    console.log('La parola è palindroma?', risultatoCheck);
    if (risultatoCheck) {
      alert(`La parola "${parolaUtente}" è palindroma!`);
    } else {
      alert(`La parola "${parolaUtente}" non è palindroma.`);
    }
  } else {
    alert('Non hai inserito nessuna parola.');
  }
}
