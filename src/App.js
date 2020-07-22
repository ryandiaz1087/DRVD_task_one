import React from 'react';
import useDimensionStore from './state/useDimensionStore';
import Form from './components/form/Form';
import CheckerBoard from './components/checkerBoard/CheckerBoard';
import styles from './App.module.css';

function App() {
  const { DimensionProvider } = useDimensionStore();
  const board = [];
  for (let row = 1; row <= 8; row++) {
    board.push(<CheckerBoard even={ row % 2 === 0 ? false : true} />)
  }
  return (
    <div className={styles.container}>
      <DimensionProvider>
        <Form />
        {board}
      </DimensionProvider>
    </div>
  );
}

export default App;
