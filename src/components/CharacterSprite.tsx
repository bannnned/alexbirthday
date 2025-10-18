// src/components/CharacterSprite.tsx
import React from "react";

// 1 stage
import boyCryingFirstStage from "../assets/characters/boy-crying-first-stage.png";
import boyFirstStage from "../assets/characters/boy-first-stage.png";
import boy2ThinkFirstStage from "../assets/characters/boy2-think-first-stage.png";
import boy2 from "../assets/characters/boy2.png";
import momAngryFirstStage from "../assets/characters/mom-angry-first-stage.png";
import momHappyFirstStage from "../assets/characters/mom-happy-first-stage.png";

// 2 stage
import maxim2Stage from "../assets/characters/maxim-2-stage.png";
import maximHappy2Stage from "../assets/characters/maxim-happy-2-stage.png";
import maximSad2Stage from "../assets/characters/maxim-sad-2-stage.png";
import sasha2Stage from "../assets/characters/sasha-2-stage.png";
import trainer2Stage from "../assets/characters/trainer-2-stage.png";
import trainerHappy2Stage from "../assets/characters/trainer-happy-2-stage.png";

// 3 stage
import dadSad3Stage from "../assets/characters/dad-sad-2-stage.png";
import dad3Stage from "../assets/characters/dad-2-stage.png";

// 7 stage
import sasha7stage from "../assets/characters/sasha-7-stage.png";
import maxim7stage from "../assets/characters/maxim-7-stage.png";
import maximSad3Stage from "../assets/characters/maxim-sad-7-stage.png";

// 7 stage
import sasha8stage from "../assets/characters/sasha-8-stage.png";

// 9 stage
import natasha9 from "../assets/characters/natasha9.png";
import natasha9Happy from "../assets/characters/natasha9-happy.png";
import grisha9 from "../assets/characters/grisha9.png";
import timur9 from "../assets/characters/timur9.png";

// 10 stage
import ksu10 from "../assets/characters/ksu-10.png";
import ksu10Happy from "../assets/characters/ksu-10-happy.png";
import ksuSad10 from "../assets/characters/ksu-sad-10.png";

// 12 stage
import sasha12Stage from "../assets/characters/sahsa-12-stage.png";
import karina12 from "../assets/characters/natasha9.png";
import karina12sad from "../assets/characters/grisha9.png";
import karina12happy from "../assets/characters/timur9.png";

const characterImages: Record<string, string | undefined> = {
  // 1 stage
  ДимаПлачет1: boyCryingFirstStage,
  Дима1: boyFirstStage,
  СашаДумает1: boy2ThinkFirstStage,
  Саша1: boy2,
  МамаГрустная1: momAngryFirstStage,
  Мама1: momHappyFirstStage,

  // 2 stage
  Максим2: maxim2Stage,
  МаксимСчастлив2: maximHappy2Stage,
  МаксимГрустный2: maximSad2Stage,
  Саша2: sasha2Stage,
  Тренер2: trainer2Stage,
  ТренерСчастлив2: trainerHappy2Stage,

  // 3 stage
  Папа3: dad3Stage,
  ПапаГрустный3: dadSad3Stage,
  Саша3: undefined,

  // 4 stage
  Саша4: undefined,
  Кирилл4: undefined,
  Никита4: undefined,
  Учитель4: undefined,
  Мама4: undefined,

  // 5 stage
  Саша5: undefined,
  МамаЗлая5: momAngryFirstStage,
  Мама5: momHappyFirstStage,

  // 6 stage
  Саша6: undefined,
  Антон6: undefined,
  Даша6: undefined,

  // 7 stage
  Саша7: sasha7stage,
  Максим7: maxim7stage,
  МаксимГрустный7: maximSad3Stage,

  // 8 stage
  Саша8: sasha8stage,

  // 9 stage
  Гриша9: grisha9,
  Наташа9: natasha9,
  НаташаРадостная9: natasha9Happy,
  Тимур9: timur9,

  // 10 stage
  Саша10: undefined,
  Ксюша10: ksu10,
  КсюшаРадостная10: ksu10Happy,
  КсюшаГрустная10: ksuSad10,

  // 11 stage
  Саша11: undefined,
  Дима11: undefined,

  // 12 stage
  Саша12: sasha12Stage,
  Карина12: karina12,
  КаринаВеселая12: karina12sad,
  КаринаГрустаня12: karina12happy,
};

interface CharacterSpriteProps {
  name: string;
  side?: "left" | "right" | "center";
}

const CharacterSprite: React.FC<CharacterSpriteProps> = ({
  name,
  side = "left",
}) => {
  const img = characterImages[name];
  if (!img) return null;

  return (
    <img
      
      src={img}
      alt={name}
      style={{
        position: "absolute",
        bottom: "-200px",
        left: side === "left" ? "10%" : undefined,
        right: side === "right" ? "10%" : undefined,
        height: "800px",
        userSelect: "none",
      }}
    />
  );
};

export default CharacterSprite;
