// src/context/GameContext.tsx
import React, { createContext, useContext, useReducer, useEffect } from "react";
import type { GameState } from "../types";
import { scenes } from "../data/scenes";

const TOTAL_SCENES = scenes.length;

type GameAction =
  | { type: "NEXT_LINE" }
  | { type: "PREV_LINE" }
  | { type: "MAKE_CHOICE"; choiceIndex: number; sceneId: number }
  | { type: "NEXT_FEEDBACK" }
  | { type: "PREV_FEEDBACK" }
  | { type: "FINISH_FEEDBACK"; sceneId: number; isCorrect: boolean }
  | { type: "RESTART_FROM_CURRENT" }
  | { type: "RESET_GAME" }
  | { type: "FINISH_GAME" };

const initialState: GameState = {
  currentSceneId: 1,
  currentLineIndex: 0,
  lives: 3,
  completedScenes: [],
  choicesHistory: [],
  isGameOver: false,
  isVictory: false,
  currentFeedbackIndex: null,
  selectedChoiceIndex: null,
};

const STORAGE_KEY = "happy24_game_state";

function loadState(): GameState | null {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
}

function saveState(state: GameState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "NEXT_LINE": {
      const scene = scenes[state.currentSceneId - 1];
      if (!scene) return state;

      const nextIndex = state.currentLineIndex + 1;

      // Если это последняя реплика в финальной сцене (id=13) → победа
      if (state.currentSceneId === 13 && nextIndex >= scene.dialogue.length) {
        return {
          ...state,
          isVictory: true,
          currentLineIndex: scene.dialogue.length - 1,
        };
      }

      return {
        ...state,
        currentLineIndex: Math.min(nextIndex, scene.dialogue.length - 1),
      };
    }

    case "PREV_LINE":
      if (state.currentLineIndex > 0) {
        return { ...state, currentLineIndex: state.currentLineIndex - 1 };
      }
      return state;

    case "MAKE_CHOICE": {
      const { choiceIndex, sceneId } = action;

      let newLives = state.lives;
      let isGameOver = state.isGameOver;
      let isVictory = state.isVictory;
      const scene = scenes.find(s => s.id === sceneId)!;
      const choice = scene.choices[choiceIndex];
      const isCorrect = choice.isCorrect;

      if (!isCorrect) {
        newLives -= 1;
        if (newLives <= 0) {
          isGameOver = true;
        }
      }

      if (sceneId === 13 && isCorrect) {
        isVictory = true;
      }

      // Сохраняем выбор, но НЕ переходим к следующему этапу
      return {
        ...state,
        selectedChoiceIndex: choiceIndex,
        currentFeedbackIndex: 0, // начинаем с первой реплики feedback
        isGameOver,
        isVictory,
      };
    }

    case "NEXT_FEEDBACK": {
      const scene = scenes.find((s) => s.id === state.currentSceneId)!;
      const choice = scene.choices[state.selectedChoiceIndex!];
      const nextIndex = (state.currentFeedbackIndex || 0) + 1;

      if (nextIndex >= choice.feedback.length) {
        // Feedback закончился — теперь обрабатываем результат
        const isCorrect = choice.isCorrect;
        let newLives = state.lives;
        let isGameOver = state.isGameOver;
        let isVictory = state.isVictory;
        let nextSceneId = state.currentSceneId;

        if (!isCorrect) {
          newLives -= 1;
          if (newLives <= 0) {
            isGameOver = true;
          }
        }

        if (!isGameOver && state.currentSceneId < TOTAL_SCENES) {
          nextSceneId = state.currentSceneId + 1;
        } else if (state.currentSceneId === TOTAL_SCENES && isCorrect) {
          isVictory = true;
        }

        return {
          currentSceneId: isGameOver ? state.currentSceneId : nextSceneId,
          currentLineIndex: 0,
          lives: isGameOver ? 3 : newLives,
          completedScenes: isGameOver
            ? state.completedScenes
            : [...state.completedScenes, state.currentSceneId],
          choicesHistory: [
            ...state.choicesHistory,
            {
              sceneId: state.currentSceneId,
              choiceIndex: state.selectedChoiceIndex!,
            },
          ],
          isGameOver,
          isVictory,
          currentFeedbackIndex: null,
          selectedChoiceIndex: null,
        };
      }

      return {
        ...state,
        currentFeedbackIndex: nextIndex,
      };
    }

    case "PREV_FEEDBACK":
      return {
        ...state,
        currentFeedbackIndex: Math.max(
          0,
          (state.currentFeedbackIndex || 0) - 1
        ),
      };

    case "RESTART_FROM_CURRENT":
      return {
        ...initialState,
        currentSceneId: state.currentSceneId,
        completedScenes: state.completedScenes.filter(
          (id) => id < state.currentSceneId
        ),
      };

    case "RESET_GAME":
      const freshState = { ...initialState };
      return freshState;

    case "FINISH_GAME":
      return {
        ...state,
        isVictory: true,
      };

    default:
      return state;
  }
}

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | null>(null);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(gameReducer, initialState, () => {
    const saved = loadState();
    if (!saved) return initialState;

    // Защита: оставляем только валидные поля
    return {
      ...initialState,
      currentSceneId:
        saved.currentSceneId && saved.currentSceneId >= 1
          ? saved.currentSceneId
          : 1,
      currentLineIndex: saved.currentLineIndex ?? 0,
      lives:
        saved.lives && saved.lives >= 0 && saved.lives <= 3 ? saved.lives : 3,
      completedScenes: Array.isArray(saved.completedScenes)
        ? saved.completedScenes
        : [],
      choicesHistory: Array.isArray(saved.choicesHistory)
        ? saved.choicesHistory
        : [],
      isGameOver: Boolean(saved.isGameOver),
      isVictory: Boolean(saved.isVictory),
    };
  });

  useEffect(() => {
    saveState(state);
  }, [state]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within GameProvider");
  return context;
};
