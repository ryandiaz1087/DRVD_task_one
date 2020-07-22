import React, { useState } from 'react';
import useDimensionStore from '../../state/useDimensionStore';
import FormInput from './FormInput';
import FormButton from './FormButton';
import styles from './Form.module.css';

const Form = () => {
  const [dimension, setDimension] = useState('');
  const { useDimensionDispatch } = useDimensionStore();
  const dispatch = useDimensionDispatch();

  const onSubmitHandler = () => {
    dispatch({ type: 'SET_DIMENSION', dimension: parseInt(dimension) });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <FormInput
          placeholder="Enter Dimension Here"
          value={dimension} onChange={setDimension} />
        <FormButton onClick={onSubmitHandler} />
      </div>
    </div>
  );
}

export default Form;

