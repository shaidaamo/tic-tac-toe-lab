/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]


/*---------------------------- Variables (state) ----------------------------*/
let board = null
let turn = null
let winner = null
let tie = null
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset')
console.log(squareEls)
console.log(messageEl)
/*-------------------------------- Functions --------------------------------*/
function init(){
board = ['','','','','','','','','']
turn = 'X'
winner = false
tie = false
console.log(board)
render()
}

function render(){
updateBoard()
updateMessage()
}
function updateBoard(){
    for(let i=0; i< board.length;i++){
        squareEls[i].textContent = board[i]
    }
}
function updateMessage(){
    if(winner === false && tie === false){
        messageEl.textContent = turn
    }
    else if(winner === false && tie === true){
        messageEl.textContent = 'tie'
    }
    else{
        messageEl.textContent = 'congrats!, you win'
    }
}
function handleClick(event){
    const squreIndex = event.target.id
    if(board[squreIndex] != '' || winner === true){
        return 
    }
    if (winner === true){
        return 
    }
placePiece(squreIndex)
checkForWinner()
checkForTie()
switchPlayerTurn()
render()
}
function placePiece(index){
        board[index] = turn
        console.log(board)
    }


function checkForWinner(){
  for(let i=0;i< winningCombos.length;i++){
    if(board[winningCombos[i][0]]!= '' && board[winningCombos[i][0]] === board[winningCombos[i][1]] &&board[winningCombos[i][0]] === board[winningCombos[i][2]]){
        winner = true
}}}



function checkForTie(){
    if(winner === true){
        return 
    }
    tie = true
    for(let i=0; i< board.length;i++){
        if(board[i] === ''){
        tie=false
    }
}}
function switchPlayerTurn(){
    if(winner === true){
        return
    }
    if(winner === false){
        if(turn === 'X'){
            turn = 'O'
        }
        else{
            turn ='X'
        }
    }

}

/*----------------------------- Event Listeners -----------------------------*/
for(let oneElement of squareEls){
    oneElement.addEventListener('click',handleClick)
}
resetBtnEl.addEventListener('click',init)
init()