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
                {Array(3).fill(null).map((_, row) => (
                    <div className="board-row" key={row}>
                        {Array(3).fill(null).map((_, col) => {
                            const squareIndex = row * 3 + col;
                            return (
                                <Square
                                    key={squareIndex}
                                    value={squares[squareIndex]}
                                    onSquareClick={() => handleClick(squareIndex)}
                                    isWinner={isWinningSquare(squares, squareIndex)}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
            <div className="board-info">
                {info}
            </div>
        </>
    );
}

export default Board;
