// src/components/StartScreen.tsx
import React from 'react';
import { useGame } from '../context/GameContext';

const StartScreen: React.FC = () => {
  const { dispatch } = useGame();

  const handleStart = () => {
    dispatch({ type: 'START_GAME' });
  };

  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #1a202c, #2d3748)',
        color: 'white',
        textAlign: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ fontSize: '2.8rem', marginBottom: '10px', fontWeight: '800' }}>
        Happy 24th Birthday ❤️‍🔥
      </h1>

      <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '700px', lineHeight: 1.6 }}>
        Привет! Сегодня твой день рождения, и я бы очень хотела провести его с тобой. 
        Хоть сейчас мы не рядом, я приготовила для тебя подарок, который тебе предстоит найти.
      </p>

      <div style={{ 
        background: 'rgba(0, 0, 0, 0.3)', 
        padding: '25px', 
        borderRadius: '16px', 
        maxWidth: '700px',
        marginBottom: '30px',
        lineHeight: 1.7,
      }}>
        <h2 style={{ marginBottom: '15px', fontSize: '1.4rem' }}>Правила игры:</h2>
        <ul style={{ textAlign: 'left', paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>Ты сыграешь за Сашу и пройдёшь путь от 7 до 24 лет.</li>
          <li>На каждом этапе тебе предстоит делать выбор.</li>
          <li>У тебя есть <strong>3 жизни</strong>. Неправильный выбор = -1 жизнь.</li>
          <li>Если жизни закончатся — игра окончена, но можно начать заново.</li>
          <li>Пройди все 13 этапов и получи <strong>секретный код</strong>!</li>
        </ul>
      </div>

      <button
        onClick={handleStart}
        style={{
          padding: '16px 48px',
          background: '#e53e3e',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          fontSize: '1.3rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(229, 62, 62, 0.5)',
          transition: 'transform 0.2s, background 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        Начать игру 🎮
      </button>

      <p style={{ marginTop: '30px', fontSize: '0.95rem', opacity: 0.8 }}>
        С любовью, Ксюша
      </p>
    </div>
  );
};

export default StartScreen;