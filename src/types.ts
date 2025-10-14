// src/types.ts

export type CharacterName =
  | ''
  | 'Саша'
  | 'Мама'
  | 'Дима'
  | 'Максим'
  | 'Тренер'
  | 'Папа'
  | 'Кирилл'
  | 'Никита'
  | 'Учитель'
  | 'Антон'
  | 'Даша'
  | 'Гриша'
  | 'Наташа'
  | 'Тимур'
  | 'Ксюша'
  | 'Карина';

export interface DialogueLine {
  speaker: CharacterName;
  mood?: string;
  position?: 'left' | 'right';
  text: string;
}

export interface Choice {
  text: string;
  isCorrect: boolean;
  feedback: DialogueLine[];
}

export interface Scene {
  id: number;
  age: number;
  location: string;
  background: string; // путь относительно public или src/assets (мы используем импорт)
  speakers: CharacterName[];
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
  currentFeedbackIndex: number | null; // null = нет feedback, число = индекс реплики
  selectedChoiceIndex: number | null;  // чтобы знать, чей feedback показывать
}