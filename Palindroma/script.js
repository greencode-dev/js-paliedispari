const playButton = document.getElementById('play-button');
playButton.addEventListener('click', palindroma);

function isPalindroma(parola) {
  const parolaInserita = parola.toLowerCase().replace(/\s/g, '');
  const parolaInvertita = parolaInserita.split('').reverse().join('');
  console.log('Parola invertita:', parolaInvertita);
  const risultato = parolaInserita === parolaInvertita;
  console.log('La parola è palindroma?', risultato);
  return risultato;
}

function palindroma() {
  const parolaUtente = prompt('Inserisci una parola per verificare se è palindroma:');
  console.log("Parola inserita dall'utente:", parolaUtente);

  if (parolaUtente) {
    const risultatoCheck = isPalindroma(parolaUtente);
    console.log('Risultato del check:', risultatoCheck);
    if (risultatoCheck) {
      alert(`La parola "${parolaUtente}" è palindroma!`);
    } else {
      alert(`La parola "${parolaUtente}" non è palindroma.`);
    }
  } else {
    alert('Non hai inserito nessuna parola.');
  }
}
