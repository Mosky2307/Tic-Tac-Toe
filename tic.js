
const player = (name, letter) => {
  return {name, letter}
    };
  
    
  
    
   const player1 = player('Jim', 'X');
   const player2 = player('Bob', 'O');
   
   



const gameboard = (() => {
   let gameOver = false; 
  let ticBoard = document.querySelector('#ticBoard')
  const board = [, , , , , , , , , ]

  let currentPlayer = player1;
  let otherPlayer = player2

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

        //This is what the boxes do when clicked
        box.addEventListener('click', () => {
        if (gameOver === false) {
         if (board[i] !== undefined) {} else {
          board[i] = currentPlayer.letter;
          switchPlayer()
          box.textContent = `${board[i]}`
          if (board[0] === otherPlayer.letter && board[1] === otherPlayer.letter && board[2] === otherPlayer.letter ||
            board[3] === otherPlayer.letter && board[4] === otherPlayer.letter && board[5] === otherPlayer.letter ||
            board[6] === otherPlayer.letter && board[7] === otherPlayer.letter && board[8] === otherPlayer.letter ||
            board[0] === otherPlayer.letter && board[3] === otherPlayer.letter && board[6] === otherPlayer.letter ||
            board[1] === otherPlayer.letter && board[4] === otherPlayer.letter && board[7] === otherPlayer.letter ||
            board[2] === otherPlayer.letter && board[5] === otherPlayer.letter && board[8] === otherPlayer.letter ||
            board[0] === otherPlayer.letter && board[4] === otherPlayer.letter && board[8] === otherPlayer.letter ||
            board[2] === otherPlayer.letter && board[4] === otherPlayer.letter && board[6] === otherPlayer.letter 
            ) {
            alert(`${otherPlayer.name} wins!`);
            gameOver = true;}
          }
          }
          }) //box EventListener stops here
          
        
          ticBoard.appendChild(box);
          
}

})();

 
