import { useState } from "react";

const initialBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard({onselectSquare,activePlayerSymbol}){
    const [gameBoard, setGameBoard] = useState(initialBoard);

    function handleSelectSquare(rowIndex,colIndex){
        setGameBoard((prevBoard)=>{
            const updatedBoard = [...prevBoard.map((innerArray)=>[...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        })
        //should select a square on button click
        onselectSquare();
    }

    return(
        <ol id="game-board">
          {gameBoard.map((row, rowIndex)=><li key={rowIndex} >
             <ol className="row">
            {row.map((symbol,colIndex)=><li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex,colIndex)} className="symbol-button">{symbol}</button>
            </li>)}
            </ol>
        </li>)}
        </ol>
    );
}