import React from 'react';
import styles from './FormButton.module.css';

const FormButton = ({ onClick }) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} onClick={onClick}>
        Submit
      </button>
    </div>
  );
}

export default FormButton;
