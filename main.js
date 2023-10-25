/*
1. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
2. Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo.
3. In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
4. Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
5. Crea un array di 10 oggetti che rappresentano una mela, indicando per ognuna varietà, peso e diametro.
Calcola quanto pesano tutte le mele.
BONUS Dividi in due array separati le mele con diametro maggiore di 10cm. Infine stampa separatamente quanto pesano i due gruppi di mele.
 */

//1. Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

/*
let lista = [];
let somma = 0;

for (let i = 0; somma < 50; i++) {
  let numeroUtente = prompt("Scrivi un numero");
  lista.push(numeroUtente);
  let element = lista[i];
  somma += Number(element);
  if (somma >= 50) {
    alert("Troppo alto");
    console.log(lista);
  }
}
*/

/*
2. Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo.
*/

let lista = [];
let numeroUtente = Number(prompt("Digita un numero"));

for (let n = 1; n <= numeroUtente; n++) {
  for (let i = 1; i <= 10; i++) {
    let numeriRandom = Math.round(Math.random() * 100);
    lista.push(numeriRandom);
  }
  alert(lista);
}

// 3. In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

/*
let lista = ["Anna", "Andrea", "Antonio", "Giovanni", "Elisa"];
let nomeInvitato = prompt("Scrivi il tuo nome");
*/

//4. Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

/*
let promptUtente = prompt("Dimmi un numero di 4 cifre");
let numero = parseInt(promptUtente);
let numeroString = numero.toString();

if (isNaN(numeroString) || numeroString.length !== 4) {
  alert("Non hai inserito un numero di 4 cifre");
} else {
  let somma = 0;
  for (let i = 0; i < 4; i++) {
    let char = numeroString[i];
    somma += Number(char);
  }

  alert(somma);
}
*/
