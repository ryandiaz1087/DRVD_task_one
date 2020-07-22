import React from 'react';
import styles from './FormInput.module.css';

const FormInput = ({ value, onChange, placeholder }) => {
  return (
    <input
    className={styles.input}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)} />
  );
}

export default FormInput;
