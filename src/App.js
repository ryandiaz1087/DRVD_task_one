import React from 'react';
import useDimensionStore from './state/useDimensionStore';
import Form from './components/form/Form';
import CheckerBoard from './components/checkerBoard/CheckerBoard';

function App() {
  const { DimensionProvider } = useDimensionStore();

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
