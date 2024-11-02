let currentPlayer = 'X';
let cells = document.querySelectorAll('.cell');
let gameActive = true;
let gameBoardX = [];
let gameBoardO = [];
const winConditions = [
    ['cell-1', 'cell-4', 'cell-7'], // Top row
    ['cell-2', 'cell-5', 'cell-8'], // Middle row
    ['cell-3', 'cell-6', 'cell-9'], // Bottom row
    ['cell-1', 'cell-2', 'cell-3'], // Left column
    ['cell-4', 'cell-5', 'cell-6'], // Middle column
    ['cell-7', 'cell-8', 'cell-9'], // Right column
    ['cell-1', 'cell-5', 'cell-9'], // Left-to-right diagonal
    ['cell-7', 'cell-5', 'cell-3']  // Right-to-left diagonal
  ];


function getCellId(element){
    const id = element.id;
    const itemId = document.querySelector(`#${id}`);
    if(itemId.textContent !== ''){
        return; // Выход из функции, если в ячейке уже есть знак
      }
   if(currentPlayer == 'X'){
    itemId.textContent = currentPlayer;
    gameBoardX.push(id);

    if(!checkWinner()){
        currentPlayer = '0';
    }
   
   }
   else if(currentPlayer == '0'){
    itemId.textContent = currentPlayer;
    gameBoardO.push(id);

    if(!checkWinner()){
        currentPlayer = 'X';
    }
    
   }
 
}
//Выявить победителя
function checkWinner() {
    // Проверить каждый набор выигрышных условий
    for (let i = 0; i < winConditions.length; i++) {
      const winCondition = winConditions[i];
     
      // Проверить, есть ли все элементы выигрышной комбинации в массиве gameBoardX или gameBoardO
      if (winCondition.every((id) => gameBoardX.includes(id)) || winCondition.every((id) => gameBoardO.includes(id))) {
        // Если все элементы есть, игрок выиграл
        alert(`Победил игрок ${currentPlayer}!`);
        gameActive = false;
        resetGame();

        break; // Остановить проверку, так как уже есть победитель
       
        
      }    
    }
  }
//сброс игры после победы
  function resetGame() {
    cells.forEach(item => item.textContent = ''); // Сбрасываем текст в ячейках
    gameBoardO = [];
    gameBoardX = [];
    currentPlayer = 'X'; // Сначала игрок 'X'
    gameActive = true; // Игра активна
}
