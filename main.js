let gameActive = false; // I want the game to not be active untill someone clicks the board
let active_player = "Red";
let tablerow;





// Function that is checking the game status, and changing between Players
const gameStatus = (column) => {

  for (let i = tablerow[column].length - 1; i > 0; i--) {

    if (tablerow[column][i].innerHTML == "") {

      tablerow[column][i].innerHTML = active_player;
      tablerow[column][i].className += " playerColor_" + active_player;
      if (active_player == "Black") {
        active_player = "Red";
      } else {
        active_player = "Black";
      }
      break;
    }
  }
}

const timer = (column) => {
  gameStatus(column);
  if (checkWinner()) {
    window.setTimeout(clearTable, 1000);
    // crearTabla();
  } else if (staleMate()) {
    alert("Stalemate");
    window.setTimeout(clearTable, 500);
  }
}


// created a function that will reset the board when the window is loaded and also clear the contents(color)
const clearTable = () => {
  tablerow = [];
  let newTable = "";
  for (let i = 1; i <= 7; i++) {
    newTable += "<div id='column" + i + "' class='column' onclick='timer(" + i + ")'>";
    tablerow[i] = new Array();
    for (let j = 1; j <= 6; j++) {
      newTable += "<div id='pos" + i + "-" + j + "' class='col'></div>";
      tablerow[i][j] = document.getElementById("pos" + i + "-" + j);
    }
    newTable += "<div></div></div>";
  }
  document.getElementById("table").innerHTML = newTable;
  for (let i = 1; i <= 7; i++) {
    tablerow[i] = new Array();
    for (let j = 1; j <= 6; j++) {

      tablerow[i][j] = document.getElementById("pos" + i + "-" + j);
    }
  }
}

window.onload = clearTable();


//check for the winning combinations horizontally
function checkHorizontal(row, column, player) {
  let winCombination = 0;
  for (let i = column; i < tablerow[1].length; i++) {
    if (tablerow[row][i].innerHTML == player) {
      winCombination++;
    } else {
      winCombination = 0;
    }
    if (winCombination == 4) {
      return true;
    }
  }
  return false;
}


//Checking for the diagonals
function checkDiagonalDown(row, column, player) {
  let k;
  let winCombination = 0;
  for (let i = row, k = column; i < tablerow.length && k < tablerow[1].length; i++, k++) {
    if (tablerow[i][k].innerHTML == player) {
      winCombination++;
    } else {
      winCombination = 0;
    }
    if (winCombination == 4) {
      return true;
    }
  }
  return false;
}

function checkDiagonalUp(row, column, player) {
  let k;
  let winCombination = 0;
  for (let i = row, k = column; i > 0 && k < tablerow[1].length; i--, k++) {
    if (tablerow[i][k].innerHTML == player) {
      winCombination++;
    } else {
      winCombination = 0;
    }
    if (winCombination == 4) {
      return true;
    }
  }
  return false;
}

//Checking for the vertical combinations
function checkVertical(row, column, player) {
  let winCombination = 0;
  for (let i = row; i < tablerow.length; i++) {
    if (tablerow[i][column].innerHTML == player) {
      winCombination++;
    } else {
      winCombination = 0;
    }
    if (winCombination == 4) {
      return true;
    }
  }
  return false;
}



// When the user clicks on div, open the popup
const instructions = () => {
  const popup = document.getElementById("instructionPopup");
  popup.classList.toggle("showInstructions");
};
/*
module.exports = {
  checkForWinner,
  check,
  instructions,
};
*/






/*
let grid = []; // making a two dimensional array (x,y)
// im putting turn in the global scope for my
// start game function to reference that value
let turn;

let playerOne = true;

const startGame = () => {
  resetBoard();
  drawBoard();
  start();
};
// When the window is loaded the functions within the startGame, are ran first
window.onload = startGame;

// Creating a function to replace the setMessage function to a different string
const setMessage = (msg) => {
  document.getElementById('message').innerText = msg;
};


const blueButton = () => {
  let buttons = document.getElementById('boardColor');
    boardColor.addEventListener("click", function() {
      document.querySelector('table').style.background = 'blue';
     })
  }
  const yellowButton = () => {
     buttons = document.getElementById('backgroundColor');
      backgroundColor.addEventListener("click", function() {
        document.querySelector('html').style.background = 'yellow';
       })
    }


  window.addEventListener("load",function() {
    yellowButton();
    blueButton();
  });





const start = () => {
  for (let i = 0; i < 42; i++) {
    const disc = document.createElement("div");
    disc.className = 'spacing'
    disc.style.cssFloat = "left";
    disc.style.width = "100px";
    disc.style.height = disc.style.width;
    disc.style.backgroundColor = "white";
    disc.style.borderRadius = "100%";
    disc.style.margin = "8px";


    disc.onclick = () => {
      if (playerOne == true) {
        setMessage(`It Is Black Players Turn`)
        event.target.style.backgroundColor = "Black";
        playerOne = false;
      } else {
        setMessage(`It Is Red Players Turn`)
        event.target.style.backgroundColor = "red";
        playerOne = true;
      }
    }

    document.getElementById("gameBoard").appendChild(disc);
  }
}
/*  MAKING A BOARD DEFAULT WHERE THE VALUES ARE NULL, TO REPRESENT A FRESH GAME */
/*
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
      // adding cells to rows
      rowElements.appendChild(cellElements);
    });
    // add the row to the table
    tableElements.appendChild(rowElements);
  });
};



// This is a function that adds blue dots on the screen if we can place them *
/*
//
window.addEventListener("click", event => {
  let dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});
*/

/*
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

*/
