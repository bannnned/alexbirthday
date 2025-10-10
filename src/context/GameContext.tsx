// src/context/GameContext.tsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { GameState } from '../types';
import { scenes } from '../data/scenes';

const TOTAL_SCENES = scenes.length;

type GameAction =
  | { type: 'NEXT_LINE' }
  | { type: 'PREV_LINE' }
  | { type: 'MAKE_CHOICE'; choiceIndex: number; sceneId: number }
  | { type: 'RESTART_FROM_CURRENT' }
  | { type: 'RESET_GAME' };

const initialState: GameState = {
  currentSceneId: 1,
  currentLineIndex: 0,
  lives: 3,
  completedScenes: [],
  choicesHistory: [],
  isGameOver: false,
  isVictory: false,
};

const STORAGE_KEY = 'happy24_game_state';

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
    case 'NEXT_LINE':
      if (state.currentLineIndex < scenes[state.currentSceneId - 1].dialogue.length - 1) {
        return { ...state, currentLineIndex: state.currentLineIndex + 1 };
      }
      return state;

    case 'PREV_LINE':
      if (state.currentLineIndex > 0) {
        return { ...state, currentLineIndex: state.currentLineIndex - 1 };
      }
      return state;

    case 'MAKE_CHOICE': {
      const { choiceIndex, sceneId } = action;
      const scene = scenes.find(s => s.id === sceneId)!;
      const choice = scene.choices[choiceIndex];

      let newLives = state.lives;
      let isGameOver = state.isGameOver;
      let isVictory = state.isVictory;
      let nextSceneId = state.currentSceneId;

      if (!choice.isCorrect) {
        newLives -= 1;
        if (newLives <= 0) {
          isGameOver = true;
        }
      }

      const newCompleted = [...state.completedScenes, sceneId];
      const newHistory = [...state.choicesHistory, { sceneId, choiceIndex }];

      // Если не проиграл и не последняя сцена — идём дальше
      if (!isGameOver && sceneId < TOTAL_SCENES) {
        nextSceneId = sceneId + 1;
      } else if (sceneId === TOTAL_SCENES && choice.isCorrect) {
        isVictory = true;
      }

      const newState: GameState = {
        currentSceneId: isGameOver ? sceneId : nextSceneId,
        currentLineIndex: 0,
        lives: isGameOver ? 3 : newLives, // при проигрыше — жизни сбрасываются при рестарте
        completedScenes: isGameOver ? state.completedScenes : newCompleted,
        choicesHistory: newHistory,
        isGameOver,
        isVictory,
      };
      return newState;
    }

    case 'RESTART_FROM_CURRENT':
      return {
        ...initialState,
        currentSceneId: state.currentSceneId,
        completedScenes: state.completedScenes.filter(id => id < state.currentSceneId),
      };

    case 'RESET_GAME':
      const freshState = { ...initialState };
      return freshState;

    default:
      return state;
  }
}

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | null>(null);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState, () => {
    const saved = loadState();
    if (!saved) return initialState;
    
    // Защита: оставляем только валидные поля
    return {
      ...initialState,
      currentSceneId: saved.currentSceneId && saved.currentSceneId >= 1 ? saved.currentSceneId : 1,
      currentLineIndex: saved.currentLineIndex ?? 0,
      lives: saved.lives && saved.lives >= 0 && saved.lives <= 3 ? saved.lives : 3,
      completedScenes: Array.isArray(saved.completedScenes) ? saved.completedScenes : [],
      choicesHistory: Array.isArray(saved.choicesHistory) ? saved.choicesHistory : [],
      isGameOver: Boolean(saved.isGameOver),
      isVictory: Boolean(saved.isVictory),
    };
  });

  useEffect(() => {
    saveState(state);
  }, [state]);

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};