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

module.exports = {
  checkForWinner,
  check,
};

//This just a test case to see if it actually works
/*
x =[ [0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 1],
     [0, 0, 0, 0, 0, 0, 1],
     [0, 0, 0, 0, 0, 0, 1] ];
console.log(checkForWinner(x));
*/
