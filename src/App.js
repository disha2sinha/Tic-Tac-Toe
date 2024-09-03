import './App.css';
import Player from './Components/Player.jsx';
import GameBoard from './Components/GameBoard.jsx';
import GameOver from './Components/GameOver.jsx';
import { WINNING_COMBO } from './winning_combo.js';
import { useState } from 'react';
import Thankyou from './Components/Thankyou.jsx';
import Log from './Components/Log.jsx';

const initialBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];


function  deriveActivePlayer(gameTurns){
  let currPlayer = 'X';
  if (gameTurns.length >0 && gameTurns[0].player === 'X')
    currPlayer ='O';
  return currPlayer
}


function deriveGameBoard(gameTurns){
  /* Changes made to gameBoard will also affect initialBoard array as arrays in Javascript are reference  values which means they are stored in memory and even if we are storing them in different variables we are alwaysediting the same object in the memory
  
  let gameBoard = initialBoard;
  So we create a deepcopy*/

  let gameBoard = [...initialBoard.map(array => [...array] )]
    for (const turn of gameTurns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col]=player;
    }
  return gameBoard
}

function deriveWinner(gameBoard,player){
  let winner;
  for (const combination of WINNING_COMBO){
    let firstSymbol = gameBoard[combination[0].row][combination[0].col];
    let secondSymbol = gameBoard[combination[1].row][combination[1].col];
    let thirdSymbol = gameBoard[combination[2].row][combination[2].col];
    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol)
    {
        winner = player[firstSymbol];
    }

  }
  return winner
}

function App() {
  const[player, setPlayers] = useState({
    'X' : 'Player 1',
    'Y' : 'Player 2'
  })
  const [gameTurns, setGameTurns] = useState([])
  const [over, setover] = useState(false)
  //const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, player)
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleRematch(){
    setGameTurns([])
  }
  
  function handleSelectSquare(rowIndex, colIndex){
    //setActivePlayer((curActivePlayer)=>(curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      const currPlayer = deriveActivePlayer(prevTurns) 
      let updatedTurns = [{square : {row:rowIndex, col:colIndex},player: currPlayer},...prevTurns]
      return updatedTurns;
    });
  }

  function handleNameChange(symbol, name){
    setPlayers((prevPlayers)=>{
      return{
      ...prevPlayers,
      [symbol] : name
    }
    })
  }

  function handleOver(){
    setover(true);
    setGameTurns([]);
  }

  return (
    <main>
    <div id ="game-container">
      <ol className='players'>
        <Player 
        placeholder= "Player1"
        symbol="X" 
        isActive={activePlayer === 'X'}
        onNameChange = {handleNameChange}
        />
        <Player 
        placeholder= "Player2"
        symbol="O" 
        isActive={activePlayer === 'O'}
        onNameChange = {handleNameChange}
        />
      </ol>
      {(!over && (winner || hasDraw )) && <GameOver winner={winner} rematch={handleRematch} over = {handleOver}></GameOver>}
      {over && <Thankyou/> }

      <GameBoard 
      onSelectSquare={handleSelectSquare} 
      board={gameBoard}
      />
      </div>
      <Log turns = {gameTurns}/>
    </main>
  );
}

export default App;
