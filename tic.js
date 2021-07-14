const buttonOrNameX = document.querySelector('#buttonOrNameX');
const buttonOrNameO = document.querySelector('#buttonOrNameO');
const xButton = document.querySelector('#xButton');
const oButton = document.querySelector('#oButton');
const winBox = document.querySelector('#winBox');
const playAgain = document.createElement('button')
playAgain.textContent = 'Play Again?'





const player = (name, letter) => {
  return {name, letter}
    };
  
    
  
    

   



const gameboard = (() => {

  //this is what the play again button does
  playAgain.addEventListener('click', () =>{ 
    boardCreate();
    winBox.textContent = `${currentPlayer.name}'s turn`
  })

  let player1 = player('', '');
   let player2 = player('', '');

   const turnDisplay = () => {
    if (player1.name !== '' && player2.name !== '') {
      winBox.textContent = `${currentPlayer.name}'s turn`;
    }
   }

   xButton.addEventListener('click', () => {
    buttonOrNameX.removeChild(xButton)
    buttonOrNameX.textContent = prompt('What is your name?');
      player1 = player(buttonOrNameX.textContent, 'X');
      switchPlayer();
      turnDisplay();
    });
    
    oButton.addEventListener('click', () => {
      buttonOrNameO.removeChild(oButton)
      buttonOrNameO.textContent = prompt('What is your name?');
       player2 = player(buttonOrNameO.textContent, 'O');
       turnDisplay();
      })




   
  let ticBoard = document.querySelector('#ticBoard')
  
 
  let currentPlayer = player2;
  let otherPlayer = player1

    //This function switches player
    const switchPlayer = () => {
    if (currentPlayer === player1)
    {currentPlayer = player2; otherPlayer = player1} else {
      currentPlayer = player1; otherPlayer = player2;
    }
    
  };



    
    boardCreate = () => {
      const board = [, , , , , , , , , ]
      let gameOver = false; 
console.log(board)
console.log(currentPlayer.name)
      //This loop creates the board pieces
    for (let i=0; i<9; i++) {
        let box = document.createElement('div');
        box.classList.add('ticBoxDiv');
        playAgain.addEventListener('click', () =>{ 
          ticBoard.removeChild(box);
        })
        if (i % 2 === 0) {
          box.style.backgroundColor = 'lightgreen';
         
        }

        //This is what the boxes do when clicked
        box.addEventListener('click', () => {
if (player1.name === '' || player2.name === '') {
} else {


        if (gameOver === false) {
         if (board[i] !== undefined) {} else {
          board[i] = currentPlayer.letter;
          switchPlayer()
          turnDisplay();
          box.textContent = `${board[i]}`

          //This is what happens when a player wins
          if (board[0] === otherPlayer.letter && board[1] === otherPlayer.letter && board[2] === otherPlayer.letter ||
            board[3] === otherPlayer.letter && board[4] === otherPlayer.letter && board[5] === otherPlayer.letter ||
            board[6] === otherPlayer.letter && board[7] === otherPlayer.letter && board[8] === otherPlayer.letter ||
            board[0] === otherPlayer.letter && board[3] === otherPlayer.letter && board[6] === otherPlayer.letter ||
            board[1] === otherPlayer.letter && board[4] === otherPlayer.letter && board[7] === otherPlayer.letter ||
            board[2] === otherPlayer.letter && board[5] === otherPlayer.letter && board[8] === otherPlayer.letter ||
            board[0] === otherPlayer.letter && board[4] === otherPlayer.letter && board[8] === otherPlayer.letter ||
            board[2] === otherPlayer.letter && board[4] === otherPlayer.letter && board[6] === otherPlayer.letter 
            ) {
            winBox.textContent = `${otherPlayer.name} wins!`;
            winBox.appendChild(playAgain);
            gameOver = true;} else if (board[0] !== undefined && board[1] !== undefined && board[2] !== undefined 
              && board[3] !== undefined && board[4] !== undefined && board[5] !== undefined && board[6] !== undefined && board[7] !== undefined 
              &&board[8] !== undefined) {
                winBox.textContent = 'Draw';
                winBox.appendChild(playAgain)
            }
          }
          }}
          }) //box EventListener stops here
          
        
          ticBoard.appendChild(box);
        }
}
boardCreate()
})();










 
