// src/components/StartScreen.tsx
import React from "react";
import { useGame } from "../context/GameContext";

const StartScreen: React.FC = () => {
  const { dispatch } = useGame();

  const handleStart = () => {
    dispatch({ type: "START_GAME" });
  };

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #1a202c, #2d3748)",
        color: "white",
        textAlign: "center",
        padding: "20px",
        boxSizing: "border-box",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1>Happy 24th Birthday</h1>

      <div
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          padding: "25px",
          borderRadius: "16px",
          maxWidth: "700px",
          marginBottom: "30px",
          lineHeight: 1.7,
        }}
      >
        Привет! Сегодня твой день рождения, и я бы очень хотела провести его с
        тобой. Хоть сейчас мы не рядом, я приготовила для тебя подарок, который
        тебе предстоит найти. Перед тобой игра, где ты сыграешь за своего
        персонажа. Твоя задача – пройти путь до 24-летия, делая на своем
        жизненном пути правильные выборы. У тебя есть 3 жизни: если ты их
        потеряешь, то игра закончится, и придется начать все сначала. В конце ты
        увидишь секретный код: отправь его мне, чтобы узнать, как получить свой
        подарок. Удачи! ❤️‍🔥
      </div>

      <button
        onClick={handleStart}
        style={{
          padding: "16px 48px",
          background: "#e53e3e",
          color: "white",
          border: "none",
          borderRadius: "50px",
          fontSize: "1.3rem",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(229, 62, 62, 0.5)",
          transition: "transform 0.2s, background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Начать игру 🎮
      </button>
    </div>
  );
};

export default StartScreen;
