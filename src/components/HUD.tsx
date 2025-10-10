// src/components/HUD.tsx
import React from 'react';
import { useGame } from '../context/GameContext';
import { scenes } from '../data/scenes';

const HUD: React.FC = () => {
  const { state } = useGame();
  const currentScene = scenes.find(s => s.id === state.currentSceneId)!;

  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        background: 'rgba(0,0,0,0.6)',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '8px',
        fontSize: '14px',
        textAlign: 'right',
      }}
    >
      <div>Возраст: {currentScene.age} лет</div>
      <div>Место: {currentScene.location}</div>
      <div>
        Жизни: {'❤️'.repeat(state.lives)}
      </div>
    </div>
  );
};

export default HUD;