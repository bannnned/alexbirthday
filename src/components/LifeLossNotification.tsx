// src/components/LifeLossNotification.tsx
import React, { useState, useEffect } from 'react';

interface LifeLossNotificationProps {
  isVisible: boolean;
  hasSceneChanged: boolean;
  feedbackIndex: number | null;
  onHidden: () => void;
}

const LifeLossNotification: React.FC<LifeLossNotificationProps> = ({ isVisible, hasSceneChanged, feedbackIndex, onHidden }) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    console.log({isVisible})
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        // Дадим время на завершение анимации перед вызовом onHidden
        const hideTimer = setTimeout(onHidden, 300); // 300ms = длительность fade-out
        return () => clearTimeout(hideTimer);
      }, 1000); // показываем 1 секунду

      return () => clearTimeout(timer);
    }

    
  }, [isVisible, onHidden]);

  useEffect(() => {
    console.log({hasSceneChanged})
    // if(hasSceneChanged) {
      setShow(false)
    // }
  }, [hasSceneChanged, feedbackIndex])

  console.log({show})

  if (!show) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'rgba(0, 0, 0, 0.85)',
        color: '#e53e3e',
        padding: '16px 24px',
        borderRadius: '12px',
        fontSize: '28px',
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: 1000,
        animation: 'lifeLossPop 0.4s ease-out, lifeLossFadeOut 0.3s 1.7s forwards',
      }}
    >
      💔 -1 жизнь
    </div>
  );
};

export default LifeLossNotification;