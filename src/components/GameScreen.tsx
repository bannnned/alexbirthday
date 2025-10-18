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
import SceneIntro from "./SceneIntro";

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
  const [prevSceneId, setPrevSceneId] = useState(state.currentSceneId);

  // Проверяем, уменьшилось ли количество жизней
  useEffect(() => {
    console.log(state.lives, { prevLives });
    if (state.lives < prevLives && !state.isGameOver) {
      setShowLifeLoss(true);
    } else if (state.currentSceneId !== prevSceneId) {
      setShowLifeLoss(false);
    }
    setPrevLives(state.lives);
    setPrevSceneId(state.currentSceneId);
  }, [
    state.lives,
    state.currentSceneId,
    prevLives,
    prevSceneId,
    state.isGameOver,
  ]);

  console.log({ showLifeLoss });

  // useEffect(() => {
  //   console.log({currentLine})
  //   if (showLifeLoss) {
  //     setShowLifeLoss(false);
  //   }
  // }, [
  //   currentLine,
  //   showLifeLoss
  // ]);

  const handleLifeLossHidden = () => {
    setShowLifeLoss(false);
  };

  // Определяем позицию персонажа для feedback
  const getFeedbackPosition = (
    character: string
  ): "left" | "right" | "center" => {
    const isSasha = character === "Саша";
    if (isSasha) return "left";
    if (character === "") return "center"; // для системных реплик
    return "right";
  };

  return (
    <>
      <Background image={scene.background} />

      <CharacterSprite
        name={currentLine.speaker + (currentLine.mood ?? "") + scene.id}
        side={getFeedbackPosition(currentLine.speaker)}
      />

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
          isLast={
            state.currentFeedbackIndex ===
            scene.choices[state.selectedChoiceIndex!].feedback.length - 1
          }
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
        hasSceneChanged={state.currentSceneId !== prevSceneId}
        feedbackIndex={state.currentFeedbackIndex}
      />

      <SceneIntro />
    </>
  );
};

export default GameScreen;
