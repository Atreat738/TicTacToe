const game = (function() {
    const gameBoardContainer = document.querySelector('#gameBoardContainer');
    const gameSquares = document.querySelectorAll('.gameSquare');
    
    const gameBoard = () => { 
        gb = ["","","",
            "","","",
            "","",""]; 
        }

    let isGameOver = false;
 

    //for each square on the board
    //If player1 turn and square is empty, place X
    //else player 2 turn and square is empty, place O
    gameSquares.forEach((gameSquare) => {
        gameSquare.addEventListener('click', (e) => {
            console.log(gameSquare.textContent);
            if(gameSquare.textContent != '') {
                if(playerX.isTurn == true) {
                gameSquare.textContent = 'X';
                playerX.isTurn = false;
                playerO.isTurn = true;

                } else if(playerO.isTurn == true) {
                    gameSquare.textContent = 'O';
                    playerO.isTurn = false;
                    playerX.isTurn = true;
                }
            }
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





    /*const gameController = (function() {

    })(); */
})();






