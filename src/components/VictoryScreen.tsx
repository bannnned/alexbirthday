// src/components/VictoryScreen.tsx
import React from "react";
import { useGame } from "../context/GameContext";

const TELEGRAM_LINK = "https://t.me/senyaa11"; // ← ЗАМЕНИ НА РЕАЛЬНУЮ ССЫЛКУ!

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
        width: "100vw",
        background: "linear-gradient(135deg, #1a202c, #2d3748)",
        color: "white",
        textAlign: "center",
        padding: "20px",
        boxSizing: "border-box",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{ fontSize: "2.5rem", marginBottom: "20px", fontWeight: "700" }}
      >
        Поздравляем! Ты прошёл игру! 🎉
      </h1>

      <p
        style={{ fontSize: "1.2rem", marginBottom: "20px", maxWidth: "600px" }}
      >
        Твой код:
      </p>

      <div
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          padding: "20px 40px",
          borderRadius: "12px",
          fontSize: "28px",
          fontWeight: "bold",
          letterSpacing: "6px",
          marginBottom: "30px",
          backdropFilter: "blur(5px)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        LOVE
      </div>

      <p
        style={{ fontSize: "1.1rem", marginBottom: "30px", maxWidth: "600px" }}
      >
        Отправь его любимой, чтобы получить свой подарок.
      </p>

      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "14px 32px",
          background: "#0088cc",
          color: "white",
          textDecoration: "none",
          borderRadius: "50px",
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "20px",
          boxShadow: "0 4px 15px rgba(0, 136, 204, 0.4)",
          transition: "transform 0.2s, background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Написать Ксюше в Telegram
      </a>

      <button
        onClick={() => dispatch({ type: "RESET_GAME" })}
        style={{
          padding: "12px 28px",
          background: "rgba(255, 255, 255, 0.1)",
          color: "white",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "50px",
          fontSize: "16px",
          cursor: "pointer",
          backdropFilter: "blur(5px)",
          transition: "background 0.3s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")
        }
      >
        В начало
      </button>
    </div>
  );
};

export default VictoryScreen;
