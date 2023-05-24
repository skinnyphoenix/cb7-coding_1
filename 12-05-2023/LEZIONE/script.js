//INTERVALLI TEMPORALI

//SET TIMEOUT - DOPO TOT SECONDI, SVOLGI QUESTA FUNZIONE

console.log("Ho appena avviato il programma");
setTimeout(() => {
  console.log("Sono passati 5 secs");
}, 5000);

//SET INTERVAL

//IDENTICO FUNZIONAMENTO DELLA PRECEDENTE FUNZIONE MA LA SVOLGE IN LOOP
setInterval(() => {
  console.log("Sono passati 5 secs");
}, 5000);
