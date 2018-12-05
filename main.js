let grid = []; // making a two dimensional array (x,y)
// im putting turn in the global scope for my
// start game function to reference that value
let turn;


const startGame = () => {
  firstTurn();
  resetBoard();
  drawBoard();
};

// Creating a function to replace the setMessage function to a different string
const setMessage = (msg) => {
  document.getElementById('message').innerText = msg;
};

// making a function to determine whos first (x)
const firstTurn = () => {
  // defining the first play 1st move as x
  turn = 'Player 1';
  // created a message so that the player know x goes first
  setMessage(turn + " get's to start!")
};


const switchTurn = () => {
  if (turn == "Player 1") {
    turn = "Player 2";
    setMessage("It's " + turn + "'s turn");
  } else {
    turn = "Player 1";
    setMessage("It's " + turn + "'s turn");
  }
};

const nextMove = () => {
  
}


// When the window is loaded the functions within the startGame, are ran first
window.onload = startGame;

/*  MAKING A BOARD DEFAULT WHERE THE VALUES ARE NULL, TO REPRESENT A FRESH GAME */
const resetBoard = () => {
  grid = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ]
};


const drawBoard = () => {
  // grabbing table element
  let tableElements = document.querySelector('table');
  // iterate through rows
  grid.forEach((row, coordY) => {
    // creating tr element
    let rowElements = document.createElement('tr');
    // iterate through column in rows
    row.forEach((cell, coordX) => {
      // and create a table cell element
      let cellElements = document.createElement('td');
      // storing coordinates for the cells
      let cellCoordinates = [coordX, coordY];
      cellElements.className = 'inner-circle';
      // adding cells to rows
      rowElements.appendChild(cellElements);
    });
    // add the row to the table
    tableElements.appendChild(rowElements);
  });
};



//Function for the Win
const check = (position1, position2, position3, position4) => {
  return ((position1 != 0) && (position1 == position2) && (position1 == position3) && (position1 == position4));
}

const checkForWinner = (win) => {
  // Vertically Winning
  for (row = 0; row <= 2; row++)
    for (column = 0; column <= 6; column++)
      //Running to for loops one for the rows and the other for the columns.
      if (check(win[row][column], win[row + 1][column], win[row + 2][column], win[row + 3][column]))
        //This checks if there is a win the columns
        return win[row][column];

  // Horizontally Winning
  for (row = 0; row <= 5; row++)
    for (column = 0; column <= 3; column++)
      //Running to for loops one for the rows and the other for the columns.
      if (check(win[row][column], win[row][column + 1], win[row][column + 2], win[row][column + 3]))
        //This checks if there is a win the rows
        return win[row][column];

  // Diagonal one way (Bottom to Top)
  for (row = 0; row <= 2; row++)
    for (column = 0; column <= 3; column++)
      //Running to for loops one for the rows and the other for the columns.
      if (check(win[row][column], win[row + 1][column + 1], win[row + 2][column + 2], win[row + 3][column + 3]))
        //It checks the Diagonal from bottom to top.
        return win[row][column];

  // Diagonal the other way (Top to Bottom)
  for (row = 3; row <= 5; row++)
    for (column = 0; column <= 3; column++)
      //Running to for loops one for the rows and the other for the columns.
      if (check(win[row][column], win[row - 1][column + 1], win[row - 2][column + 2], win[row - 3][column + 3]))
        //It checks the Diagonal and it is from top to bottom.
        return win[row][column];

  return 'No Winner Yet';
  //If there is no winner yet it will just be 0 until there is a winner
};

// When the user clicks on div, open the popup
const instructions = () => {
  console.log('im here')
  const popup = document.getElementById("instructionPopup");
  popup.classList.toggle("showInstructions");
}
/*
module.exports = {
  checkForWinner,
  check,
  instructions,
};
*/