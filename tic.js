
const player = (name, letter) => {
  return {name, letter}
    };
  
    
  
    
   const player1 = player('jim', 'X');
   const player2 = player('bob', 'O');
   
   



const gameboard = (() => {
    
  let ticBoard = document.querySelector('#ticBoard')
  const board = [, , , , , , , , , ]

  let currentPlayer = player1;

    //This function switches player
    const switchPlayer = () => {
    if (currentPlayer.letter === player1.letter)
    {currentPlayer = player2} else {
      currentPlayer = player1
    }
    console.log(board)
  };

    //This loop creates the board pieces
    for (let i=0; i<9; i++) {
        let box = document.createElement('div');
        box.classList.add('ticBoxDiv');

        //This is what the boxes do when clicked
        box.addEventListener('click', () => {
         if (board[i] !== undefined) {} else {
          board[i] = currentPlayer.letter;
          switchPlayer()
          box.textContent = `${board[i]}`}
          })
        
          ticBoard.appendChild(box);
          console.log(board)
}
})();

 
