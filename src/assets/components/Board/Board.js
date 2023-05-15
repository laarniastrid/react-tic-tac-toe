import React from 'react';

import Square from '../../views/Square/Square';

import './Board.scss';

const LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function calculateWinner(squares) {
    for (let i = 0; i < LINES.length; i++) {
        const [a, b, c] = LINES[i];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return {
                winner: squares[a],
                winningSquares: [a, b, c],
            };
        }
    }

    return {
        winner: false,
        winningSquares: [],
    };
}

function isWinningSquare(squares, squareIndex) {
    if (calculateWinner(squares).winner === false) {
        return;
    }

    const winningSquares = calculateWinner(squares).winningSquares;

    return winningSquares.includes(squareIndex);
}

function Board({ xIsNext, squares, onPlay, currentMove }) {
    function handleClick(i) {
        if (calculateWinner(squares).winner || squares[i]) {
            return;
        }

        const nextSquares = squares.slice();

        nextSquares[i] = xIsNext ? 'X' : 'O';

        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares).winner;
    const status = winner ? `Winner:  ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;
    const info = winner ? `Won on move # ${currentMove}` : `Move # ${currentMove + 1}`;

    return (
        <>
            <div className="status">{status}</div>
            <div className="board">
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} isWinner={isWinningSquare(squares, 0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} isWinner={isWinningSquare(squares, 1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} isWinner={isWinningSquare(squares, 2)} />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} isWinner={isWinningSquare(squares, 3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} isWinner={isWinningSquare(squares, 4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} isWinner={isWinningSquare(squares, 5)} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} isWinner={isWinningSquare(squares, 6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} isWinner={isWinningSquare(squares, 7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} isWinner={isWinningSquare(squares, 8)} />
                </div>
            </div>

            <div className="board-info">
                {info}
            </div>
        </>
    );
}

export default Board;
