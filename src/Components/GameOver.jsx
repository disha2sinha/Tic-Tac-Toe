export default function GameOver({winner, rematch, over}){
    return (
        <div id = 'game_over'>
            <h2>GAME OVER!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It's a draw!!</p>}
            <p>Rematch</p>
            <p><button onClick={rematch}>YES</button>
            <button onClick={over}>NO</button></p>
        </div>
    )
}