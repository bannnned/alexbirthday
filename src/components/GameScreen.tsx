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
import FeedbackBox from "./FeedbackBox";
import FeedbackNavigation from "./FeedbackNavigation";

const GameScreen: React.FC = () => {
  const { state, dispatch } = useGame();
  const scene = scenes.find((s) => s.id === state.currentSceneId)!;

  // Определяем, что сейчас показываем
  const isShowingFeedback = state.currentFeedbackIndex !== null;
  const currentLine = isShowingFeedback
    ? scene.choices[state.selectedChoiceIndex!].feedback[
        state.currentFeedbackIndex!
      ]
    : scene.dialogue[state.currentLineIndex];

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

  // Определяем позицию персонажа для feedback
  const getFeedbackPosition = (
    character: string
  ): "left" | "right" | "center" => {
    if (character === "Саша") return "right";
    if (character === "") return "center"; // для системных реплик
    return "left";
  };

  return (
    <>
      <Background image={scene.background} />

      {!isShowingFeedback ? (
        <CharacterSprite
          name={currentLine.speaker + (currentLine.mood ?? "") + scene.id}
          side={currentLine.position}
        />
      ) : currentLine.speaker !== "" ? (
        <CharacterSprite
          name={currentLine.speaker + (currentLine.mood ?? "") + scene.id}
          side={getFeedbackPosition(currentLine.speaker)}
        />
      ) : null}

      <HUD />

      {isShowingFeedback ? (
        <FeedbackBox feedback={currentLine} />
      ) : (
        <DialogueBox />
      )}

      {isShowingFeedback ? (
        <FeedbackNavigation
          currentIndex={state.currentFeedbackIndex!}
          total={scene.choices[state.selectedChoiceIndex!].feedback.length}
          onPrev={() => dispatch({ type: "PREV_FEEDBACK" })}
          onNext={() => dispatch({ type: "NEXT_FEEDBACK" })}
          isLast={state.currentFeedbackIndex === scene.choices[state.selectedChoiceIndex!].feedback.length - 1}
        />
      ) : (
        <>
          <ChoiceButtons />
          <NavigationArrows />
        </>
      )}

      <LifeLossNotification
        isVisible={showLifeLoss}
        onHidden={handleLifeLossHidden}
      />
    </>
  );
};

export default GameScreen;
