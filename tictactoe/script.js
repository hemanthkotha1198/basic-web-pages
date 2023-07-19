const statusDisplay = document.querySelector('.game_status'); //it's x turn or y turn message
let gameActive = true; //initial state of a game 

let currentPlayer = "X"; //first X turns (initial player)

//initalize all the 9 cells as empty cells
let gameState = ["","","","","","","","",""]; //an array of 9 empty cells 

//give a winning message - X won or O won 
const winningMessage = ()=>`Player  ${currentPlayer}  has won!`;

//draw message
const drawMessage = ()=> 'Game ended in draw';

//Game turn message
const currentPlayerTurn = ()=> `Its ${currentPlayer}  turn`;

//Displaying the current player turn
statusDisplay.innerHTML = currentPlayerTurn();

//declare 5 functions

// first function
function handleCellPlayed(){

}

//second function
function handlePlayerChange(){

}

//Third Function
function handleResultValidation(){

}

//fourth function
function handleCellClick(){

}

//fifth function
function handleRestartGame(){

}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game_restart').addEventListener('click', handleRestartGame);

//part-2 of the code - handleCellclick --> handlecell player
function handleCellClick(clickedCellEvent){
    const clickedCell = clickedCellEvent.target; //moving the cursor
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index')); //it stores 2 as value as per our example
    if(gameState[clickedCellIndex]!=="" || !gameActive){
        return; //this does not allow a cell click twice, or  playing after game over
    }
    handleCellPlayed(clickedCell,clickedCellIndex);
    handleResultValidation();

}


//part-3 of the code - handleCellPlayed
function handleCellPlayed(clickedCell,clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

//part-4 of the code - Result Validation - all probabilities - i.e 8
const winningConditions = [
    [0,1,2], //index - 0
    [3,4,5], //index - 1
    [6,7,8], //index - 2
    [0,4,8], //index - 3
    [2,4,6], //index - 4
    [0,3,6], //index - 5
    [1,4,7], //index - 6
    [2,5,8]  //index - 7
];

function handleResultValidation(){
    let roundWon = false;
    for(let i=0;i<=7;i++){
        const winCondition=winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if(a===""|| b === ""||c===""){
            continue;
        }

        if(a===b && b===c){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes(""); //true if all 9 cells are occupied 
    if(roundDraw){
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    handlePlayerChange();
}

//part 5 - handlePlayerChange() => X to O or O to X
function handlePlayerChange(){
    currentPlayer = currentPlayer === "X"?"O":"X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

//part-6 - Restart the game
function handleRestartGame(){
    gameActive = true;
    currentPlayer = "X";
    gameState = ["","","","","","","","",""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell=>cell.innerHTML="");
}
