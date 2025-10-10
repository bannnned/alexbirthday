// src/components/VictoryScreen.tsx
import React from "react";
import { useGame } from "../context/GameContext";
import { SECRET_CODE } from "../constants/config";

const VictoryScreen: React.FC = () => {
  const { dispatch } = useGame();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#000",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2>🎉 Поздравляю! Ты прошёл игру!</h2>
      <p>Твой секретный код:</p>
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#2d3748",
          borderRadius: "8px",
          fontSize: "24px",
          fontWeight: "bold",
          letterSpacing: "4px",
        }}
      >
        {SECRET_CODE}
      </div>
      <p style={{ marginTop: "20px" }}>
        Отправь этот код Ксюше, чтобы получить свой подарок! ❤️‍🔥
      </p>

      <button
        onClick={() => dispatch({ type: "RESET_GAME" })}
        style={{
          marginTop: "30px",
          padding: "12px 24px",
          background: "#a0aec0",
          color: "black",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        В начало
      </button>
    </div>
  );
};

export default VictoryScreen;
