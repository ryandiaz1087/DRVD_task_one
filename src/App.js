import React from 'react';
import useGameStore from './state/useGameStore';
import Form from './components/form/Form';
import CheckerBoard from './components/checkerBoard/CheckerBoard';

function App() {
  const { GameProvider } = useGameStore();

  return (
    <>
      <GameProvider>
        <Form />
        <CheckerBoard />
      </GameProvider>
    </>
  );
}

export default App;
