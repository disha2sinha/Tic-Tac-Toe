
export default function GameBoard({onSelectSquare,board}){

    // We do not need to manage any state here. This concept is called deriving state from props. We are producing some derived state, some computed value. In this case Gameboard is a derived value which is produced from the gameturns state in the App component.
    
    /*Lifting computed value (gameBoard) up to App.js
    let gameBoard = initialBoard;
    for (const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col]=player;
    }

    Without the above property code will be like :
    const [gameBoard, setGameBoard] = useState(initialBoard);

    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevBoard)=>{
            const updatedBoard = [...prevBoard.map((innerArray)=>[...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        })
        //should select a square on button click
        //onselectSquare();
    }*/ 
        
    return(
        <ol id="game-board">
          {board.map((row, rowIndex)=><li key={rowIndex} >
             <ol className="row">
            {row.map((symbol,colIndex)=><li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex,colIndex)} className="symbol-button">{symbol}</button>
            </li>)}
            </ol>
        </li>)}
        </ol>
    );
}