import React, { useState } from 'react';

import './Game.scss';

import Board from '../Board/Board';

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [
            ...history.slice(0, currentMove + 1),
            nextSquares
        ];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);

        const nextHistory = [
            ...history.slice(0, nextMove + 1)
        ];
        setHistory(nextHistory);
    }

    function restartGame() {
        jumpTo(0);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove} />
            </div>

            <button className='game-restart' onClick={restartGame}>
                Restart Game
            </button>
        </div>
    )
}

export default Game;
