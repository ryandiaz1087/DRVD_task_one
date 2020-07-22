import React from 'react';
import CheckerCell from './CheckerCell';
import styles from './CheckerRow.module.css';

const CheckerRow = ({ dimension }) => {
  let checkerBoardCells = [];
  for (let squares = 1; squares <= dimension; squares++) {
    checkerBoardCells.push(<CheckerCell color={squares % 2 === 0 && 'white'} />)
  }
  
  return (
    <div className={styles.row}>
      {checkerBoardCells}
    </div>
  );
}

export default CheckerRow;