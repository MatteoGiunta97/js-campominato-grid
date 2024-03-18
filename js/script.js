/*

Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
ed emetto un messaggio in console con il numero della cella cliccata.

Bonus:
Aggiungere una select accanto al bottone di generazione, 
che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100,
 divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81,
 divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49,
 divise in 7 caselle per 7 righe;

*/


const mainGrid = document.querySelector('#ms-grid');
const playBtn = document.querySelector('#ms-play-btn');
playBtn.addEventListener('click', createNewGame);

// Funzione che gestisce il gioco
function createNewGame() {
    
    // Svuoto la griglia quando viene generata una nuova partita
    mainGrid.innerHTML = '';

    // Quando l'utente clicca play leggo il valore della select
    const level = document.querySelector('#ms-level').value;

    console.log(level);
    // se il valore della select è facile 100 celle (10 per riga)
    // se il valore della select è media 81 celle (9 per riga)
    // se il valore della select è difficle 49 celle (7 per riga)
    let numberOfSquares;
    let numberOfCellsPerRow;
    if (level=== 'facile') {
        numberOfSquares = 100;
        numberOfCellsPerRow = 10;
    } else if (level === 'media') {
        numberOfSquares = 81;
        numberOfCellsPerRow = 9;
    } else {
        numberOfSquares = 49;
        numberOfCellsPerRow = 7;
    }

    console.log(numberOfSquares);

    // Per numberOfSquares volte voglio creare uno square
    for (let i = 1; i <= numberOfSquares; i++) {
        const thisNumber = i;

        const square = generateSquare(thisNumber, numberOfCellsPerRow);
        square.addEventListener('click', function() {
            // Faccio alert del numero
            alert(thisNumber);
            // Aggiungo la classe clicked
            this.classList.add('ms-clicked');
        });
        mainGrid.append(square);
    }
}

// Genera un elemento del DOM che rappresenta uno square
// number -> il numero intero della cella
// cellsPerRow -> numero intero che rappresenta quanti quadrati ci saranno per row
// return: un elemento del DOM che rappresenta il singolo square creato
function generateSquare(number, cellsPerRow) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('ms-square')
    newSquare.innerHTML = number;
    newSquare.style.width = `calc(100% / ${cellsPerRow})`;
    newSquare.style.height = `calc(100% / ${cellsPerRow})`;

    return newSquare;
}