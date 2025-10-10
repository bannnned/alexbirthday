// src/components/Background.tsx
import React from 'react';

interface BackgroundProps {
  image: string;
}

const Background: React.FC<BackgroundProps> = ({ image }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -1,
      }}
    />
  );
};

export default Background;