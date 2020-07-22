import React from 'react';
import Form from './components/form/Form';
import CheckerBoard from './components/checkerBoard/CheckerBoard';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
        <Form />
        {/* <CheckerBoard /> */}
    </div>
  );
}

export default App;
