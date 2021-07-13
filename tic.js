



const gameboard = (() => {
    const x = 'X'
    const o = 'O'
    let ticBoard = document.querySelector('#ticBoard')
    const board = [x, o, x, o, x, x, x, o, o ]
    for (let i=0; i<9; i++) {
        let box = document.createElement('div');
        box.classList.add('ticBoxDiv');
        box.textContent = `${board[i]}`
ticBoard.appendChild(box);

    }
    
    
    
  })();

  