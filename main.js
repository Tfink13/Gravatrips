//To make the code much more compact, javascript will actually be used to write the code for the game board
const makeBoard = () => {
  for (let row = 0; row <= 5; row++) {
    let newRow = document.createElement("tr");
    document.body.appendChild(newRow);

    for (var col = 0; col <= 6; col++) {
      //write each table data element - with the row and col variables in the ID so it can be accessed later.
      document.writeln("<td id='square" + row + "," + col + "' class='board_square'></td>");
    }
    //write the closing table row tag.
    document.writeln("</tr>");
  }
};

const addRows = () => {
  for (row = 0; row <= 5; row++) {
    let newRow = document.createElement("tr");
    let currentRow = document.getElementById("gameboard");
    document.body.insertAfter(newRow, currentRow);
  } for (col = 0; col <= 6; col++) {
    let newColumn = document.createElement("td");
  }


const sum = () => {
  return x + y;
}

module.exports = {
  sum,
};
