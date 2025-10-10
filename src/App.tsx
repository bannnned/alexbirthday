import { GameProvider } from './context/GameContext';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';
import VictoryScreen from './components/VictoryScreen';
import { useGame } from './context/GameContext';
import './App.css'

function App() {
  return (
    <GameProvider>
      <GameRouter />
    </GameProvider>
  );
}

function GameRouter() {
  const { state } = useGame();

  if (state.isGameOver) return <GameOverScreen />;
  if (state.isVictory) return <VictoryScreen />;

  return <GameScreen />;
}

export default App;