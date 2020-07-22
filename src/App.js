import React from 'react';
import useDimensionStore from './state/useDimensionStore';
import Form from './components/form/Form';
import CheckerBoard from './components/checkerBoard/CheckerBoard';
import styles from './App.module.css';

function App() {
  const { DimensionProvider } = useDimensionStore();
  return (
    <div className={styles.container}>
      <DimensionProvider>
        <Form />
        <CheckerBoard />
      </DimensionProvider>
    </div>
  );
}

export default App;
