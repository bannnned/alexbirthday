// src/components/NavigationArrows.tsx
import React from "react";
import { useGame } from "../context/GameContext";
import { scenes } from "../data/scenes";

const ArrowButton = ({
  onClick,
  arrowIcon,
  canGo,
}: {
  onClick: () => void;
  arrowIcon: string;
  canGo: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={!canGo}
      style={{
        background: canGo ? "#4a5568" : "#2d3748",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "6px 10px",
        cursor: canGo ? "pointer" : "not-allowed",
      }}
    >
      {arrowIcon}
    </button>
  );
};

const NavigationArrows: React.FC = () => {
  const { state, dispatch } = useGame();
  const scene = scenes.find((s) => s.id === state.currentSceneId)!;
  const isAtEnd = state.currentLineIndex === scene.dialogue.length - 1;
  const canGoBack = state.currentLineIndex > 0;
  const canGoForward = state.currentLineIndex < scene.dialogue.length - 1;

  if (isAtEnd) return null; // выборы вместо стрелок

  return (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        right: "50%",
        transform: "translate(50%)",
        display: "flex",
        gap: "10px",
      }}
    >
      <ArrowButton
        onClick={() => canGoBack && dispatch({ type: "PREV_LINE" })}
        arrowIcon="←"
        canGo={canGoBack}
      />
      <ArrowButton
        onClick={() => canGoForward && dispatch({ type: "NEXT_LINE" })}
        arrowIcon="→"
        canGo={canGoForward}
      />
    </div>
  );
};

export default NavigationArrows;
