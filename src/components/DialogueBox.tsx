// src/components/DialogueBox.tsx
import React from "react";
import { useGame } from "../context/GameContext";
import { scenes } from "../data/scenes";

const DialogueBox: React.FC = () => {
  const { state } = useGame();
  const scene = scenes.find((s) => s.id === state.currentSceneId)!;
  const line = scene.dialogue[state.currentLineIndex];
  const isAtEnd = state.currentLineIndex === scene.dialogue.length - 1;
  const choicesSize = scene.choices.length;

  return (
    <div
      style={{
        position: "absolute",
        bottom: choicesSize > 2 ? "240px" : isAtEnd ? "180px" : "80px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(0,0,0,0.7)",
        color: "white",
        padding: "15px",
        borderRadius: "12px",
        maxWidth: "70%",
        textAlign: "center",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "6px" }}>
        {line.speaker}
      </div>
      <div>{line.text}</div>
    </div>
  );
};

export default DialogueBox;
