import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useDimensionStore from './state/useDimensionStore';
import Form from './components/form/Form';
import CheckerBoard from './components/checkerBoard/CheckerBoard';
import styles from './App.module.css';

function App() {
  const { DimensionProvider, useDimension } = useDimensionStore();

  return (
    <>
      <DimensionProvider>
        <Form />
        <CheckerBoard />
      </DimensionProvider>
    </>
  );
}

export default App;
