//console.log(true)
var matrix = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
var playerOne = false;
var playerTwo = false;
var ganar = false;
function printM (){
  let a = "";
  console.log(true);
  for (let i = 0; i < this.matrix.length; i++) {
    for (let j = 0; j < this.matrix[i].length; j++) {
      a += " " + matrix[i][j] + " ";
      if (j == 2) {
        a += "\n";
      }
    }
  }
  console.log(a);
};
function updateMatrix(data, pos) {
  for (let i = 0; i < this.matrix.length; i++) {
    for (let j = 0; j < this.matrix[i].length; j++) {
      if (i == 0 && pos - 1 == j) {
        matrix[i][j] = data;
      }
      if (i == 1 && j + 4 == pos) {
        matrix[i][j] = data;
      }
      if (i == 2 && j + 7 == pos) {
        matrix[i][j] = data;
      }
    }
  }
}
function verifyMatrix() {
  for (let i = 0; i < this.matrix.length; i++) {
    for (let j = 0; j < this.matrix[i].length; j++) {
      if (
        (i == 0 || i == 1 || i == 2) &&
        this.matrix[i][0] == "X" &&
        this.matrix[i][1] == "X" &&
        this.matrix[i][2] == "X"
      ) {
        playerOne = true;
      } else if (
        (i == 0 || i == 1 || i == 2) &&
        this.matrix[i][0] == "O" &&
        this.matrix[i][1] == "O" &&
        this.matrix[i][2] == "O"
      ) {
        playerTwo = true;
      } else if (
        i == j &&
        this.matrix[0][0] == "X" &&
        this.matrix[1][1] == "X" &&
        this.matrix[2][2] == "X"
      ) {
        playerOne = true;
      } else if (
        i == j &&
        this.matrix[0][0] == "O" &&
        this.matrix[1][1] == "O" &&
        this.matrix[2][2] == "O"
      ) {
        playerTwo = true;
      } else if (
        i + j == 2 &&
        this.matrix[0][2] == "X" &&
        this.matrix[1][1] == "X" &&
        this.matrix[2][0] == "X"
      ) {
        playerOne = true;
      } else if (
        i + j == 2 &&
        this.matrix[0][2] == "O" &&
        this.matrix[1][1] == "O" &&
        this.matrix[2][0] == "O"
      ) {
        playerTwo = true;
      } else if (
        (j == 0 || j == 1 || j == 2) &&
        this.matrix[0][j] == "X" &&
        this.matrix[1][j] == "X" &&
        this.matrix[2][j] == "X"
      ) {
        playerOne = true;
      } else if (
        (j == 0 || j == 1 || j == 2) &&
        this.matrix[0][j] == 2 &&
        this.matrix[1][j] == 2 &&
        this.matrix[2][j] == 2
      ) {
        playerTwo = true;
      } else {
        break;
      }
    }
  }
}
const init = (str) => {
  let arr = str.split(" ");
  let message = ''
  if (arr.length === 9) {
    arr.forEach((el, id) => {
      if(playerOne){
        message = 'player one Won! (X)'
        return
      }
      if(playerTwo){
        message = "player two Won! (O)"
        return
      }
      if (id % 2 == 0) {
        updateMatrix("X", el);
        verifyMatrix();
      } else {
        updateMatrix("O", el);
        verifyMatrix();
      }
    });
    if(playerOne===false && playerTwo===false){
     message = "Draw!"
    }
    console.log(matrix)
    return message;
  } else {
    return new Error("We cannot play the game");
  }
};

console.log(init("2 4 5 8 1 3 9 6 7"));
console.log(init("2 1 4 3 6 5 8 7 9"));
console.log(init("1 2 3 5 4 7 6 9 8"));
// 
