import React from 'react';
import useDimensionStore from '../../state/useDimensionStore';
import CheckerRow from './CheckerRow';
import styles from './CheckerBoard.module.css';

const CheckerBoard = () => {
  const { useDimension } = useDimensionStore();
  const { dimension } = useDimension();

  let board = [];
  for (let row = 1; row <= dimension; row++) {
    board.push(<CheckerRow dimension={dimension} />)
  }

  return (
    <div className={styles.checkerBoard}>
      {board}
    </div>
  );
}

export default CheckerBoard;
