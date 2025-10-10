// src/data/scenes.ts
import type { Scene } from '../types';

// Импортируем изображения как модули (чтобы TS и Webpack/Vite их обработали)
import scene1Bg from '../assets/bg/apartments.png';
// Позже добавишь: import scene2Bg from '../assets/backgrounds/scene2.jpg'; и т.д.

export const scenes: Scene[] = [
  {
    id: 1,
    age: 7,
    location: 'Мурманск, Инженерная ул.',
    background: scene1Bg,
    characters: ['Саша', 'Мама', 'Дима'],
    dialogue: [
      { speaker: 'Мама', text: 'Саша, мне нужно сходить в парикмахерскую. Будь добр, присмотри за Димой. Он маленький, может упасть', position: 'left' },
      { speaker: 'Саша', text: 'Маам, ну я же хочу с ребятами в футбол поиграть…', position: 'right' },
      { speaker: 'Дима', text: 'Саш, пошли гулять! На улице так тепло!', position: 'left' },
      { speaker: 'Мама', mood: 'Злая', text: 'Ты старший брат. На тебе ответственность.', position: 'left' },
      { speaker: 'Саша', mood: 'Думает', text: 'Эх, как же быть?..', position: 'right' },
    ],
    choices: [
      {
        text: 'Присмотреть за Димой и пойти с ним гулять',
        isCorrect: true,
        feedback: [
          { character: 'Дима', text: 'Ура! Ты самый лучший брат!' },
          { character: 'Мама', text: 'Спасибо, Саша. Вот так и должен поступать настоящий мужчина.' },
        ],
      },
      {
        text: 'Убежать к друзьям и оставить Диму',
        isCorrect: false,
        feedback: [
          { character: 'Дима', text: 'Ты обещал…' },
          { character: 'Мама', text: 'Саша, я на тебя рассчитывала. Очень жаль.' },
        ],
      },
    ],
  },
  // Добавь остальные 11 сцен позже
];