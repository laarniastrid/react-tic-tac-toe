import React from 'react';

import Game from './assets/components/Game/Game';

export default function App() {
  return (
    <>
      <h2 className="app-title">Tic Tac Toe</h2>
      <div className="container" data-testid="app-container">
        <Game />
      </div>
    </>
  );
}
