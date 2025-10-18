// src/App.tsx
import { GameProvider, useGame } from './context/GameContext';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';
import VictoryScreen from './components/VictoryScreen';
import StartScreen from './components/StartScreen';

function AppContent() {
  const { state } = useGame();

  if (!state.hasStarted) return <StartScreen />;
  if (state.isGameOver) return <GameOverScreen />;
  if (state.isVictory) return <VictoryScreen />;

  return <GameScreen />;
}

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;