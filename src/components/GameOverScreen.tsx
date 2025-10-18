// src/components/GameOverScreen.tsx
import React from 'react';
import { useGame } from '../context/GameContext';

const GameOverScreen: React.FC = () => {
  const { dispatch } = useGame();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#000',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        width: '100vw'
      }}
    >
      <h2>💔 Ты проиграл!</h2>
      <p>Все жизни потеряны. Но не сдавайся!</p>
      
      <div style={{ marginTop: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>

        <button
          onClick={() => dispatch({ type: 'RESET_GAME' })}
          style={{
            padding: '12px 20px',
            background: '#a0aec0',
            color: 'black',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          В начало
        </button>
      </div>
    </div>
  );
};

export default GameOverScreen;