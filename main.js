let grid = []; // making a two dimensional array (x,y)

const startGame = () => {
  resetBoard();
  drawBoard();
};
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
    ]};


const drawBoard = () => {
  // grabbing table element
  const tableElements = document.querySelector('table');
  // iterate through rows
  grid.forEach((row, coordY) => {
    // creating tr element
    const rowElements = document.createElement('tr');
    // iterate through column in rows
    row.forEach((cell, coordX) => {
      // and create a table cell element
      const cellElements = document.createElement('td');
      // storing coordinates for the cells
      const cellCoordinates = [coordX, coordY];
      cellElements.className = 'outer'
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
