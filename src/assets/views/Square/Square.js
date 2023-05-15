import React from 'react';

import './Square.scss';

function Square({ value, onSquareClick, isWinner }) {
    const winnerClass = isWinner ? 'winner' : 'default';

    return (
        <button className={`square ${winnerClass}`} onClick={onSquareClick}>
            {value}
        </button>
    );
}

export default Square;
