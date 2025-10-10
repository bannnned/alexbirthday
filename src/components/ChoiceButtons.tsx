// src/components/ChoiceButtons.tsx
import React from 'react';
import { useGame } from '../context/GameContext';
import { scenes } from '../data/scenes';

const ChoiceButtons: React.FC = () => {
  const { state, dispatch } = useGame();
  const scene = scenes.find(s => s.id === state.currentSceneId)!;
  const isAtEnd = state.currentLineIndex === scene.dialogue.length - 1;

  if (!isAtEnd) return null;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '40px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '60%',
      }}
    >
      {scene.choices.map((choice, idx) => (
        <button
          key={idx}
          onClick={() => dispatch({ type: 'MAKE_CHOICE', choiceIndex: idx, sceneId: scene.id })}
          style={{
            padding: '12px',
            background: '#4a5568',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
};

export default ChoiceButtons;