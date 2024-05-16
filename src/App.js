import './App.css';
import Player from './Components/Player.jsx';


function App() {
  return (
    <div id ="game-container">
      <ol>
        <Player name="Player1" symbol="X"/>
        <Player name="Player2" symbol="0"/>
      </ol>

    </div>
  );
}

export default App;
