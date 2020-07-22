import React, { useState } from 'react';
import FormInput from './FormInput';
import FormButton from './FormButton';
import styles from './Form.module.css';

const Form = () => {
  const [dimension, setDimension] = useState();



  return (
    <div className={styles.formContainer}>
      <FormInput placeholder="Enter Dimension Here" value={dimension} onChange={setDimension} />
      <FormButton />
    </div>
  );
}

export default Form;

