// src/components/ChoiceButtons.tsx
import React from "react";
import { useGame } from "../context/GameContext";
import { scenes } from "../data/scenes";

const ChoiceButtons: React.FC = () => {
  const { state, dispatch } = useGame();
  const scene = scenes.find((s) => s.id === state.currentSceneId)!;
  const isAtEnd = state.currentLineIndex === scene.dialogue.length - 1;
  const isShowingFeedback = state.currentFeedbackIndex !== null;

  if (!isAtEnd || isShowingFeedback) return null; // ← добавили проверку

  return (
    <div
      style={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "60%",
      }}
    >
      {scene.choices.map((choice, idx) => (
        <button
          key={idx}
          onClick={() =>
            dispatch({
              type: "MAKE_CHOICE",
              choiceIndex: idx,
              sceneId: scene.id,
            })
          }
          style={{
            padding: '14px 20px',
            background: scene.id === 13 
              ? '#e53e3e' // красный для подарка
              : '#4a5568',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold',
            boxShadow: scene.id === 13 
              ? '0 4px 12px rgba(229, 62, 62, 0.4)' 
              : 'none',
          }}
        >
          {choice.text}
        </button>
      ))}
    </div>
  );
};

export default ChoiceButtons;
