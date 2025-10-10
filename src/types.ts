// src/types.ts

export type CharacterName = 'Саша' | 'Мама' | 'Дима'; // расширь по мере добавления персонажей

export interface DialogueLine {
  speaker: CharacterName;
  mood?: string;
  position: 'left' | 'right';
  text: string;
}

export interface Choice {
  text: string;
  isCorrect: boolean;
  feedback: {
    character: CharacterName;
    text: string;
  }[];
}

export interface Scene {
  id: number;
  age: number;
  location: string;
  background: string; // путь относительно public или src/assets (мы используем импорт)
  characters: CharacterName[];
  dialogue: DialogueLine[];
  choices: Choice[];
}

export interface GameState {
  currentSceneId: number;
  currentLineIndex: number;
  lives: number;
  completedScenes: number[];
  choicesHistory: { sceneId: number; choiceIndex: number }[];
  isGameOver: boolean;
  isVictory: boolean;
}