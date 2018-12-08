let grid = []; // making a two dimensional array (x,y)
// im putting turn in the global scope for my
// start game function to reference that value
let turn;
const switchTurn = () => {
  if (turn == "Player 1") {
    turn = "Player 2";
    setMessage("It's " + turn + "'s turn");
  } else {
    turn = "Player 1";
    setMessage("It's " + turn + "'s turn");
  }
};

const startGame = () => {
  firstTurn();
  resetBoard();
  drawBoard();
  yellowButton();
  blueButton();
};
// When the window is loaded the functions within the startGame, are ran first
window.onload = startGame;

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

const blueButton = () => {
  let buttons = document.getElementById('boardColor');
    boardColor.addEventListener("click", function() {
      document.querySelector('table').style.background = 'blue';
     })
  }

window.addEventListener("load",function() {
  blueButton();
});

const yellowButton = () => {
  let buttons = document.getElementById('backgroundColor');
    backgroundColor.addEventListener("click", function() {
      document.querySelector('html').style.background = 'yellow';
     })
  }

window.addEventListener("load",function() {
  yellowButton();
});


const animation = () => {
  let Player1 = document.getElementsById("Player1");
  let Player2 = document.getElementsById("Player2");
}


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
const buttonElement = document.selectElementByClassName("fa fa-arrow-down");
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    alert('Element clicked through handleEvent property!');
  }
});
*/

/*
const disc = null;
  const init = () => {
     imgObj = document.getElementById('chip');
     imgObj.setAttribute("style", "position:relative; left: '0px;");
  }

function moveRight(){
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

  window.onload =init;
*/
//declare dropChip function
function dropChip() {
	//grab functions global variables
	//create new chip to drop
	let placedChip = document.createElement('div');
	//create var to hold the amount of spots open in the column
	let spotsOpen = 0;
	//put chip together
	placedChip.classList.add('placed-chip');

	//call place chip funcion and pass it the current td
	placeChip(this);
	//call function to change chip
	changeChip();

	//declare placeChip function
	function placeChip(cell) {
		//grab current column
		let currentColumn = cell.className;
		//create array to hold each td with the currentColumn
		let filterArray = [];

		//loop through all td's
		for(let i = 0; i < td.length; i++) {
			//if td has column add td to filterArray
			if(td[i].classList.contains(currentColumn)) {
				filterArray.push(td[i]);
			}
		}
		//loop through filterArray
		for(let i = 0; i < filterArray.length; i++) {
			//create boolean var to see if td in filterArray already has chip
			let hasChip = filterArray[i].hasChildNodes();
			//if cell doesn't have div.chip then placeChip
			if(!hasChip) {
				//place chip
				//if the td below td[i] is empty, chip will be blessed in that td
				filterArray[i].appendChild(placedChip);
				// increase spotsOpen
				spotsOpen++;
			}
		}
		//adjust placedChip animation to account for chips already in column
		switch(spotsOpen) {
			//6 spots open
			case 6:
				placedChip.style.animationName = 'animate';
				break;
			//5 spots open
			case 5:
				placedChip.style.animationName = 'one-chip';
				break;
			//4 spots open
			case 4:
				placedChip.style.animationName = 'two-chip';
				break;
			case 3:
				placedChip.style.animationName = 'three-chip';
				break;
			case 2:
				placedChip.style.animationName = 'four-chip';
				break;
			case 1:
				placedChip.style.animationName = 'five-chip';
				break;
		}
	}


	//declare changeChip function
	function changeChip() {
		//if chip isn't yellow then chip is now yellow
		if(!chip.classList.contains('yellow')&&!inner.classList.contains('inner-yellow')) {
			chip.classList.add('yellow');
			placedChip.classList.remove('yellow');
		}
		//else it's red
		else {
			chip.classList.remove('yellow');
			placedChip.classList.add('yellow');
		}
	}

}
