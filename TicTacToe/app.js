const game = (function() {
    const gameBoardContainer = document.querySelector('#gameBoardContainer');
    const gameSquares = document.querySelectorAll('.gameSquare');
    const resetButton = document.querySelector('#ResetButton');
    const playerXTitleDisplay = document.querySelector('#playerXh2');
    const playerOTitleDisplay = document.querySelector('#playerOh2');
    
    let isGameOver = false;
    let gb = [];
    let resetGameBoard = () => { 
        gameSquares.forEach((gameSquare) => {
            gameSquare.textContent = "";
        });
        return gb = ["","","",
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
                    gameSquare.style.color = '#0000cd'; //blue
                    playerX.isTurn = false;
                    playerO.isTurn = true;
                    playerOTitleDisplay.style.color = '#8b0000'; //red
                    playerXTitleDisplay.style.color = '#353839'; //black
                    updategb(index, 'X');
                    checkWinner();
                    

                } else if(playerO.isTurn == true) {
                    gameSquare.textContent = 'O';
                    gameSquare.style.color = '#8b0000'; //red
                    playerO.isTurn = false;
                    playerX.isTurn = true;
                    playerXTitleDisplay.style.color = '#0000cd'; //blue
                    playerOTitleDisplay.style.color = '#353839'; //black
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

                //check for tie 
                let tieCheckFilter = gb.filter(indexValue => indexValue != "");
                if(tieCheckFilter.length > 8) {
                    return alert('It\'s a Tie!');
                }
            }
            
        })
    }); //end of the forEach gameSquares function


    //each player will have a marker: X or O
    //will have a turn status(true/false)
    function createPlayer(marker, isTurn) {
        return {
            marker: marker, 
            isTurn: isTurn
        };
    }

    const playerX = createPlayer('X', true);
    const playerO = createPlayer('O', false);


    resetButton.addEventListener('click', resetGameBoard);


})();



