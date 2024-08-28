import './App.css';
import Player from './Components/Player.jsx';
import GameBoard from './Components/GameBoard.jsx';
import { useState } from 'react';
import Log from './Components/Log.jsx';



function  deriveActivePlayer(gameTurns){
  let currPlayer = 'X';
  if (gameTurns.length >0 && gameTurns[0].player === 'X')
    currPlayer ='O';
  return currPlayer
}


function App() {
  const [gameTurns, setGameTurns] = useState([])
  //const [activePlayer, setActivePlayer] = useState('X');


  const activePlayer = deriveActivePlayer(gameTurns);


  function handleSelectSquare(rowIndex, colIndex){
    //setActivePlayer((curActivePlayer)=>(curActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      const currPlayer = deriveActivePlayer(prevTurns) 
      let updatedTurns = [{square : {row:rowIndex, col:colIndex},player: currPlayer},...prevTurns]
      return updatedTurns;
    });
  }


  return (
    <main>
    <div id ="game-container">
      <ol className='players'>
        <Player 
        name="Player1" 
        symbol="X" 
        isActive={activePlayer === 'X'}
        />
        <Player 
        name="Player2" 
        symbol="O" 
        isActive={activePlayer === 'O'}
        />
      </ol>
      <GameBoard 
      onSelectSquare={handleSelectSquare} 
      turns={gameTurns}
      />
       </div>
      <Log turns = {gameTurns}/>
    </main>
  );
}

export default App;
