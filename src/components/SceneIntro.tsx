// src/components/SceneIntro.tsx
import React, { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import { scenes } from '../data/scenes';

const SceneIntro: React.FC = () => {
  const { state, dispatch } = useGame();
  const [isVisible, setIsVisible] = useState(false);
  const scene = scenes.find(s => s.id === state.currentSceneId)!;

 
  // Показываем плашку при начале этапа
  useEffect(() => {
    if (!state.currentSceneStarted) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        // После анимации — помечаем этап как "начатый"
        dispatch({
          type: 'SET_SCENE_STARTED',
          payload: true,
        });
      }, 3000); // 3 секунды

      return () => clearTimeout(timer);
    }
  }, [state.currentSceneId, state.currentSceneStarted, dispatch]);

  if (!isVisible || state.currentSceneStarted) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0, 0, 0, 0.85)',
        color: 'white',
        padding: '24px 32px',
        borderRadius: '16px',
        textAlign: 'center',
        zIndex: 2000,
        animation: 'sceneIntroFade 0.4s ease-out',
      }}
    >
      <div style={{ fontSize: '1.1rem', marginBottom: '8px' }}>
        {scene.location}
      </div>
      <div style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>
        {scene.age} лет
      </div>
    </div>
  );
};

export default SceneIntro;