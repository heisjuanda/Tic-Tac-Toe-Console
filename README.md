# Tic-Tac-Toe-Console

JS code

#Global Variables
```JavaScript
var matrix = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
var playerOne = false;
var playerTwo = false;
var ganar = false;
```

#Functions
```JavaScript
function updateMatrix(data, pos) {
  //data is the value that we're gonna add ('X' or 'O')
  //pos is where we'll add the data
}

function verifyMatrix() {
  //Check if there's a winner or not
}

const init = (str) => {
  //Starts the game
}
```
#Example
```JavaScript
console.log(init("2 4 5 8 1 3 9 6 7"));
```
##It returns
```bash
[
  [ 'X', 'X', 'O' ],
  [ 'O', 'X', '' ],
  [ '', 'O', 'X' ]
]

'player one Won! (X)'
```


