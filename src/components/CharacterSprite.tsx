// src/components/CharacterSprite.tsx
import React from "react";
import boyCryingFirstStage from "../assets/characters/boy-crying-first-stage.png";
import boyFirstStage from "../assets/characters/boy-first-stage.png";
import boy2ThinkFirstStage from "../assets/characters/boy2-think-first-stage.png";
import boy2 from "../assets/characters/boy2.png";
import momAngryFirstStage from "../assets/characters/mom-angry-first-stage.png";
import momHappyFirstStage from "../assets/characters/mom-happy-first-stage.png";

const characterImages: Record<string, string> = {
  СашаПлачет: boyCryingFirstStage,
  Саша: boyFirstStage,
  ДимаДумает: boy2ThinkFirstStage,
  Дима: boy2,
  МамаЗлая: momAngryFirstStage,
  Мама: momHappyFirstStage,
};

interface CharacterSpriteProps {
  name: string;
  side: "left" | "right";
}

const CharacterSprite: React.FC<CharacterSpriteProps> = ({ name, side }) => {
  const img = characterImages[name];
  if (!img) return null;

  return (
    <img
      src={img}
      alt={name}
      style={{
        position: "absolute",
        bottom: "100px",
        left: side === "left" ? "10%" : undefined,
        right: side === "right" ? "10%" : undefined,
        height: "60vh",
        userSelect: "none",
      }}
    />
  );
};

export default CharacterSprite;
