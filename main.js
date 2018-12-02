//Function for the Win
/*
const winFunc = () => {
    let row;
    let column;
    let pos1;
    let pos2;
    let pos3;
    let pos4;
    let maxMoves = rows * columns;
};
*/
const check = (position1, position2, position3, position4) => {
    return ((position1 != 0) && (position1 == position2) && (position1 == position3) && (position1 == position4));
}

const checkForWinner = (win) => {
    // Horizontally
    for (row = 0; row <= 2; row++)
        for (column = 0; column <= 6; column++)
            if (check(win[row][column], win[row + 1][column], win[row + 2][column], win[row + 3][column]))
                return win[row][column];

    // Vertically
    for (row = 0; row <= 5; row++)
        for (column = 0; column <= 3; column++)
            if (check(win[row][column], win[row][column + 1], win[row][column + 2], win[row][column + 3]))
                return win[row][column];

    // Diagonal
    for (row = 0; row <= 2; row++)
        for (column = 0; column <= 3; column++)
            if (check(win[row][column], win[row + 1][column + 1], win[row + 2][column + 2], win[row + 3][column + 3]))
                return win[row][column];

    // Diagonal
    for (row = 3; row <= 5; row++)
        for (column = 0; column <= 3; column++)
            if (check(win[row][column], win[row - 1][column + 1], win[row - 2][column + 2], win[row - 3][column + 3]))
                return win[row][column];

    return 0;
}

x =[ [0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 0, 0, 0, 0],
     [0, 0, 0, 2, 1, 0, 0],
     [0, 0, 0, 2, 1, 0, 0],
     [0, 1, 0, 2, 2, 2, 0],
     [0, 1, 2, 2, 1, 2, 0] ];
console.log(checkForWinner(x));
