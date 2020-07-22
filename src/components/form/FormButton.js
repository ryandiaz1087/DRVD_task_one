import React from 'react';
import styles from './FormButton.module.css';

const FormButton = () => {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.btn} type="submit">
        Submit
      </button>
    </div>
  );
}

export default FormButton;
