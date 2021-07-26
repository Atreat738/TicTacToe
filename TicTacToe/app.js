const game = (function() {
    const gameBoardContainer = document.querySelector('#gameBoardContainer');
    const gameSquares = document.querySelectorAll('.gameSquare');
    
    let isGameOver = false;
    let gb = [];
    let resetGameBoard = () => { 
        gb = ["","","",
            "","","",
            "","",""]; 
        };
    resetGameBoard();

    let updategb = (index, marker) => {
        return gb[index] = marker;
    };



    //for each square on the board
    //If player1 turn and square is empty, place X
    //else player 2 turn and square is empty, place O
    gameSquares.forEach((gameSquare) => {
        gameSquare.addEventListener('click', (e) => {

            let index = gameSquare.getAttribute('id');

            if(gameSquare.textContent == '') {
                if(playerX.isTurn == true) {
                    gameSquare.textContent = 'X';
                    playerX.isTurn = false;
                    playerO.isTurn = true;
                    updategb(index, 'X');
                    checkWinner();
                    

                } else if(playerO.isTurn == true) {
                    gameSquare.textContent = 'O';
                    playerO.isTurn = false;
                    playerX.isTurn = true;
                    updategb(index, 'O');
                    checkWinner();
                }
            }


            function checkWinner() {
                let i = 0;
                //vertical check
                for(i = 0; i < 3; i++) {
                    if((gb[i] === gb[3 + i]) && (gb[3 + i] === gb[6 + i]) && (gb[i] !== "")) {
                        return alert(`Player ${gb[index]} has won!`);
                    }
                } 
                
                //horizontal check
                for(i = 0; i<8; i+=3) {
                    if((gb[i] === gb[1 + i]) && (gb[1 + i] === gb[2 + i]) && (gb[i] !== "")) {
                        return alert(`Player ${gb[index]} has won!`);
                    }
                }
        
                //diagonal checks
                if ((gb[0] === gb[4]) && (gb[4] === gb[8] && gb[4] !== "")) {
                    return alert(`Player ${gb[4]} has won!`);
                } 

                if ((gb[2] === gb[4]) && (gb[4] === gb[6]) && (gb[4] !== "")) {
                    return alert(`Player ${gb[4]} has won!`);
                } 
            }
                //check for tie 
            
        })
    });


    //each player will have a marker: X or O
    //will have a turn status(current/not)
    function createPlayer(marker, isTurn) {
        return {
            marker: marker, 
            isTurn: isTurn
        };
    }

    const playerX = createPlayer('X', true);
    const playerO = createPlayer('O', false);


})();






