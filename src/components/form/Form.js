import React, { useState } from 'react';
import useGameStore from '../../state/useGameStore';
import FormInput from './FormInput';
import FormButton from './FormButton';
import styles from './Form.module.css';

const Form = () => {
  const [dimension, setDimension] = useState('');
  const { useGameDispatch } = useGameStore();
  const dispatch = useGameDispatch();

  const onSubmitHandler = () => {
    dispatch({ type: 'SET_DIMENSION', dimension: parseInt(dimension) });
  };

  const onKeyPresshandler = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter hit...');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <FormInput
          placeholder="Enter Dimension Here"
          value={dimension} onChange={setDimension} />
        <FormButton onClick={onSubmitHandler} onKeyPress={onKeyPresshandler} />
      </div>
    </div>
  );
}

export default Form;

