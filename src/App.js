import './App.css';
import Player from './Components/Player.jsx';
import GameBoard from './Components/GameBoard.jsx';
import { useState } from 'react';
import Log from './Components/Log.jsx';
function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=>(curActivePlayer === 'X' ? 'O' : 'X'));
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
      onselectSquare={handleSelectSquare} 
      activePlayerSymbol={activePlayer}
      />
       </div>
      <Log/>
    </main>
  );
}

export default App;
