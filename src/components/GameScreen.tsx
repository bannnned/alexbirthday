// src/components/GameScreen.tsx
import React, { useEffect, useState } from "react";
import Background from "./Background";
import CharacterSprite from "./CharacterSprite";
import HUD from "./HUD";
import DialogueBox from "./DialogueBox";
import ChoiceButtons from "./ChoiceButtons";
import NavigationArrows from "./NavigationArrows";
import { useGame } from "../context/GameContext";
import { scenes } from "../data/scenes";
import LifeLossNotification from "./LifeLossNotification";

const GameScreen: React.FC = () => {
  const { state } = useGame();
  const scene = scenes.find((s) => s.id === state.currentSceneId)!;
  const line = scene.dialogue[state.currentLineIndex];

  const [showLifeLoss, setShowLifeLoss] = useState(false);
  const [prevLives, setPrevLives] = useState(state.lives);

  // Проверяем, уменьшилось ли количество жизней
  useEffect(() => {
    if (state.lives < prevLives && !state.isGameOver) {
      setShowLifeLoss(true);
    }
    setPrevLives(state.lives);
  }, [state.lives, prevLives, state.isGameOver]);

  const handleLifeLossHidden = () => {
    setShowLifeLoss(false);
  };

  return (
    <>
      <Background image={scene.background} />

      <CharacterSprite
        name={line.speaker + (line?.mood ?? "")}
        side={line.position}
      />

      <HUD />
      <DialogueBox />
      <ChoiceButtons />
      <NavigationArrows />

      <LifeLossNotification
        isVisible={showLifeLoss}
        onHidden={handleLifeLossHidden}
      />
    </>
  );
};

export default GameScreen;
