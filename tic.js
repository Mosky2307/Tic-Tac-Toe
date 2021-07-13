



const gameboard = (() => {
    const x = 'X'
    const o = 'O'
    let ticBoard = document.querySelector('#ticBoard')
    for (let i=0; i<9; i++) {
        let box = document.createElement('div');
        box.classList.add('ticBoxDiv');
ticBoard.appendChild(box);

    }
    const board = [x, o, x, o, x, x, x, o, o ]
    
    
  })();

  