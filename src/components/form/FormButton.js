import React from 'react';
import styles from './FormButton.module.css';

const FormButton = ({ onClick, onKeyPress }) => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} onClick={onClick} onKeyPress={onKeyPress}>
        Submit
      </button>
    </div>
  );
}

export default FormButton;
