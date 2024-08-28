export default function GameOver({winner}){
    return (
        <div id = 'game_over'>
            <h2>GAME OVER!</h2>
            <p>{winner} won!</p>
            <p>Rematch</p>
            <p><button>YES</button>
            <button>NO</button></p>
        </div>
    )
}