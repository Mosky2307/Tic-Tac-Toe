const buttonOrNameX = document.querySelector('#buttonOrNameX');
const buttonOrNameO = document.querySelector('#buttonOrNameO');
const xButton = document.querySelector('#xButton');
const oButton = document.querySelector('#oButton');
const winBox = document.querySelector('#winBox');





const player = (name, letter) => {
  return {name, letter}
    };
  
    
  
    
   
   



const gameboard = (() => {
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




   let gameOver = false; 
  let ticBoard = document.querySelector('#ticBoard')
  const board = [, , , , , , , , , ]

  let currentPlayer = player2;
  let otherPlayer = player1

    //This function switches player
    const switchPlayer = () => {
    if (currentPlayer === player1)
    {currentPlayer = player2; otherPlayer = player1} else {
      currentPlayer = player1; otherPlayer = player2;
    }
    
  };



    //This loop creates the board pieces
    for (let i=0; i<9; i++) {
        let box = document.createElement('div');
        box.classList.add('ticBoxDiv');
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
            gameOver = true;}
          }
          }}
          }) //box EventListener stops here
          
        
          ticBoard.appendChild(box);
          
}

})();

 
